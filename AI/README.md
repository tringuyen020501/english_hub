# Workflow Liveness Detection

This document describes the workflow liveness detection mechanism 

## Overview

In verification services related to face recognition (such as eKYC and face access control), the key question is whether the input face video is real (from a live person) or fake (from a video or photo). The workflow liveness detection is a mechanism to detect whether the input face video is real or fake.

## 1. Data Acquisition (DONE)

The workflow liveness detection is based on the face video.

Training data:

1168 videos of faces with facemask, in which 598 are real and 570 are fake.

Testing data:

Public test 2: 468 videos of faces with facemask, without labels.

## 2. Training and Tuning (DONE)

## 3. Deployment on Local (DONE)

Open webcam 5 seconds

Each frame --> Face Detection --> If system detected face, then do `Liveness Dectection`, get liveness_score this frame, else livness_score = 0 

Liveness Detection followings steps:
1. Load the best model.
2. Transform frame from BGR to RGB.
3. Transform the frame with the same transformation as the validation set.
4. Reshape the frame to (1, 3, 224, 224).
5. Predict liveness_score for the frame.

Liveness_score of video = average of liveness_score of all frames in the video.

If liveness_score of video > 0.5, then the video is `Live`, else the video is `Not Live`.

Using Streamlit to build a web app to demo the liveness detection.

![demo](streamlit-inference.gif)

## 4. Integration with main app (TODO)

Build a new API for liveness detection.

Because the liveness detection is a binary classification problem, so the output of the API is a binary label (Live or Not Live).

And optimize the API to run faster.

## Authors

* **Vo Tuan Manh Hung**  - [hungvtm]( https://github.com/hungvtm)