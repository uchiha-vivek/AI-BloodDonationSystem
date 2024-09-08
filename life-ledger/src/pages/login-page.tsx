import { FC } from "react";

 
import Login from "./login";
 

const HomePage: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
    

      
      <main className="flex-grow pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <div className="px-4 py-8 md:px-8 lg:px-16"> {/* Adjusted padding for better spacing */}
           <Login/>
        </div>
      
      </main>

     
    </div>
  );
};

export default HomePage;
