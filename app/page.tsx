import Counter from "@/components/Counter"
import Image from "next/image"

import altarPic from "@/public/altar2.jpeg"

export default function Shrine() {
  return (
    <div className='m-auto w-fit'>
      <h6 className='font-black text-9xl text-center m-auto pt-9'>&#9825;kim chaewon&#9825;</h6>
      <Image
        src={altarPic}
        alt='our lord and savior kim chaewon'
        style={{
          width: '30%',
          height: 'auto',
          display: 'block',
          margin: 'auto'
        }}
      />
      <Counter
        buttonText='pay respect'
        counterText='our lord and savior has been worshipped'
        unit='times'
        />
    </div>
  )
}
