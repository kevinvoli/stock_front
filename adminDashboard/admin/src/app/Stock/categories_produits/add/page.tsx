"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFetchData } from "@/hooks/useFetchData";
import { useSession } from "next-auth/react";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { Categories } from "@/types/model/entity";


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
  const [parentId, setParentId] = useState<number>();

  const {data:session, status} = useSession();
  const [ AllCate,setAllCate] = useState<Categories[]>([])
  const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(`gateway?service=ServiceStock&module=categorie`,"GET")

   useEffect(()=>{
    if (Allcategories) {
        setAllCate(Allcategories)
        console.log("touter les categorie:", Allcategories);
    }   
  },[Allcategories])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCategorie =await { nom, description,parentId };
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
              value={nom} 
              required
              onChange={(e) => setNom(e.target.value)}
              />
          </div>
          <div className="form-group col-md-6">
              <label htmlFor="description">Description</label>
              <textarea  className="form-control" id="description"  name="description"
              value={description} 
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              ></textarea>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="parentId">
                Categorie parent
            </label>
            <select 
            className="form-control" 
            id="parentId" 
            name="parentId"
            value=""
            onChange={(e)=> setParentId(+e.target.value)}
            >
                <option  value={0}>selectionne une categorie parent
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

export default AjouterCategorie;
