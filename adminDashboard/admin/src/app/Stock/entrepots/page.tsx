"use client";
import Datatable from "@/components/tables/dataTable";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";


type Entrepots = {

  id: number;

  nom: string;

  adresse: string | null;
  
}
const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "entrepots", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "entrepots"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Entrepot(){

const {data:dataList, loading, error}= useFetchData<Entrepots[]>(endpoint,"GET");

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

        <section className="content">
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-body">
                        <Datatable tableau={dataList} link="/update"/> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

  