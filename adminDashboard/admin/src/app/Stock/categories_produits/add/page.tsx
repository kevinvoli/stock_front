"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";


type Categories = {

  id: number;

  nom: string;

  description: string | null;

  parentId: number | null;
}
const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const serviceName= "ServiceStock";
const moduleName = "categorie"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

const AjouterCategorie = () => {
  
 

  const router = useRouter();
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
    const {data:session, status} = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCategorie =await { nom, description };
    console.log("les data", newCategorie);
    
   try {
 
    const response = await fetch("http://localhost:3003/gateway/create?service=ServiceStock&module=categorie", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
      body: JSON.stringify(newCategorie),
    });

    if (response.ok) {
      router.push("/Stock/categories_produits"); // Rediriger vers la liste des catégories
    } 
    // console.log(dataList);
    
   } catch (error) {
    console.log(error);
    
   }
  
  };


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
      <div className="box box-primary max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <div className="box-header">
        <h3 className="box-title">Ajouter une catégorie</h3>
      </div>
      <form onSubmit={handleSubmit} method="post" className="space-y-4">
   
      <div  className="form-group has-feedback">
      <input
          type="text"
          placeholder="Nom de la catégorie"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
        
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Ajouter
        </button>
      </form>
    
      
    
    </div>
    </div>
      </section>
</div>
    </>
  

  );
};

export default AjouterCategorie;
