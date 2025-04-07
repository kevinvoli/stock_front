"use client";
import Datatable from "@/components/tables/dataTable";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useFetchData } from "@/hooks/useFetchData";
import BreadCrumb from "@/components/UI/Breadcrumb";
import Box from "@/components/UI/Box";
import { MouvementStock, Produit } from "@/types/model/entity";


const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "produit", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "mouvementsStock"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function MouvementStocks(){

const {data:dataList, loading, error}= useFetchData<MouvementStock[]>(endpoint,"GET");

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
                <Box title="Liste des journaux" link="/Stock/mouvements_stock/add">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <Datatable tableau={dataList} link="mouvements_stock/update"/>}
              </Box>
                </div>
            </div>
        </section>
    </div>
    </>
  )
}

  