'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useFetchData } from "@/hooks/useFetchData";
import { Categories, Produit } from "@/types/model/entity";




export default function  UpdateProduits () {
    const params = useParams();
    const {id} = params
    const {data:session} = useSession();
    const router = useRouter();

    const [ produit,setProduit] = useState<Produit>()
    const [ categorie,setCategorie] = useState<Categories[]>([{nom:"",description:"",parentId:0}])
    const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(`gateway?service=ServiceStock&module=categorie`,"GET")

    const {data:dataList, loading, error}=  getOne<Produit>(`gateway/${id}?service=ServiceStock&module=categorie`,"GET");
    useEffect(()=>{

        if (Allcategories) {
            setCategorie(Allcategories)
            console.log("touter les categorie:", Allcategories);
        }
        if (dataList) {   
            setProduit(dataList)
        }
    },[Allcategories,dataList])
 
    const handleUpdate= async (e: React.FormEvent)=>{
        e.preventDefault();
        const res = await fetch(`http://localhost:3003/gateway/${id}?service=ServiceStock&module=produit`, {
            method: "PATCH",
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
            body:JSON.stringify(produit)
          });
          console.log('les update:',res);
          
          if (res.ok) {
          router.push("/Stock/Produits")  
          }
    }

    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
        
        const {name,value}= e.target;
        setProduit((prev)=>({
            ...prev,
            [name]:value
        }))
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
                                            {categorie.map((categorie)=>(
                                                <option key={categorie.id} value={categorie.id}>
                                                {categorie.nom}
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

