


const Box = ({title, children}:{title:string; children: React.ReactNode} )=>{

  return (
    <>
        <section className="content">
          <div className="row">
            <div className="col-xs-12"></div>
              <div className="box box-primary">
                <div className="box-header">
                  <h3 className="box-title">
                    {title}
                  </h3>
                  <div className="box body">
                    {children}
                  </div>
                </div>
              </div>
              </div>
          
    </section>
    
    </>

  );
};

export default Box;