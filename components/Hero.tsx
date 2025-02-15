"use client";

import InputContainer from "./InputContainer"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"

const Hero = ({getResult}: {getResult: any}) => {

    const words2 = [
        {
          text: "أطبخ",
        },
        {
          text: "بما",
        },
        {
          text: "لديك",
        },
    ] 

    const words = [
        {
          text: "بلاصتك",
        },
        {
          text: "في",
        },
        // {
        //   text: " ا̶ل̶ك̶و̶ز̶ي̶ن̶ة̶",
        // },
        {
          text: "كوسينيتا",
        },
    ]
    
  return (
    <section
        className="min-h-screen bg-c-back font-main container w-screen relative"
    >
        <div className="flex flex-col justify-center items-start h-full pt-20 md:pr-10">
            {/* <h1 className="font-bold font-main text-4xl text-c-primary">اطبخ بما لديك!</h1> */}
            <TypewriterEffectSmooth words={words} className="md:text-4xl max-md:text-2xl text-c-primary max-w-full" />
            <p className="text-xl mt-4">أدخلي المكونات وسنقترح لك وصفات جزائرية شهية حسب المكونات المتوفرة لديك!</p>
            <InputContainer getResult={getResult} />
        </div>
    </section>
  )
}

export default Hero