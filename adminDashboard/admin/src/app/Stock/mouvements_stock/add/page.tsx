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
        { nom: "Entrer" },
        { nom: "Sortie" },
      ];

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Mouvements Stock
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
                                    <Select 
                                        id="action"
                                        name="name"
                                        label="Type de Mouvements"
                                        value={formData.name}
                                        options={predefinedOptions}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Select 
                                        id="action"
                                        name="name"
                                        label="Produits"
                                        value={formData.name}
                                        options={predefinedOptions}
                                    />
                                </div>
                            </div>
                            <div className="row">

                                <div className="form-group col-md-6">
                                    <Input
                                        label="Quantité"
                                        type="number"
                                        id="exampleInputEmail2"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Entrez votre quantité"
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <Select 
                                        id="action"
                                        name="name"
                                        label="Rangements"
                                        value={formData.name}
                                        options={predefinedOptions}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label>Date</label>
                                    <div className="input-group">
                                        <div className="input-group-addon">
                                            <i className="fa fa-calendar" />
                                        </div>
                                        <input type="date" className="form-control" data-inputmask="'alias': 'dd/mm/yyyy'" data-mask />
                                    </div>
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

