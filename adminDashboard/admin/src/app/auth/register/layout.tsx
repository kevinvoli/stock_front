import ImportScript from "@/components/layout/importJs";
import type { Metadata } from "next";





export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
     <body className="register-page">
     <div className="wrapper">
        {children}
      </div>
      <ImportScript/>
      </body>
    </>
   
  );
}
