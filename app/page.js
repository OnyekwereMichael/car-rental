import Header from "../app/Component/Header/page"
import Image from "next/image";
import image from '../public/assets'
export default function Home() {
  return (
    <div>
       <Header />
       <main>
        <div className="grid grid-cols-2 gap-4 p-6"> 
            <div className="bg-[#54A6FF] text-white p-4 rounded-xl">
              <h1 className="text-[32px] mb-3">The Best Platform<br /> for Car Rental</h1>
              <p className="text-[16px] leading-6 mb-2">Ease of doing a car rental safely and<br /> reliably. Of course at a low price.</p>
              <button className="bg-[#3563E9] rounded-md p-2 text-center text-white mt-4 mb-3 w-[17%]">Rental Car</button>
              <Image src={image.CarImage1} className="mt-2 mx-auto"/>
            </div>
            <div className="bg-[#3563E9] text-white p-4 rounded-xl">
              <h1 className="text-[32px] mb-3">Easy way to rent a<br /> car at a low price</h1>
              <p className="text-[16px] leading-6 mb-2">Providing cheap car rental services<br /> and safe and comfortable facilities.</p>
              <button className="bg-[#54A6FF] rounded-md p-2 text-center text-white mt-4 mb-3 w-[17%]">Rental Car</button>
              <Image src={image.CarImage2} className="mt-2 mx-auto"/>
            </div>
         </div>
       </main>
    </div>
  );
}
