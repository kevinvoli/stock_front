<<<<<<< HEAD




export default function  AddUser () {

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Rayon
                    <small>Panneau de contrôle </small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">Rayons</a></li>
                    <li className="active"> Listes</li>
                </ol>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">Ajouter</h3>
                        </div>
                        <form role="form">
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Nom</label>
                                    <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre nom" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Prénom</label>
                                    <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre prénom" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputPassword1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Entrer votre email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputPassword2">Mot de passe</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="exampleInputPassword1">Role</label>
                                    <input type="name" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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

=======
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Entrepot, Rayons } from "@/types/model/entity";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const serviceName= "ServiceStock";
const moduleName = "categorie"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

const AddRayon = () => {
  
 

  const router = useRouter();
const [ rayon,setProduit] = useState<Rayons>()

  const {data:session, status} = useSession();
  const [ AllEntrepot,setAllCate] = useState<Entrepot[]>([])
  const {data:Entrepots, loading:loadCat, error:ErrCat} = useFetchData<Entrepot[]>(`gateway?service=ServiceStock&module=entrepot`,"GET")

   useEffect(()=>{
  
          if (Entrepots) {
              setAllCate(Entrepots)
              console.log("touter les categorie:", Entrepots);
          }
        
      },[Entrepots])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCategorie =AllEntrepot;
   try {
    const response = await fetch("http://localhost:3003/gateway/create?service=ServiceStock&module=rayon", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
      body: JSON.stringify(newCategorie),
    });

    if (response.ok) {
      router.push("/Stock/rayons"); // Rediriger vers la liste des catégories
    } 
    // console.log(dataList);
    
   } catch (error) {
    console.log(error);
   }
  };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
    console.log("changement de valeu",e.target);
  
    const {name,value}= e.target;
    setProduit((prev)=>({
        ...prev,
        [name]:name ==="entrepotId" ? parseInt(value) : value,
    }));
}

  return (
    <>
      <div className="content-wrapper">
      <section className="content-header">
        <h1>
            Utilisateurs
            <small>Panneau de contrôle des utilisateurs</small>
        </h1>
        <BreadCrumb items={pageInfo}/>
      </section>
      <section className="content">
      <div className="col-xs-12">
      <div className="box box-primary ">
      <div className="box-header">
        <h3 className="box-title">Ajouter un Rayons</h3>
      </div>
      <form onSubmit={handleSubmit} >
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
                <option  value={0}>selectionne un entrpot 
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
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Ajouter
        </button>
        </div>
       
        
      </form>
    
      
    
    </div>
    </div>
      </section>
</div>
    </>
  

  );
};

export default AddRayon;
>>>>>>> master
