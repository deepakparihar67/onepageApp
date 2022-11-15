import React from "react";
const  Contact=()=>{
    return(
        <>
        <div className="container-fluid" style={{backgroundColor:"rgb(182,216,225)"}}>
        <br></br><br></br>
            <div className="row">
                <div className="col-4 text-end"></div>
                <div className="col-6"> 
                    <h1 style={{fontWeight:"bolder"}}>CONTACT FORM</h1>
                </div>  
            </div><br></br><br></br>
            <form className="form-control" style={{backgroundColor:"rgb(182,216,225)"}}>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-2"> 
                        <label style={{fontWeight:"bold"}}>Name</label>
                        <input class="form-control" type="text" />
                    </div>
                    <div className="col-2"> 
                        <label style={{fontWeight:"bold"}}>Email</label>
                        <input class="form-control" type="email" />
                    </div>
                    <div className="col-2"> 
                        <label style={{fontWeight:"bold"}}>Phone</label>
                        <input class="form-control" type="number" />
                    </div>
                </div><br></br>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6"> 
                        <label style={{fontWeight:"bold"}}>Message</label>
                        <textarea class="form-control" rows="7" cols="85"></textarea>
                    </div>
                </div><br></br><br></br>
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-6"> 
                        <button className="btn btn-lg btn-primary">SEND FORM</button>
                    </div>
                </div><br></br>
            </form>    
        </div>
        <div>
        <footer className="bg-white" style={{height:"200px"}}>
          <br></br> <br></br> <br></br> 
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5" style={{fontSize:"20px"}} >
            <p>&copy; 2017-2022 Company, Inc. Deepak Parihar &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
          </div>
          <div className="col-4">
            <p class="float-end"><button className="btn btn-info"><a className="text-dark" style={{fontSize:"20px"}} href="#">Back to top</a></button></p>
          </div>
        </div>
      </footer>
        </div>
        </>
    )
}
export default Contact;