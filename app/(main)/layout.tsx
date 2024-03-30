type Props = {
    children : React.ReactNode;
};

import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

const MainLayout = ({children}:Props) => {
  return (
    <>  
        <MobileHeader/>
        <Sidebar className="hidden lg:flex"/>
        <main className="lg:pl-[256px] h-full lg:pt-0 pt-[50px] ">
            <div className="max-w-[1056px] mx-auto pt-6 h-full">
            {children}
            </div>
        </main>
    </>

  )
}

export default MainLayout