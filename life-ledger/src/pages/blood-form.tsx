import { FC } from "react";

import Header from "../components/Header"; 
import Footer from "../components/Footer"; 
 
import PredictForm from "../components/predict-form";

const BloodForm: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-[4.75rem] lg:pt-[5.25rem] mt-10 overflow-hidden ">
         
        <PredictForm/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BloodForm;
