"use client";

import { useState, useEffect } from "react";
import axios from "axios";


export default function Users(){
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const[searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 10;

    useEffect(() => {
        const getUsers = async () => {
            console.log("🔄 Chargement des utilisateurs...");
            try{
                const res = await axios.get(`https://api.escuelajs.co/api/v1/users`);
                console.log("✅ Réponse API reçue :", res.data);
                setUsers(res.data)
                
            }catch(error){
                console.error("Erreur lors du chargement des utilisateurs :", error);
            }

        };
        getUsers();
    }, []);


    const filteredUsers = users.filter((user) => 
        `${user.name} ${user.email}`.toLowerCase().includes(String(searchQuery).toLowerCase())
    );


    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage
    const currentUsers = users.slice(indexOfFirstUser,indexOfLastUser)

    const totalPages = Math.ceil(users.length / itemsPerPage);

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
            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header">
                            {/* <div className="input-group ">
                                <input 
                                    type="text" 
                                    name="table_search" 
                                    className="form-control input-sm pull-right"  
                                    placeholder="rechercher"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        ; // Reset à la première page en cas de recherche
                                    }}
                                    style={{ width: "170px" }}
                                    />
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-default" style={{marginBottom: "50px" }}><i className="fa fa-search"></i></button>
                                </div>
                            </div> */}
                                <h5 className=" "><a href=""><i className="fa fa-plus"></i> Ajouter un nouvel utilisateur</a></h5>

                            <div className="box-tools d-flex align-items-center">
                                <input 
                                    type="text" 
                                    name="table_search" 
                                    className="form-control input-sm pull-right "  
                                    placeholder="rechercher..."
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        ; // Reset à la première page en cas de recherche
                                    }}
                                    style={{ width: "170px" , marginTop: "10px"}}
                                    />
                                <div className="input-group-btn">
                                    <button className="btn btn-sm btn-default" style={{marginTop: "10px" }}><i className="fa fa-search"></i></button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="box-body">
                            <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th style={{width: '20px'}}>N²</th>
                                        <th>Nom</th>
                                        <th>Prénom</th>
                                        <th>Email</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentUsers.length > 0 ? (
                                        currentUsers.map((user, index) =>(
                                            <tr key={user.id || index}>
                                                <td>{indexOfFirstUser + index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td className=""> 
                                                    <span className={`badge ${user.role === "admin" ? "bg-green" : "bg-red"}`}><i className={`fa ${user.role === "admin" ? "fa-check" : "fa-minus"}`}></i></span>
                                                </td>
                                                <td  className="d-flex justify-content-around">
                                                    <button className="btn btn-social-icon btn-dropbox ">
                                                        <i className="fa fa-edit"></i>
                                                    </button>
                                                    <button className="btn btn-social-icon btn-dropbox bg-red">
                                                        <i className="fa fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ): (
                                        <tr>
                                            <td className="text-center">Aucun utilisateur trouvé.</td>
                                        </tr>
                                    )}
                                </tbody>
                                <tfoot>
                                
                            </tfoot>
                            </table>
                            <div className="box-footer clearfix">
                                <ul className="pagination pagination-sm no-margin pull-right">
                                    <li className={currentPage === 1 ? "disabled" : ""}>
                                        <a href="#"
                                            onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage((prev) => Math.max(prev - 1, 1));
                                            }}>
                                            «
                                        </a>
                                    </li>

                                    {Array.from({length: totalPages}, (_,i) => (

                                        <li key={i + 1} className={currentPage === i + 1 ? "active" : ""}>
                                            <a 
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage(i + 1);}}
                                            >
                                                {i + 1}
                                            </a>
                                        </li>
                                    ))}


                                    <li  className={currentPage === totalPages ? "disabled" : ""}>
                                        <a 
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                                              }}
                                        >
                                            »
                                        </a>
                                    </li>
    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}


