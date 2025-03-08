"use client";
import Datatable from "@/components/tables/dataTable";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type Categories = {

  id: number;

  nom: string;

  description: string | null;

  parentId: number | null;

 
  parent: Categories;

  categories: Categories[];

}
const pageInfo=[
  { label: "Stock", link: "#" },
  { label: "categorie product", link: "#" },
  { label: "Listes" }
]
const serviceName= "ServiceStock";
const moduleName = "categorie"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function Categorie(){

 const {data:dataList, loading, error}= useFetchData<Categories[]>(endpoint,"GET");
 
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

  