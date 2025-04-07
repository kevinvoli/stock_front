
import SessionProviderWrapper from "@/components/SessionProviderWrapper";



export default function StockLayout({
  children,
}:{children: React.ReactNode}) {
  return (
    <>
    
 
        <SessionProviderWrapper>
          {children}
        </SessionProviderWrapper>

    
    </>
   
  );
}
