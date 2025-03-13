


const Box = ({title, children}:{title:string; children: React.ReactNode} )=>{

  return (
    <>
      <section className="content">
        <div className="row">
          <div className="col-xs-12">
            <div className="box box-primary">
              <div className="box-header">
                <h5 className=""><a href="/stock/categories_produits/add" ><i className="fa fa-plus" ></i> Ajouter nouveau</a></h5>
                <div className="box-tools d-flex align-items-center mb-4">
                  <input 
                      type="text" 
                      name="table_search" 
                      className="form-control input-sm pull-right "  
                      placeholder="rechercher..."
                      
                      style={{ width: "170px" , marginTop: "10px"}}
                      />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-default" style={{marginTop: "10px", left: "116%" }}><i className="fa fa-search"></i></button>
                  </div>
                  
                </div>
                
                <div className="box-body">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>  
        {/* Affichage de la modale */}
  
     
   
      </section>
    
    </>

  );
};

export default Box;