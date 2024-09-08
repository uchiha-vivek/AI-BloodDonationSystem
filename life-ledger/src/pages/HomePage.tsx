import { FC } from "react";

import Header from "../components/Header"; // Assuming you have Header component
import Footer from "../components/Footer"; // Assuming you have Footer component
import FramerMotionCard from "../components/framer-motion-card";
 

const HomePage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <div className="px-4 py-8 md:px-8 lg:px-16"> {/* Adjusted padding for better spacing */}
          <FramerMotionCard />
        </div>
      
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
