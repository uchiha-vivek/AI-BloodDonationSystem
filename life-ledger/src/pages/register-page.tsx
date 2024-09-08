import { FC } from "react";

 
import RegisterPage from "./register";
import Header from "../components/Header";
 

const HomePage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
  <Header/>
      

      
      <main className="flex-grow pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <div className="px-4 py-8 md:px-8 lg:px-16">  
         <RegisterPage/>
        </div>
      
      </main>

      {/* Footer */}
       
    </div>
  );
};

export default HomePage;
