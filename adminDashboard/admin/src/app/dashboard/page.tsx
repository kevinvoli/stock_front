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
          {/* <!-- Small boxes (Stat box) --> */}
          <div className="row">
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-aqua">
                <div className="inner">
                  <h3>150</h3>
                  <p>New Orders</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>53<sup style={{ fontSize:"20px" }}>%</sup></h3>
                  <p>Bounce Rate</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>44</h3>
                  <p>User Registrations</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className="col-lg-3 col-xs-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>65</h3>
                  <p>Unique Visitors</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph"></i>
                </div>
                <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
              </div>
            </div>
            {/* <!-- ./col --> */}
          </div>
        </section>
    </div>
    </>
    
  )
}

export default WithAuth(Dashboard)