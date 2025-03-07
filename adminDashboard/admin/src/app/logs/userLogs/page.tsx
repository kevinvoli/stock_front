import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Logs = {
  id: number;

  userId: number | null;

  typeAction: string | null;
 
  dateAction: Date | null;

  module: string | null;

  description: string | null;
}
export default function Log(){

  const { data: session, status } = useSession(); // Récupérer la session utilisateur
  const [dataList, setdataList] = useState<Logs[]>([]);

  useEffect(() => {
      const fetchJournaux = async () => {
          if (status !== "authenticated") return; // Ne fait rien si l'utilisateur n'est pas connecté

          console.log("🔄 Chargement des journaux...",session?.user?.accessToken);
          try{
            const response = await fetch("http://localhost:3003/journal-services", {  // Ton API NestJS
              method: "GET",
              headers: { 
                "Content-Type": "application/json",
                Authorization: `Bearer ${session?.user?.accessToken}`
               },
            });
            if (!response.ok) {
              throw new Error(`Erreur HTTP : ${response.status} ${response.statusText}`);
            }
            // drgodrogo
            const data: Logs[]  = await response.json();
            console.log("📜 Journaux reçus :", data);
            // Vérifie que les données sont un tableau
            if (!Array.isArray(data )) {
              throw new Error("Les données reçues ne sont pas un tableau de journaux.");
            }
            setdataList(data);    
          }catch(error){
            console.error("❌ Erreur lors du chargement des journaux :", error);
          }
      };
      fetchJournaux();
  }, [session, status]);

  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Logs
            <small>Journal Service</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Logs</a></li>
            <li><a href="#">Journal</a></li>
            <li className="active"> Listes</li>
          </ol>
        </section>

        <section className="content">
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-body">
                        <Datatable tableau={dataList}/> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

  