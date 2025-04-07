'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useFetchData } from "@/hooks/useFetchData";
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
export default function  UpdateEntrepot () {

    const params = useParams();
        const {id} = params
        const {data:session} = useSession();
        const router = useRouter();
    
        const [ categories,setCategories] = useState<Categories>({nom:"",description:"",parentId:0})
        const [ AllCate,setAllCate] = useState<Categories[]>([{nom:"",description:"",parentId:0}])
        const {data:Allcategories, loading:loadCat, error:ErrCat} = useFetchData<Categories[]>(`gateway?service=ServiceStock&module=categorie`,"GET")
    
        const {data:dataList, loading, error}=  getOne<Categories>(`gateway/${id}?service=ServiceStock&module=categorie`,"GET");

    useEffect(()=>{

        if (Allcategories) {
            setAllCate(Allcategories)
            console.log("touter les categorie:", Allcategories);
        }
        if (dataList) {   
            setCategories(dataList)
        }
    },[Allcategories,dataList])


    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
        
        const {name,value}= e.target;
        setCategories((prev)=>({
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
                <BreadCrumb items={pageInfo}/>
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


