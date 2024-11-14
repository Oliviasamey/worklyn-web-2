import React, {useState} from "react";
import { RxDotFilled } from "react-icons/rx";


function Carousel() {
    const slides = [
        {
            url: `${process.env.PUBLIC_URL}/Card7.png`
        },
        {
          url:`${process.env.PUBLIC_URL}/Card10.png`
        },
        {
          url:'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
        },
    ]

const [currentIndex, setCurrentIndex] = useState(0)
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
}

return (
    <>
        <div className=" w-full grid place-items-center">
                
            <div className="max-w-[1500px] h-[350px] w-[500px] m-auto py-16 px-4 relative">
              <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                                             
              </div>
            </div>
                
            <div className="flex top-4 justify-center py-2">
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-3xl cursor-pointer"> 
                  <RxDotFilled/>
                </div>
              ))}
            </div>

        </div>

    </>
)

}

export default Carousel;

// import { Carousel } from "@material-tailwind/react";
 
// export function CarouselDefault() {
//   return (
//     <Carousel className="rounded-xl">
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="Card1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="Card2"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// }