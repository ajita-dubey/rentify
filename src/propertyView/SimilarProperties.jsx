import React from "react";
import Card from "../forAgents/Card";
function SimilarProperties(props) {
  return (
    <div>
      <div>
        <h3 className="font-bold text-2xl text-center mb-8">
          Similar properties
        </h3>
        <div className="mt-4 w-full">
          <div className="flex md:flex-row flex-col justify-center items-center gap-4">
            <Card
              imgSrc="src/assets/pic1.jpeg"
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
              imgSrc="src/assets/pic2.jpeg"
              available=" "
              furnished={true}
              location="Highgate Hill, N19"
              size="517"
              beds="1"
              price="1000"
            />
            <Card
              imgSrc="src/assets/pic3.jpg"
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
    </div>
  );
}

export default SimilarProperties;
