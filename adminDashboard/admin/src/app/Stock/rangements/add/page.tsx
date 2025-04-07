<<<<<<< HEAD
"use client"
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { ToastContainer,toast } from "react-toastify";
import { Input } from "@/components/forms/input"
import { Select } from "@/components/forms/select";


export default function  AddUserRole () {
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
    };
    const predefinedOptions = [
        { nom: "Rayon 1" },
        { nom: "Rayon 2" },
        { nom: "Rayon 3" },
        { nom: "Rayon 4" },
      ];

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Rangements
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">Rangements</a></li>
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
                                    label="rangement"
                                    name="name"
                                    type="text" 
                                    id="exampleInputEmail1" 
                                    //value={ formData.name}
                                    onChange={handleChange}
                                    placeholder="Entrer le nom du rangement" />
                                </div>
                                <div className="form-group col-md-6">
                                    <Select 
                                    id="rayon"
                                    name="name"
                                    label="Rayon"
                                    value={formData.name}
                                    options={predefinedOptions}
                                />
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
import { Rangements, Rayons } from "@/types/model/entity";



const pageInfo=[
  { label: "Stock", link: "/Stock" },
  { label: "categorie product", link: "/Stock/categories_produits" },
  { label: "Ajoute" }
]
const serviceName= "ServiceStock";
const moduleName = "categorie"
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

const AddRengement = () => {

  const router = useRouter();
const [ Rangements,setRangements] = useState<Rangements>()

  const {data:session, status} = useSession();
  const [ royon,setRayon] = useState<Rayons[]>([])
  const {data:AllRayons, loading:loadCat, error:ErrCat} = useFetchData<Rayons[]>(`gateway?service=ServiceStock&module=rayon`,"GET")

   useEffect(()=>{
  
          if (AllRayons) {
            setRayon(AllRayons)
          }
        
      },[AllRayons])
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCategorie =royon;
   try {
    const response = await fetch("http://localhost:3003/gateway/create?service=ServiceStock&module=rangement", {
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
  const handleChange= async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement |HTMLTextAreaElement> )=>{
    console.log("changement de valeu",e.target);
  
    const {name,value}= e.target;
    setRangements((prev)=>({
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
              value={Rangements?.nom} 
              required
              onChange={handleChange}
              />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="rayonId">
                Rayon 
            </label>
            <select 
            className="form-control" 
            id="rayonId" 
            name="rayonId"
            value={Rangements?.rayonId}
            onChange={handleChange}
            >
                <option  value={0}>selectionne un rayon 
                </option>
                {royon.map((ray)=>(
                    <option key={ray.id} value={ray.id}>
                    {ray.nom}
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

export default AddRengement;
>>>>>>> master
