"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Categories, Produit } from "@/types/model/entity";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const serviceName= "ServiceStock";
const moduleName = "categorie"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

const AddProduit = () => {
  
 

  const router = useRouter();
const [ produit,setProduit] = useState<Produit>({nom:"",})

  const {data:session, status} = useSession();
  const [ AllCate,setAllCate] = useState<Categories[]>([])
  const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(`gateway?service=ServiceStock&module=categorie`,"GET")

    useEffect(()=>{
      if (Allcategories) {
        setAllCate(Allcategories)
      }
    
    },[Allcategories])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCategorie =AllCate;
   try {
    const response = await fetch("http://localhost:3003/gateway/create?service=ServiceStock&module=produit", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
      body: JSON.stringify(newCategorie),
    });

    if (response.ok) {
      router.push("/Stock/Produits"); // Rediriger vers la liste des catégories
    } 
    // console.log(dataList);
    
   } catch (error) {
    console.log(error);
   }
  };
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
  
    const {name,value}= e.target;
    setProduit((prev)=>({
        ...prev,
        [name]:name ==="categorieId" ? parseInt(value) : value,
    }));
    console.log("changement de valeu",produit);

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
        <h3 className="box-title">Ajouter une catégorie</h3>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="box-body">
          <div className="row">
          <div className="form-group col-md-6">
              <label htmlFor="nom">Nom</label>
              <input type="text" className="form-control" id="nom"  name="nom"
              value={produit?.nom} 
              required
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="description">Description</label>
              <input  className="form-control" id="description"  name="description"
              value={produit?.description ? produit?.description: ""} 
              placeholder="Description"
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="stockActuel">stockActuel</label>
              <input  className="form-control" id="stockActuel"  name="stockActuel"
              value={produit?.stockActuel} 
              placeholder="stockActuel"
              onChange={handleChange}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="seuilAlerte">seuilAlerte</label>
              <textarea  className="form-control" id="description"  name="seuilAlerte"
              value={produit?.seuilAlerte} 
              placeholder="seuilAlerte"
              onChange={handleChange}
              ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="categorieId">
                Categorie produit
            </label>
            <select 
            className="form-control" 
            id="categorieId" 
            name="categorieId"
            value={produit?.categorieId ? produit.categorieId: ""}
            onChange={handleChange}
            >
                <option  value={0}>selectionne une categorie 
                </option>
                {AllCate.map((categorie)=>(
                    <option key={categorie.id} value={categorie.id}>
                    {categorie.nom}
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

export default AddProduit;
