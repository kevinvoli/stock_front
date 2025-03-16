"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";


type Rayons = {

  id: number;
  nom: string;
  entrepotId: number | null;
}
const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "rayons", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "rayons"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Rayon(){

  const {data:dataList, loading, error}= useFetchData<Rayons[]>(endpoint,"GET");
  
  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Rayons
            <small>Panneau </small>
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

  