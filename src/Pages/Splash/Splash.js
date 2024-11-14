
// import {ReactComponent as Artboard5copy} from  './Assets/Artboard5copy.svg';
// import Artboard5copy from './Assets/Artboard5copy.png';
// import { Carousel } from "@material-tailwind/react"
import Carousel, { CarouselDefault } from "../../Components/carousel"
import { Button } from "../../Components/button";
import React, { useState } from "react";


export default function () {
    return (
        <>
            <div className=" w-full grid place-items-center">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/Artboard5copy.svg`} className="size-2/3 " alt="Artboard 5 Copy" />
                    <h2 class="text-5xl font-semibold text-center max-w-xl">
                        Hello I am Worklyn, your AI personal assistant
                    </h2>
                    <Carousel></Carousel>
                    <Button>Continue</Button>
                    <Button>Sign In</Button>

                </div>

            </div>


        </>
    )
}

