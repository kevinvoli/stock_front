"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";
import Box from "@/components/UI/Box";
import { Rangements, Rayons } from "@/types/model/entity";



const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "rayon", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "rayon"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Rayon(){

const {data:dataList, loading, error}= useFetchData<Rayons[]>(endpoint,"GET");

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
                <Box title="Liste des Rayon" link="/Stock/rayons/add">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <Datatable tableau={dataList} link="rayons/update"/>}
                </Box>
              </div>
            </div>
        </section>
    </div>
    </>
  )
}

  