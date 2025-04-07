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
                    Entrepots
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
import { Entrepot } from "@/types/model/entity";





const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "entrepot", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const serviceName= "ServiceStock";
const moduleName = "entrepot"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

const AddEntrepot = () => {
  const router = useRouter();
  const [ entrepot,setProduit] = useState<Entrepot>({nom:"",})

  const {data:session, status} = useSession();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCategorie =entrepot;
   try {
    const response = await fetch("http://localhost:3003/gateway/create?service=ServiceStock&module=entrepot", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
      body: JSON.stringify(newCategorie),
    });

    if (response.ok) {
      router.push("/Stock/entrepots"); // Rediriger vers la liste des catégories
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
        [name]:name ==="parentId" ? parseInt(value) : value,
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
        <h3 className="box-title">Ajouter une catégorie</h3>
      </div>
      <form onSubmit={handleSubmit} >
        <div className="box-body">
          <div className="row">
          <div className="form-group col-md-6">
              <label htmlFor="nom">Nom</label>
              <input type="text" className="form-control" id="nom"  name="nom"
              value={entrepot?.nom} 
              required
              onChange={handleChange}
              />
          </div>

          <div className="form-group col-md-6">
              <label htmlFor="adresse">adresse</label>
              <input type="text" className="form-control" id="adresse"  name="adresse"
              value={entrepot?.adresse ?? "" } 
              required
              onChange={handleChange}
              />
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

export default AddEntrepot;
>>>>>>> master
