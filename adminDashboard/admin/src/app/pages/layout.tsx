import type { Metadata } from "next";
import "../styles/bootstrap/css/bootstrap.min.css"
// import "https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"

// import "http://code.ionicframework.com/ionicons/2.0.0/css/ionicons.min.css"

import "../../public/dist/css/AdminLTE.min.css"
import "../../public/dist/css/skins/_all-skins.min.css"
import "../../public/plugins/iCheck/flat/blue.css"
import "../../public/plugins/morris/morris.css"
import "../../public/plugins/jvectormap/jquery-jvectormap-1.2.2.css"
import "../../public/plugins/datepicker/datepicker3.css"
import "../../public/plugins/daterangepicker/daterangepicker-bs3.css"


import Head from "@/components/layout/heardComponent";
import Header from "@/components/layout/header";
import ImportScript from "@/components/layout/importJs";
import Footer from "@/components/layout/footer";
import Aside from "@/components/layout/aside";



export default function IndexLayout({
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
        {children}
        <Footer/>
        </div>
        <ImportScript/>
    
      </body>
    </html>
    
    
    </>
   
  );
}
