import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="absolute bg-[#16D4D4] blur-[100px] h-24 w-full rounded-full bottom-0"></div>
      <main className="flex min-h-screen flex-col items-center justify-between">
        
        <div className="bg-grid bg-repeat">
          
          <div className="flex flex-col items-center">
          <h1 className="text-[#000] text-6xl font-roboto font-bold text-center mt-48">
            The <span className="text-[#16D4D4]">Fastest </span>way to create a{" "}
            <span className="text-[#16D4D4]">Personal </span>
            <br />
            README
          </h1>
          <p className="font-roboto text-lg text-center text-gray-500 mt-2">Our simple editor allows you to quickly add and customize<br/> all the sections you need for your project&apos;s readme</p>

          <a href="#" className="rounded-lg bg-[#202020] hover:bg-gray-900 text-white text-lg font-semibold w-36 h-14 flex items-center justify-center mt-8">
            Get Started
          </a>
          </div>

          


          <h2></h2>
        </div>
        <div className="h-96 w-full bg-[#202020] mt-96  flex flex-col items-center relative">
          
          <div className="absolute -top-64 flex flex-row gap-4 items-baseline">
          <Image className="" width={"500"} height={"500"} alt="image1" src={"https://imgur.com/2XPkERp.png"}></Image>
          <Image className="" width={"800"} height={"800"} alt="image1" src={"https://imgur.com/2XPkERp.png"}></Image>
          <Image className="" width={"500"} height={"500"} alt="image1" src={"https://imgur.com/2XPkERp.png"}></Image>
          </div>
        </div>
        <Marquee
          className=""
          play={true}
          speed={45}
          autoFill={true}
          gradient={true}
          gradientColor={[248, 251, 253]}
        >
          <Image
            width={100}
            height={50}
            alt="image1"
            src={
              "https://www.react-fast-marquee.com/static/media/nasa.3bf5af29.png"
            }
          ></Image>
          </Marquee>
      </main>
    </>
  );
}
