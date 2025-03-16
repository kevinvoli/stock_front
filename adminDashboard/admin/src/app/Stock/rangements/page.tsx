"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";


type Rangements = {

  id: number;

  nom: string;

  rayonId: number | null;

}
const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "rangements", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "rangements"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Rangement(){

const {data:dataList, loading, error}= useFetchData<Rangements[]>(endpoint,"GET");

  return (
    <>
         <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Rangements
            <small>Panneau</small>
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

  