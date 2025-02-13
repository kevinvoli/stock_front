


export default function Mailbox(){
  return (
    <>
          <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header">
          <h1>
            Mailbox
            <small>13 new messages</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li className="active">Mailbox</li>
          </ol>
        </section>

        {/* <!-- Main content --> */}
        <section className="content">
          <div className="row">
            <div className="col-md-3">
              <a href="compose.html" className="btn btn-primary btn-block margin-bottom">Compose</a>
              <div className="box box-solid">
                <div className="box-header with-border">
                  <h3 className="box-title">Folders</h3>
                </div>
                <div className="box-body no-padding">
                  <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#"><i className="fa fa-inbox"></i> Inbox <span className="label label-primary pull-right">12</span></a></li>
                    <li><a href="#"><i className="fa fa-envelope-o"></i> Sent</a></li>
                    <li><a href="#"><i className="fa fa-file-text-o"></i> Drafts</a></li>
                    <li><a href="#"><i className="fa fa-filter"></i> Junk <span className="label label-waring pull-right">65</span></a></li>
                    <li><a href="#"><i className="fa fa-trash-o"></i> Trash</a></li>
                  </ul>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /. box --> */}
              <div className="box box-solid">
                <div className="box-header with-border">
                  <h3 className="box-title">Labels</h3>
                </div>
                <div className="box-body no-padding">
                  <ul className="nav nav-pills nav-stacked">
                    <li><a href="#"><i className="fa fa-circle-o text-red"></i> Important</a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> Promotions</a></li>
                    <li><a href="#"><i className="fa fa-circle-o text-light-blue"></i> Social</a></li>
                  </ul>
                </div>
                {/* <!-- /.box-body --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col --> */}
            <div className="col-md-9">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Inbox</h3>
                  <div className="box-tools pull-right">
                    <div className="has-feedback">
                      <input type="text" className="form-control input-sm" placeholder="Search Mail"/>
                      <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                  </div>
                  {/* <!-- /.box-tools --> */}
                </div>
                {/* <!-- /.box-header --> */}
                <div className="box-body no-padding">
                  <div className="mailbox-controls">
                    {/* <!-- Check all button --> */}
                    <button className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i></button>
                    <div className="btn-group">
                      <button className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                      <button className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                      <button className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                    </div>
                    {/* <!-- /.btn-group --> */}
                    <button className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                    <div className="pull-right">
                      1-50/200
                      <div className="btn-group">
                        <button className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                        <button className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                      </div>
                      {/* <!-- /.btn-group --> */}
                    </div>
                    {/* <!-- /.pull-right --> */}
                  </div>
                  <div className="table-responsive mailbox-messages">
                    <table className="table table-hover table-striped">
                      <tbody>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"></td>
                          <td className="mailbox-date">5 mins ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">28 mins ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">11 hours ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"></td>
                          <td className="mailbox-date">15 hours ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">Yesterday</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"></td>
                          <td className="mailbox-date">2 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">4 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"></td>
                          <td className="mailbox-date">12 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star-o text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">12 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">14 days ago</td>
                        </tr>
                        <tr>
                          <td><input type="checkbox" /></td>
                          <td className="mailbox-star"><a href="#"><i className="fa fa-star text-yellow"></i></a></td>
                          <td className="mailbox-name"><a href="read-mail.html">Alexander Pierce</a></td>
                          <td className="mailbox-subject"><b>AdminLTE 2.0 Issue</b> - Trying to find a solution to this problem...</td>
                          <td className="mailbox-attachment"><i className="fa fa-paperclip"></i></td>
                          <td className="mailbox-date">15 days ago</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <!-- /.table --> */}
                  </div>
                  {/* <!-- /.mail-box-messages --> */}
                </div>
                {/* <!-- /.box-body --> */}
                <div className="box-footer no-padding">
                  <div className="mailbox-controls">
                    {/* <!-- Check all button --> */}
                    <button className="btn btn-default btn-sm checkbox-toggle"><i className="fa fa-square-o"></i></button>                    
                    <div className="btn-group">
                      <button className="btn btn-default btn-sm"><i className="fa fa-trash-o"></i></button>
                      <button className="btn btn-default btn-sm"><i className="fa fa-reply"></i></button>
                      <button className="btn btn-default btn-sm"><i className="fa fa-share"></i></button>
                    </div>
                    {/* <!-- /.btn-group --> */}
                    <button className="btn btn-default btn-sm"><i className="fa fa-refresh"></i></button>
                    <div className="pull-right">
                      1-50/200
                      <div className="btn-group">
                        <button className="btn btn-default btn-sm"><i className="fa fa-chevron-left"></i></button>
                        <button className="btn btn-default btn-sm"><i className="fa fa-chevron-right"></i></button>
                      </div>
                      {/* <!-- /.btn-group --> */}
                    </div>
                    {/* <!-- /.pull-right --> */}
                  </div>
                </div>
              </div>
              {/* <!-- /. box --> */}
            </div>
            {/* <!-- /.col --> */}
          </div>
          {/* <!-- /.row --> */}
        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
   
    <script>
      $(function () {
        //Enable iCheck plugin for checkboxes
        //iCheck for checkbox and radio inputs
        $('input[type="checkbox"]').iCheck({
          checkboxClass: 'icheckbox_flat-blue',
          radioClass: 'iradio_flat-blue'
        });

        //Enable check and uncheck all functionality
        $(".checkbox-toggle").click(function () {
          var clicks = $(this).data('clicks');
          if (clicks) {
            //Uncheck all checkboxes
            $("input[type='checkbox']", ".mailbox-messages").iCheck("uncheck");
          } else {
            //Check all checkboxes
            $("input[type='checkbox']", ".mailbox-messages").iCheck("check");
          }
          $(this).data("clicks", !clicks);
        });

        //Handle starring for glyphicon and font awesome
        $(".mailbox-star").click(function (e) {
          e.preventDefault();
          //detect type
          var $this = $(this).find("a > i");
          var glyph = $this.hasClass("glyphicon");
          var fa = $this.hasClass("fa");          

          //Switch states
          if (glyph) {
            $this.toggleClass("glyphicon-star");
            $this.toggleClass("glyphicon-star-empty");
          }

          if (fa) {
            $this.toggleClass("fa-star");
            $this.toggleClass("fa-star-o");
          }
        });
      });
    </script>
    </>
  )
}


