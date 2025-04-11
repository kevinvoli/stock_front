'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useAddData, useFetchData } from "@/hooks/useFetchData";
import {  Permission, Role } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";


const rolesRequest = new RequestData("authService","roles")
const permissionRequest = new RequestData("authService","permission")

export default function  UpdateRole () {
    const params = useParams();
    const {id} = params as {id:string};
    const { addData, loading:loadupdate, error:errorupdate } = useAddData();
    const [ role,setRoles] = useState<Role>()
    const [ AllPermission,setAllPermission] = useState<Permission[]>([])
    const {data:AllPermissions, loading:loadCat, error:ErrCat} = useFetchData<Permission[]>(permissionRequest.endpoint.GET(),"GET")

    console.log("ID==========================",id);
    
    const {data:dataList, loading:list, error:erreulist}=  getOne<Role>(rolesRequest.endpoint.GETONE(id),"GET");
    useEffect(()=>{

        if (AllPermissions) {
            setAllPermission(AllPermissions)
            console.log("touter les categorie:", AllPermissions);
        }
        if (dataList) { 
            setRoles(dataList)
            console.log("le role luis meme", role);
        }
    },[AllPermissions,dataList])
 
    const handleUpdate= async (e:React.FormEvent)=>{
        e.preventDefault();
        console.log("transmission de la categorie:",role);
        
        await addData(rolesRequest.endpoint.POST(), "POST","/Stock/categories_produits",  role);

    }

    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
      
        const {name,value}= e.target;
        setRoles((prev)=>({
            ...prev,
            [name]: value,
        }));
    }

    const handleTable= async (permi:Permission)=>{
        return <>{permi} </>
    }

    return (

        <>  
        
        
    
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
                        <form id="formActualites" >

                            <div className="box-body">
                                <div className="content-in">
                                    <div className="tab_cadre" id="cadre_francais">
                                        <input type="hidden" id="hiddenid" name="id" value="5"/>
                                        <label htmlFor="inputlibelle_fr" className="requis ">
                                        <b>Libellé (FR)</b>
                                        </label>
                                        <input type="text" list="listelibelle_fr" id="inputlibelle_fr" name="libelle_fr" value={role?.nom} data-value={role?.nom} className=" Flat green skin checkbox "/>
                                    </div>
                                    <br/>
                                    <table id="example2" className="table table-bordered table-hover">
                                   {AllPermission.map((permission)=>handleTable(permission))}
                                        <thead>
                                            <tr>
                                                
                                                <th className="l220">Publications</th>
                                                <th className="l60">visioner</th>
                                                <th className="l60">ajouter</th>
                                                <th className="l60">modifier</th>
                                                <th className="l60">supprimer</th>
                                            </tr>
                                        </thead>
                                    <tbody>
                                        <tr>
                                            <td className="">Planing</td>
                                            <td className="center">
                                                <label htmlFor="permissions[248][ajouter]" className="l80" style={{display:"margin-left:10px"}}>
                                                <div className="slideCheckBoxSquare_mini">
                                                    <input type="hidden" name="permissions[248][ajouter]" value="0"/>
                                                    <input type="checkbox" name="permissions[248][ajouter]" id="permissions[248][ajouter]" value="1"/>
                                                    <span></span>
                                                </div>
                                                </label>
                                            </td>
                                            <td className="center">
                                                <label htmlFor="permissions[248][modifier]" className="l80" style={{display:"margin-left:10px"}}>
                                                <div className="slideCheckBoxSquare_mini">
                                                    <input type="hidden" name="permissions[248][modifier]" value="0"/>
                                                    <input type="checkbox" name="permissions[248][modifier]" id="permissions[248][modifier]" value="1"/>
                                                    <span></span>
                                                </div>
                                                </label>
                                            </td>
                                            <td className="center">
                                                <label htmlFor="permissions[248][supprimer]" className="l80" style={{display:"margin-left:10px"}}>
                                                <div className="slideCheckBoxSquare_mini">
                                                    <input type="hidden" name="permissions[248][supprimer]" value="0"/>
                                                    <input type="checkbox" name="permissions[248][supprimer]" id="permissions[248][supprimer]" value="1" />
                                                    <span></span>
                                                </div>
                                                </label>
                                            </td>
                                            <td className="center">
                                                <label htmlFor="permissions[248][supprimer]" className="l80" style={{display:"margin-left:10px"}}>
                                                <div className="slideCheckBoxSquare_mini">
                                                    <input type="hidden" name="permissions[248][supprimer]" value="0"/>
                                                    <input type="checkbox" name="permissions[248][supprimer]" id="permissions[248][supprimer]" value="1" />
                                                    <span></span>
                                                </div>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="">Formules</td>
                                            <td className="center">
                                                <label htmlFor="permissions[243][ajouter]" className="l80" style={{display:"margin-left:10px"}}>
                                                <div className="slideCheckBoxSquare_mini">
                                                    <input type="hidden" name="permissions[243][ajouter]" value="0"/>
                                                    <input type="checkbox" name="permissions[243][ajouter]" id="permissions[243][ajouter]" value="1" />
                                                    <span></span>
                                                </div>
                                                </label>
                                            </td>
                                            <td className="center">
                                                <label htmlFor="permissions[243][modifier]" className="l80" style={{display:"margin-left:10px"}}>
                                                <div className="slideCheckBoxSquare_mini">
                                                    <input type="hidden" name="permissions[243][modifier]" value="0"/>
                                                    <input type="checkbox" name="permissions[243][modifier]" id="permissions[243][modifier]" value="1" />
                                                    <span></span>
                                                </div>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <thead>
                                        <tr>
                                        <th className="l220">Pages Statiques</th>
                                        <th className="l60">ajouter</th>
                                        <th className="l60">modifier</th>
                                        <th className="l60">supprimer</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                        <td className="">Pages Statiques</td>
                                        <td className="center">
                                            <label htmlFor="permissions[83][ajouter]" className="l80" style={{display:"margin-left:10px"}}>
                                            <div className="slideCheckBoxSquare_mini">
                                                <input type="hidden" name="permissions[83][ajouter]" value="0"/>
                                                <input type="checkbox" name="permissions[83][ajouter]" id="permissions[83][ajouter]" value="1" />
                                                <span></span>
                                            </div>
                                            </label>
                                        </td>
                                        </tr>
                                    </tbody>
                                    </table>

                                    <br/>
                                <label htmlFor="statut" className="l300" style={{display:"margin-left:10px"}}>
                                <div className="slideCheckBoxSquare">
                                    <input type="hidden" name="statut" value="0"/>
                                    <input type="checkbox" id="statut" name="statut" value="1" />
                                    <span></span>
                                </div>Statut(activé/désactivé)
                                </label>
                                <br/>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="btn-bleu l150" value="" id="name_submit">
                                <i className="fa fa-floppy-o"></i> Enregistrer</button>
                                <button className="btn_reset l150 lien_ajax" >
                                    <i className="fa fa-ban"></i> Annuler
                                </button>
                                </div>
                            </div>
                            <div className="padding10 left">
                            </div>
                    
                        </form>
                    </div>
                    
                </div>
            </section>
        </div>
        

        </>
    )
}
