"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";


export enum typeMouvement {
  entree= "entrée",
  sortie = "sortie"
}


type Mouvements = {

  id: number;

  produitId: number | null;

  
  typeMouvement: typeMouvement;

  quantite: number;


  date: Date | null;

  rangementId: number | null;
}
const pageInfo=[
  { label: "mouvements stock", link: "#" },
  { label: "Corbeille", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "mouvements_stock"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Mouvement(){

 const {data:dataList, loading, error}= useFetchData<Mouvements[]>(endpoint,"GET");
 
  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Mouvement Stock
            <small> Panneau </small>
          </h1>
          <BreadCrumb items={pageInfo}/>

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

  