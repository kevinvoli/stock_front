'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useFetchData } from "@/hooks/useFetchData";
import { Categories, MouvementStock, Produit, Rangements } from "@/types/model/entity";




export default function  UpdateMouvementStock () {
    const params = useParams();
    const {id} = params
    const {data:session} = useSession();
    const router = useRouter();

    const [ mouvementStock,setMouvementStock] = useState<MouvementStock>()
    const [ Allproduit,setProduit] = useState<Produit[]>([])
    const {data:produit, loading:loadProduit, error:ErrProduit} = useFetchData<Produit[]>(`gateway?service=ServiceStock&module=produit`,"GET")
    const [ allrengement,setRangemnt] = useState<Rangements[]>([])
    const {data:rangemnt, loading:loadRangemnt, error:ErrRangemnt} = useFetchData<Rangements[]>(`gateway?service=ServiceStock&module=rangement`,"GET")

    const {data:dataList, loading, error}=  getOne<MouvementStock>(`gateway/${id}?service=ServiceStock&module=mouvementsStock`,"GET");
    useEffect(()=>{

        if (produit) {
            setProduit(produit)
        }
        if (rangemnt) {   
            setRangemnt(rangemnt)
        }
    },[produit,rangemnt])
 
    const handleUpdate= async ()=>{
        await fetch(`http://localhost:3003/gateway/${id}?service=ServiceStock&module=categorie`, {
            method: "PUT",
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.accessToken}`,
              body:JSON.stringify(mouvementStock)
            },
          });

          router.push("categories_produits")  
    }

    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
        
        const {name,value}= e.target;
        setMouvementStock((prev)=>({
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

