import React, { useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { motion } from "framer-motion"
import { useScroll } from "framer-motion"

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://gplclub.co/wp-content/uploads/2024/08/AIM-1.jpg",
      top: "60%",
      left: "51.5%",
      isActive: false,
    },
    {
      url: "https://gplclub.co/wp-content/uploads/2024/08/OCHI.jpg",
      top: "55%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://gplclub.co/wp-content/uploads/2024/08/AIM-2.jpg",
      top: "65%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://gplclub.co/wp-content/uploads/2024/08/people.jpg",
      top: "68%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://gplclub.co/wp-content/uploads/2024/08/Eminente_First.jpg",
      top: "72%",
      left: "58%",
      isActive: false,
    },
    {
      url: "https://gplclub.co/wp-content/uploads/2024/08/AIM-1.jpg",
      top: "76%",
      left: "48%",
      isActive: false,
    },
  ])

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) => ({
          ...item,
          isActive: arr.includes(index), // More efficient check for active status
        }))
      );
    }

    const percentage = Math.floor(data * 100);

switch (percentage) {
  case 0:
    imagesShow([])
    break;
  case 1:
    imagesShow([0])
    break;
  case 3:
    imagesShow([0, 1])
    break;
  case 5:
    imagesShow([0, 1, 2])
    break;
  case 6:
    imagesShow([0, 1, 2, 3])
    break;
  case 7:
    imagesShow([0, 1, 2, 3, 4])
    break;
  case 8:
    imagesShow([0, 1, 2, 3, 4, 5])
    break;
}
})


return (
  <div className="w-full relative mt-10" >
    <div className="max-w-screen-xl mx-auto text-center ">
      <h1 className="text-[25vw] leading-none font-medium  select-none whitespace-nowrap">
        Work
      </h1>
      <div className="absolute top-0 inset-0">
        {images.map(
          (elem, index) =>
            elem.isActive && (
              <img
                key={index} // Ensure unique key for each image
                className="absolute w-[13vw] rounded-lg -translate-x-[50%] -translate-y-[50%]"
                style={{ top: elem.top, left: elem.left }}
                src={elem.url}
              />
            )
        )}
      </div>
    </div>
  </div>
);
}

export default Work;
