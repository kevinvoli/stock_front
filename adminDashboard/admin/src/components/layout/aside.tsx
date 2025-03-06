"use client"; // Obligatoire pour Next.js (App Router)

import { useState } from "react";

import Link from "next/link";
import Searche from "../forms/searche";






export default function Aside(){

  const [isOpen, setIsOpen] = useState(false);
  return (

            <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
          {/* <!-- Sidebar user panel --> */}
          <div className="user-panel">
            <div className="pull-left image">
              <img src="/dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>

              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>
          {/* <!-- search form --> */}
        <Searche/>
          {/* <!-- /.search form --> */}
          {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
          <ul className="sidebar-menu">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li className="active"><a href="index.html"><i className="fa fa-circle-o"></i> Dashboard v1</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i> Dashboard v2</a></li>
              </ul>
            </li>
            <li className="active treeview">
              <a href="#">
                <i className="fa fa-dashboard"></i> <span>Log</span> <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li className=""><a href="index.html"><i className="fa fa-circle-o"></i> List log</a></li>
                <li><a href="logs/journals"><i className="fa fa-circle-o"></i>Journal Service</a></li>
                <li><a href="#"><i className="fa fa-circle-o"></i>Corbeille</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Stock</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li ><a href="index.html"><i className="fa fa-circle-o"></i> Produits</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Categories Produits</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Emplacements</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Mouvements Stock</a></li>

                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Entrepots</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Rangements</a></li>
                <li><a href="index2.html"><i className="fa fa-circle-o"></i>Rayons</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Commandes</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Fournisseurs</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Clients</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i>  Commandes</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i>  Details Commandes</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Notification</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Notification</a></li>
              </ul>
            </li>

            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>utilisateurs</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="users"><i className="fa fa-circle-o"></i> Utilisateur</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Roles</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i>  Permission</a></li>
              </ul>
            </li>

            


            <li className={`treeview ${isOpen ? "open" : ""}`}>
              <a href="#" onClick={(e) => { 
                  e.preventDefault(); 
                  setIsOpen(!isOpen); 
                }}
              >
                <i className="fa fa-files-o"></i>
                <span>Layout Options</span>
                <span className="label label-primary pull-right">4</span>
              </a>
              {isOpen && (
                <ul className="treeview-menu">
                  <li>
                    <Link href="/pages/layout/topnav">
                      <i className="fa fa-circle-o"></i> Top Navigation
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/layout/boxed">
                      <i className="fa fa-circle-o"></i> Boxed
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/layout/fixed">
                      <i className="fa fa-circle-o"></i> Fixed
                    </Link>
                  </li>
                  <li>
                    <Link href="/pages/layout/collapsedsidebar">
                      <i className="fa fa-circle-o"></i> Collapsed Sidebar
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a href="/pages/widgets">
                <i className="fa fa-th"></i> <span>Widgets</span> <small className="label pull-right bg-green">new</small>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-pie-chart"></i>
                <span>Charts</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-laptop"></i>
                <span>UI Elements</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/UI/general.html"><i className="fa fa-circle-o"></i> General</a></li>
                <li><a href="pages/UI/icons.html"><i className="fa fa-circle-o"></i> Icons</a></li>
                <li><a href="pages/UI/buttons.html"><i className="fa fa-circle-o"></i> Buttons</a></li>
                <li><a href="pages/UI/sliders.html"><i className="fa fa-circle-o"></i> Sliders</a></li>
                <li><a href="pages/UI/timeline.html"><i className="fa fa-circle-o"></i> Timeline</a></li>
                <li><a href="pages/UI/modals.html"><i className="fa fa-circle-o"></i> Modals</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-edit"></i> <span>Forms</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/forms/general.html"><i className="fa fa-circle-o"></i> General Elements</a></li>
                <li><a href="pages/forms/advanced.html"><i className="fa fa-circle-o"></i> Advanced Elements</a></li>
                <li><a href="pages/forms/editors.html"><i className="fa fa-circle-o"></i> Editors</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-table"></i> <span>Tables</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
              </ul>
            </li>
            <li>
              <a href="/pages/calendar">
                <i className="fa fa-calendar"></i> <span>Calendar</span>
                <small className="label pull-right bg-red">3</small>
              </a>
            </li>
            <li>
              <a href="/pages/mailbox">
                <i className="fa fa-envelope"></i> <span>Mailbox</span>
                <small className="label pull-right bg-yellow">12</small>
              </a>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-folder"></i> <span>Examples</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="/pages/invoice"><i className="fa fa-circle-o"></i> Invoice</a></li>
                <li><a href="/pages/login"><i className="fa fa-circle-o"></i> Login</a></li>
                <li><a href="/pages/register"><i className="fa fa-circle-o"></i> Register</a></li>
                <li><a href="/pages/lockscreen"><i className="fa fa-circle-o"></i> Lockscreen</a></li>
                <li><a href="/pages/404"><i className="fa fa-circle-o"></i> 404 Error</a></li>
                <li><a href="/pages/500"><i className="fa fa-circle-o"></i> 500 Error</a></li>
                <li><a href="/pages/blank"><i className="fa fa-circle-o"></i> Blank Page</a></li>
              </ul>
            </li>
            <li className="treeview">
              <a href="#">
                <i className="fa fa-share"></i> <span>Multilevel</span>
                <i className="fa fa-angle-left pull-right"></i>
              </a>
              <ul className="treeview-menu">
                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
                <li>
                  <a href="#"><i className="fa fa-circle-o"></i> Level One <i className="fa fa-angle-left pull-right"></i></a>
                  <ul className="treeview-menu">
                    <li><a href="#"><i className="fa fa-circle-o"></i> Level Two</a></li>
                    <li>
                      <a href="#"><i className="fa fa-circle-o"></i> Level Two <i className="fa fa-angle-left pull-right"></i></a>
                      <ul className="treeview-menu">
                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                        <li><a href="#"><i className="fa fa-circle-o"></i> Level Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="#"><i className="fa fa-circle-o"></i> Level One</a></li>
              </ul>
            </li>
            <li><a href="/documentation"><i className="fa fa-book"></i> Documentation</a></li>
            <li className="header">LABELS</li>
            <li><a href="#"><i className="fa fa-circle-o text-danger"></i> Important</a></li>
            <li><a href="#"><i className="fa fa-circle-o text-warning"></i> Warning</a></li>
            <li><a href="#"><i className="fa fa-circle-o text-info"></i> Information</a></li>
          </ul>
        </section>
        {/* <!-- /.sidebar --> */}
      </aside>

  )
}