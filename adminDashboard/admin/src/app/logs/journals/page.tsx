"use client";

import DataTable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";




type Journal = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}

const pageInfo=[
  { label: "Logs", link: "#" },
  { label: "Journal", link: "#" },
  { label: "Listes" }
]
const serviceName= "logService";
const moduleName = "corbeille";
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

export default function JournaleService(){
  const { data: dataList, loading, error } =  useFetchData<Journal[]>("journal-services", "GET");

console.log("🛠 Colonnes détectées1 :",dataList);

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Logs
            <small>Journal Service</small>
          </h1>
          <BreadCrumb items={pageInfo}/>
          
        </section>
        <Box title="Liste des journaux">
          {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <DataTable tableau={dataList} />}
        </Box>
    </div>
    </>
  )
}