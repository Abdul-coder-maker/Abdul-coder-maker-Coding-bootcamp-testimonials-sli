import React, { useState } from "react";
import "./App.css";
import patternBg from "./images/pattern-bg.svg";
import tanya from "./images/image-tanya.jpg";
import john from "./images/image-john.jpg";
import nextIcon from "./images/icon-next.svg";
import prevIcon from "./images/icon-prev.svg";
import quotes from "./images/pattern-quotes.svg";


function App() {
  const [people, setPeople] = useState(images);
  const [value, setValue] = useState(0);
  const { id, src, alt, name, role, content } = people[value];
  const prev = () => {
    let lastOne = value - 1;
    if (lastOne < 0) {
      lastOne = people.length - 1;
    }
    setValue(lastOne);
  }
  const next = () => {
    let nextOne = value + 1;
    if (nextOne > people.length - 1) {
      nextOne = 0;
    }
    setValue(nextOne);
  };
  return (
    <div className="relative h-screen antialiased lg:flex lg:flex-row-reverse lg:items-center lg:justify-center font-inter">
      <div className="z-0 flex items-center justify-center mx-auto mt-6 bg-center bg-no-repeat bg-contain max-w-1sm h-73 bg-pattern lg:bg-none sm:h-96 lg:mt-0 lg:mx-0 lg:relative lg:right-17">
        <div className="relative shadow-4xl">
          <img
            key={id}
            className="lg:z-10 lg:relative h-62 w-63 md:w-80 md:h-auto lg:w-100 lg:h-100"
            src={src}
            alt={alt}
          />
          <img
            className="absolute top-0 z-0 hidden transform scale-130 lg:block lg:mt-3"
            src={patternBg}
            alt=""
          />

          <div className="absolute bottom-0 flex justify-center w-full transform translate-y-1/2 lg:z-10 lg:justify-start">
            <div className="flex p-3 space-x-4 bg-white rounded-full shadow-2xl lg:px-6 lg:w-28 lg:h-14 lg:flex lg:justify-between lg:items-center lg:relative lg:bottom-0 lg:left-14 lg:shadow-3xl">
              <button onClick={prev}>
                <img
                  className="h-11 lg:h-4"
                  src={prevIcon}
                  tabIndex="0"
                  alt="previous one"
                  title="previous one"
                />
              </button>
              <button onClick={next}>
                <img
                  className="h-11 lg:h-4"
                  tabIndex="1"
                  src={nextIcon}
                  alt="next one"
                  title="next one"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-8 text-center max-w-1sm lg:mt-0 lg:mx-0">
        <img
          className="mx-auto w-15 lg:absolute lg:left-32 lg:-top-14 lg:w-28"
          src={quotes}
          alt=""
        />
        <p className="font-light transform -translate-y-6 lg:relative lg: text-dark-blue lg:-translate-y-0 lg:left-8 text-text-review lg:text-left">
          {content}
        </p>

        <div className=" lg:flex lg:items-center lg:space-x-3 lg:mt-8 lg:left-8 lg:relative">
          <h1 className="font-bold leading-5 text-dark-blue md:text-2xl lg:text-xl lg:leading-9">
            {name}
          </h1>
          <h2 className="font-medium leading-5 text-grayish-blue md:text-xl lg:text-xl lg:leading-9">
            {role}
          </h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-65 h-19 md:h-31 md:w-120 bg-bg-curve"></div>
    </div>
  );
}

const images = [
  {
    id: 1,
    src: tanya,
    alt: "tanya",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    content:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },
  {
    id: 2,
    src: john,
    alt: "john",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    content:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
];
export default App;
