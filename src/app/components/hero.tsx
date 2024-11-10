import Image from "next/image";
// import Hero from "./components/hero";
import profile from "profile.png";


export default function Hero() {
    return (
      <>
      <div id="home" className="min-h-screen bg-no-repeat bg-[url(/profile.png)] rounded-full bg-right lg:bg-[20%] bg-cover bg-rounded-full"
      style={{backgroundSize:"30%"}}
      >
        <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
          <div className="hidden lg:block"></div>
          <div className="text-[80px] sm:text-[80px] font-bold leading-tight flex justify-center items-center">
            <div>
         <p>I am</p> 
         <p>Bushra Asghar</p>
         <p className="sm:text-[30px] flex text-gray-950 transition-transform ">Frontend Developer</p>
         <p className="sm:text-[17px] flex justify-center items-center">Obtain a challenging leadership position applying creative problem solving and lean management skills with a growing company to achieve optimum utilization of its resources and maximum profits.</p>
         </div>
          </div>
        </div>
      </div>
      </>
    );
  }