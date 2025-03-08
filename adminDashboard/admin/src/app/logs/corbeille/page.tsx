"use client";
import DataTable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
import { Corbeilles } from "@/types/corbeille";

const pageInfo=[
  { label: "Logs", link: "#" },
  { label: "Corbeille", link: "#" },
  { label: "Listes" }
]
const serviceName= "logService";
const moduleName = "corbeille"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
// /gateway?service=authService&module=auth
export default function Corbeille(){
  const {data:dataList, loading, error}= useFetchData<Corbeilles[]>(endpoint,"GET");

  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Corbeille
            <small>Corbeille</small>
          </h1>
          <BreadCrumb items={pageInfo}/>
        </section>

        <section className="content">
            <div className="row">
                <div className="col-xs-12">
                <Box title="Liste des journaux">
              {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <DataTable tableau={dataList} />}
            </Box>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

  