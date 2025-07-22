import React from "react";
import Card from "../forAgents/Card";
import { Element } from "react-scroll";
function SimilarProperties(props) {
  return (
      <div className=" flex flex-col items-center justify-center w-full">
        <h3 className="font-bold text-2xl text-center mb-8 w-full">
          Similar properties
        </h3>
        <div className=" flex items-center justify-center mx-auto mt-4 w-full">
          <div className="flex md:flex-row flex-col justify-center items-center gap-4 w-full">
            <Card
              imgSrc="https://assets.scraye.com/photos/card/68005fa7dc9c54f3872f0704_91f867e97421957b57c9651144752586a365f6dadc23a5b394de811daec42fca.jpg"
              available=" "
              furnished={true}
              location="Royal Drive, N11"
              size="1325"
              beds="3"
              price="2000"
              isVerified={true}
              commission="5"
            />
            <Card
              imgSrc="./assets/pic2.jpeg"
              available=" "
              furnished={true}
              location="Highgate Hill, N19"
              size="517"
              beds="1"
              price="1000"
            />
            <Card
              imgSrc="./assets/pic3.jpg"
              available=" "
              furnished={true}
              location="Highgate Hill, N19"
              size="492"
              beds="1"
              price="1000"
            />
          </div>
        </div>
      </div>
   
  );
}

export default SimilarProperties;
