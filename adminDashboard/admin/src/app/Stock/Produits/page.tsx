"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";


type Produits = {

  id: number;

  nom: string;

  description: string | null;

  categorieId: number | null;

  stockActuel: number;

  seuilAlerte: number;
   
}
const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "produit", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "produit"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Produit(){

const {data:dataList, loading, error}= useFetchData<Produits[]>(endpoint,"GET");

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

  