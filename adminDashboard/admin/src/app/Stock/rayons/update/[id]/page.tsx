"use client";

import { useFetchData } from "@/hooks/useFetchData";
import { Entrepot, Rayons } from "@/types/model/entity";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";



const pageInfo=[
    { label: "Stock", link: "/Stock" },
    { label: "categorie product", link: "/Stock/categories_produits" },
    { label: "Ajoute" }
  ]
  const serviceName= "ServiceStock";
  const moduleName = "rayon"
  const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`
export default function  UpdateRayons () {
     const params = useParams();
        const {id} = params
  const router = useRouter();
const [ rayon,setProduit] = useState<Rayons>({nom:"",})

  const {data:session, status} = useSession();
  const [ AllEntrepot,setAllCate] = useState<Entrepot[]>([])
  const {data:Entrepots, loading:loadCat, error:ErrCat} = useFetchData<Entrepot[]>(`gateway?service=ServiceStock&module=entrepot`,"GET")

  useEffect(()=>{
    
            if (Entrepots) {
                setAllCate(Entrepots)
                console.log("touter les categorie:", Entrepots);
            }
          
        },[Entrepots])

        
          const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
            console.log("changement de valeu",e.target);
          
            const {name,value}= e.target;
            setProduit((prev)=>({
                ...prev,
                [name]:name ==="parentId" ? parseInt(value) : value,
            }));
        }
        const handleUpdate= async (e: React.FormEvent)=>{
            e.preventDefault();
            const res = await fetch(`http://localhost:3003/gateway/${id}?service=ServiceStock&module=${moduleName}`, {
                method: "PATCH",
                headers: { 
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${session?.user?.accessToken}`,
                },
                body:JSON.stringify(rayon)
              });
              console.log('les update:',res);
              
              if (res.ok) {
              router.push("/Stock/rayons")  
              }
        }
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
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">Ajouter</h3>
                        </div>
                        <form role="form" onSubmit={handleUpdate}>
                        <div className="box-body">
                        <div className="row">
          <div className="form-group col-md-6">
              <label htmlFor="nom">Nom</label>
              <input type="text" className="form-control" id="nom"  name="nom"
              value={rayon?.nom} 
              required
              onChange={handleChange}
              />
          </div>
          
          <div className="form-group col-md-6">
            <label htmlFor="entrepotId">
                Entrepot
            </label>
            <select 
            className="form-control" 
            id="entrepotId" 
            name="entrepotId"
            value={rayon?.entrepotId ?? ""}
            onChange={handleChange}
            >
                <option  value={0}>selectionne une categorie 
                </option>
                {AllEntrepot.map((entreprot)=>(
                    <option key={entreprot.id} value={entreprot.id}>
                    {entreprot.nom}
                  </option>
                ))}
            </select>
                
            </div>
          </div>
                     
                        </div>

                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

