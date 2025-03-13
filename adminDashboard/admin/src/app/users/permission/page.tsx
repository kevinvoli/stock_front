"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import Box from "@/components/UI/Box"
import DataTable from "@/components/tables/dataTable";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";


type UserType = {
    id: string,
    email: string,
    password: string,
    name: string,
    role: string
}

export default function Users(){
    
    const { data: dataList, loading, error } = useFetchData<UserType[]>("https://api.escuelajs.co/api/v1/users", "GET");
  return (
    <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Utilisateurs
            <small>Panneau de contrôle des utilisateurs</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
            <li><a href="#">Utilisateurs</a></li>
            <li className="active"> Listes</li>
          </ol>
        </section>

        <Box title="Liste des journaux">
          {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <DataTable tableau={dataList} />}
        </Box>
    </div>
  )
}


