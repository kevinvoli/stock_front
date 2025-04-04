'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import Categorie from '../../page';


const pageInfo=[
    { label: "Logs", link: "#" },
    { label: "Journal", link: "#" },
    { label: "Listes" }
  ]
  const serviceName= "ServiceStock";
  const moduleName = "categorie"
  const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

export default function  AddUser () {
    const params = useParams();
    const {id} = params
    const {data:session, status} = useSession();

    const [ categories,setCategories] = useState({nom:"",description:"",parentId:""})
    console.log('sur update id:',id);
    
    useEffect(()=>{
        if (id) {
             fetch(`http://localhost:3003/gateway/${id}?service=ServiceStock&module=categorie`, {
                method: "POST",
                headers: { 
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${session?.user?.accessToken}`,
                },
              })
              .then(res=>res.json())
              .then(data=>setCategories(data))
              .catch(err=>err)

        }
    },[id]);


    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Utilisateurs
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">update</a></li>
                    <li className="active"> Categorie</li>
                </ol>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">update</h3>
                        </div>
                        <form role="form">
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Nom</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre nom" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Description</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre prénom" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Categorie</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre prénom" />
                                </div>
                            </div>

                            {/* <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile" />
                            <p className="help-block">Example block-level help text here.</p>
                            </div>
                            <div className="checkbox">
                            <label htmlFor="">
                                <input type="checkbox" /> 
                            </label>
                            </div> */}
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

