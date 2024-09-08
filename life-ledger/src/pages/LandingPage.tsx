import { FC } from "react";
import videoBg from '../assets/blood.mp4';
import { Link } from "react-router-dom";
import Button from "../components/Button";

const LandingPage: FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-4 left-4 text-black text-lg sm:text-xl md:text-2xl font-bold">
        LifeLedger
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      
      {/* Video Background */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          AI Powered Blood Donation
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mt-5">
          Solution you can trust!
        </p>
        <div className="mt-5">
          <Link to='/home'>
            <Button />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
