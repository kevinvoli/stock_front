'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useFetchData } from "@/hooks/useFetchData";

type Categories = {
    id?:number;
    nom: string;
  
    description: string |null ;
    parentId?: number ;
    parent?:Categories
  }


export default function  UpdateCategories () {
    const params = useParams();
    const {id} = params as {id:string};
    const {data:session} = useSession();
    const router = useRouter();

    const [ categories,setCategories] = useState<Categories>({nom:"",description:"",parentId:0})
    const [ AllCate,setAllCate] = useState<Categories[]>([])
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
 
    const handleUpdate= async (e:React.FormEvent)=>{
        e.preventDefault();
        console.log("transmission de la categorie:",categories);
        
        await fetch(`http://localhost:3003/gateway/${id}?service=ServiceStock&module=categorie`, {
            method: "PATCH",
            headers: { 
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.user?.accessToken}`,
            },
            body:JSON.stringify(categories)
          })
          .then(res=>res.json())
          .then((data)=>{
            router.push("/categories_produits");
          })
          .catch(err=>{
            console.log("mon erreeur",err);
          })
        //   http://localhost:3003/gateway/1?service=ServiceStock&module=categorie
        //   router.push("categories_produits")  
    }

    const handleChange= async (e: { target: { name: any; value: any; }; })=>{
        console.log("changement de valeu",e.target);
      
        const {name,value}= e.target;
        setCategories((prev)=>({
            ...prev,
            [name]:name ==="parentId" ? parseInt(value) : value,
        }));
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
                        <form role="form" onSubmit={handleUpdate}>
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nom">Nom</label>
                                    <input type="text" className="form-control" id="nom"  name="nom"
                                    value={categories.nom} 
                                     onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Description</label>
                                    <input name="description" type="text" className="form-control" id="description" placeholder="Entrer votre prénom" 
                                    value={categories.description ?categories.description:""  }
                                    onChange={handleChange}
                                    />
                                </div>
                                
                                <div className="form-group col-md-6">
                                <label htmlFor="parentId">
                                    Categorie parent
                                </label>
                                <select 
                                className="form-control" 
                                id="parentId" 
                                name="parentId"
                                value={categories.parentId}
                                onChange={handleChange}
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
                            <button type="submit"  className="btn btn-primary">Ajouter</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

