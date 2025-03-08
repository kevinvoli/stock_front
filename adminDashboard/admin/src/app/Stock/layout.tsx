import type { Metadata } from "next";
import Head from "@/components/layout/heardComponent";
import Header from "@/components/layout/header";
import ImportScript from "@/components/layout/importJs";
import Footer from "@/components/layout/footer";
import Aside from "@/components/layout/aside";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";



export default function StockLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <>
    
    <html lang="en">
      <Head/>
      <body className="skin-blue">
        <div className="wrapper">
        <Header/>
        <Aside/>
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>
        <Footer/>
        </div>
        <ImportScript/>
    
      </body>
    </html>
    
    
    </>
   
  );
}
