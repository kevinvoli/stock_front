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

