"use client";

import DataTable from "@/components/tables/dataTable";
import Box from "@/components/UI/Box";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";

import Box from "@/components/UI/Box"
import DataTable from "@/components/tables/dataTable";
import BreadCrumb from "@/components/UI/Breadcrumb";
import { useFetchData } from "@/hooks/useFetchData";


type UserType = {
    id: string,
    email: string,
    password: string,
    name: string,
    role: string
}

<<<<<<< HEAD
export default function Users(){
    
    const { data: dataList, loading, error } = useFetchData<UserType[]>("https://api.escuelajs.co/api/v1/users", "GET");
=======


type Users = {
  id:string,
  service_source:string,
  service_cible: number,
  date: string,
  temps_reponse:string,
  created_at: string,
  status: string,
}

const pageInfo=[
  { label: "Logs", link: "#" },
  { label: "Journal", link: "#" },
  { label: "Listes" }
]
const serviceName= "logService";
const moduleName = "corbeille";
const endpoint  = `gateway?${serviceName ? "service="+serviceName:''}&${moduleName ? "module="+moduleName : ''}`

export default function User(){
  const { data: dataList, loading, error } =  useFetchData<Users[]>(endpoint, "GET");

console.log("🛠 Colonnes détectées1 :",dataList);

>>>>>>> master
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Logs
            <small>Journal Service</small>
          </h1>
          <BreadCrumb items={pageInfo}/>
          
        </section>

<<<<<<< HEAD
        <Box title="Liste des journaux">
          {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <DataTable tableau={dataList} />}
        </Box>
=======
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <Box title="Liste des journaux" link="/user/add">
                {loading ? <p>Chargement...</p> : error ? <p>❌ {error}</p> : <DataTable tableau={dataList} link="/edit"/>}
              </Box>
            </div>
              
          </div>
        </section>
>>>>>>> master
    </div>
    </>
  )
}