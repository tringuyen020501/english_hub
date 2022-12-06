import React from "react";
import { AiFillBackward } from "react-icons/ai";
const mylists = [
   "Xây dựng cấu trúc nội dung phù hợp với từng nền tảng khóa học",
   "Xác định lợi ích và tính năng nổi bật của khóa học",
   "Xác định đối tượng khách hàng và nhu cầu của họ trước khi viết nội dung giới thiệu",
];
function MyList() {
   const listItems = mylists.map((mylist) => <li>{mylist}</li>);
   return <ul style={{ marginLeft: "50px" }}>{listItems}</ul>;
}

function Detail() {
   return (
      <div>
         <a href="/card">
            <AiFillBackward />
         </a>
         <img
            src={"https://www.udn.vn/Portals/0/1doan%20thanh%20nien%20bk.jpg"}
            height={"400px"}
            width={"100%"}
            alt=""
         />
         <br />
         <p>
            Tình yêu là thứ tình cảm đặc biệt mỗi người đều trải qua ít nhất 1
            lần trong đời. Những câu châm ngôn tình yêu chia sẻ trong bài viết
            dưới đây sẽ giúp bạn cảm nhận rõ hơn những cung bậc cảm xúc như:
            buồn, vui, hạnh phúc, đau khổ, nhớ nhung, hối tiếc ... Chắc hẳn các
            bạn sẽ bắt gặp hình ảnh chuyện tình của mình trong 1 vài câu châm
            ngôn này
         </p>
         <br />
         <MyList />
      </div>
   );
}

export default Detail;
