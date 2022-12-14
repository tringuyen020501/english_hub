import math
import time
import cv2
from torchvision import transforms, models
from torch import nn
import torch
from PIL import Image
import numpy as np
import streamlit as st
import onnx
import onnxruntime as ort
import warnings
warnings.filterwarnings("ignore")


def softmax(arr):
    sum_exp = 0
    for elem in arr:
        sum_exp += math.exp(elem)

    for i in range(len(arr)):
        arr[i] = math.exp(arr[i]) / sum_exp

    return arr


def trans_frame(frame):
    mean_nums = [0.485, 0.456, 0.406]
    std_nums = [0.229, 0.224, 0.225]
    trans = transforms.Compose(
        [
            transforms.Resize((224, 224)),
            transforms.ToTensor(),
            transforms.Normalize(mean_nums, std_nums),
        ]
    )

    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    frame = Image.fromarray(frame)
    frame = trans(frame)
    frame = frame.float()
    frame = frame.view(1, 3, 224, 224)

    return frame


def inference(model, frame):
    frame = trans_frame(frame)
    output = model.run(None, {'input': frame.cpu().detach().numpy()})
    output = softmax(output[0][0])

    return output[1]


def load_model(path):
    model = models.regnet_y_400mf(pretrained=True)

    fc_inputs = model.fc.in_features
    model.fc = nn.Linear(fc_inputs, 2)
    nn.init.xavier_normal_(model.fc.weight)
    nn.init.constant_(model.fc.bias, 0)

    model = model.to("cpu")
    model.load_state_dict(torch.load(path, map_location=torch.device("cpu")))

    return model


my_model = ort.InferenceSession('super_resolution.onnx')


def ekyc():
    st.write("Please hold your face in the frame for 5 seconds")
    cap = cv2.VideoCapture(0)
    stat = end = time.time()
    face_cascade = cv2.CascadeClassifier(
        cv2.data.haarcascades + "haarcascade_frontalface_default.xml"
    )

    count_frame = 0
    list_score = []

    FRAME_WINDOW = st.image([])
    while end - stat < 5:

        count_frame += 1
        ret, img = cap.read()
        if not ret:
            break

        img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        face = face_cascade.detectMultiScale(img_gray, 1.1, 4)

        show_frame = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        for (x, y, w, h) in face:
            cv2.rectangle(show_frame, (x, y), (x + w, y + h), (255, 0, 0), 2)
        FRAME_WINDOW.image(show_frame)

        img = cv2.flip(img, 1)
        # img = img[:, 150:490, :]

        if len(face):
            list_score.append(inference(my_model, img))
        else:
            list_score.append(0)

        end = time.time()

    
    # clear area
    FRAME_WINDOW.empty()
    st.write("Processing...")

    print("count_frame: ", count_frame)
    return np.mean(list_score)


st.set_page_config("eKYC", layout="wide", page_icon="logo.png")
st.title("eKYC")

if st.button("Start"):
    # start webcam and capture 5 seconds
    score = ekyc()
    st.write("Lives Score: ", score)

    if score > 0.5:
        st.success("Live")
    else:
        st.error("Not Live")