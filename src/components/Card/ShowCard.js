import { render } from "@testing-library/react";
import React from "react";

import "../Card/image.scss";

function Card(props) {
   // const [url, setURL] = useState(
   //    "https://freenice.net/wp-content/uploads/2021/10/Hinh-ve-don-gian-cute-dang-yeu-va-de-thuc-hien.jpg"
   // );
   // const handleChange = (e) => {
   //    setURL(URL.createObjectURL(e.target.files[0]));
   // };
   return (
      <div className="card">
         <div className="card__body">
            <img className="card__image" src={props.img} alt="Avatar" />
            {/* <input type="file" name="avatar" onChange={handleChange} /> */}
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
         </div>
         <button className="card__btn">View More</button>
      </div>
   );
}

function ShowCard() {
   return (
      <div className="wrapper">
         <Card
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            title="NVA"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />

         <Card
            title="NVA"
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />

         <Card
            title="NVA"
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />

         <Card
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            title="NVA"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />
         <Card
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            title="NVA"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />
         <Card
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            title="NVA"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />
         <Card
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            title="NVA"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />
         <Card
            img="https://images.pexels.com/photos/14175961/pexels-photo-14175961.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            title="NVA"
            description="Some quick example text to build on the card title and make up
               the bulk of the card's content."
         />
      </div>
   );
}
export default ShowCard;
