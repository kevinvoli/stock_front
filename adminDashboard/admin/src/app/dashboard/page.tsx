"use client";
import Navbar from "@/components/layout/navbar"
import WithAuth from "@/utils/Higther-Order-component";



  function Dashboard(){

  return (
    <>
    <div className="content-wrapper">
    <section className="content-header">
          <h1>
            Dashboard
            <small>Control panel</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Dashboard</li>
          </ol>
        </section>
        <section className="content">

        </section>
      <p className="bg-black">salutation </p>
    </div>
    </>
    
  )
}

export default WithAuth(Dashboard)