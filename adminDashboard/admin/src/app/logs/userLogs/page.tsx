"use client";
import Datatable from "@/components/tables/dataTable";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
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

const pageInfo=[
  { label: "Logs", link: "#" },
  { label: "user logs", link: "#" },
  { label: "Listes" }
]
const serviceName= "logService";
const moduleName = "log"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Log(){
const {data:dataList, loading, error}= useFetchData<Logs[]>(endpoint,"GET");


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

  