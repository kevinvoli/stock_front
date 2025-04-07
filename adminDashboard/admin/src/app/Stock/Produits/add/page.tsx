<<<<<<< HEAD
"use client"
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { ToastContainer,toast } from "react-toastify";
import { Input } from "@/components/forms/input"
import { Select } from "@/components/forms/select";

export default function  AddUserPermission () {
    const [formData, setFormData] = useState({
        email: "john@mail.com",
        name: "string",
        password: "string",
        role: "customer",
        avatar: "https://i.imgur.com/LDOO4Qs.jpg"
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.error(setFormData)

        try{
            const response = await axios.post("https://api.escuelajs.co/api/v1/users", formData);

            if (response.status === 201) {
                toast.success("Ajout reussi avec success ! 🚀");
                
                // setFormData({ name: "", description: ""}); 
            }
        }catch (error) {
            toast.error("Ajout Impossible ❌")
        } finally {
            setLoading(false);
        }
    }
    const predefinedOptions = [
        { nom: "Module 1" },
        { nom: "Module 2" },
        { nom: "Module 3" },
        { nom: "Module 4" },
      ];

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Produits
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">Roles</a></li>
                    <li className="active"> Listes</li>
                </ol>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">Ajouter</h3>
                        </div>
                        <form  onSubmit={handleSubmit} >
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                <Input
                                    label="Nom"
                                    type="text"
                                    id="exampleInputEmail2"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Entrez le nom du produit"
                                />
                                </div>
                                <div className="form-group col-md-6">
                                <Input
                                    label="Description"
                                    type="text"
                                    id="exampleInputEmail2"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Entrez votre action"
                                />
                                </div>
                            </div>
                            <div className="row">

                                <div className="form-group col-md-6">
                                    <Input
                                        label="Stock actuel"
                                        type="number"
                                        id="exampleInputEmail2"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Entrez votre action"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Input
                                        label="Seuil d'alerte"
                                        type="number"
                                        id="exampleInputEmail2"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Entrez votre action"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="checkbox">
                                
                                </div>
                            </div>
                        </div>

                        <div className="box-footer">
                            <button disabled={loading} type="submit" className="btn btn-primary">
                                {loading ? "Ajout en cour..." : "Ajouter"}
                            </button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
            <ToastContainer />
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
>>>>>>> master
