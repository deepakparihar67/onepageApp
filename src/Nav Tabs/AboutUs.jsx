import React from "react";
const  AboutUs=()=>{
    return(
        <>
        <br></br><br></br><br></br><div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
          <br></br><br></br><br></br><br></br><br></br><h2 className="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p className="lead text-center">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam ullam sit minus eaque tempore laudantium pariatur voluptatum iste nam molestias voluptatem optio, maiores odit maxime iure porro! Nam, earum?</p>
          </div>
          <div className="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://wallpapercave.com/wp/wp5609985.jpg" alt="...." />
          </div>
        </div>
        </div>
        <br></br><br></br><hr></hr><br></br><br></br>
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <br></br><br></br><br></br><br></br><br></br><br></br><h2 class="featurette-heading text-center">Oh yeah, it's that good. <span class="text-muted text-center">See for yourself.</span></h2>
            <p class="lead text-center">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde laboriosam voluptatibus ipsam quidem enim, labore sint. Veniam tempore dolores ex at? Ullam et amet quaerat inventore eum aspernatur, aperiam maxime?</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="https://wallpapercave.com/wp/wp5609985.jpg" alt="Generic placeholder image" />
          </div>
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
export default AboutUs;