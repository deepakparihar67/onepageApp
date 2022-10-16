import React from "react";
const  Home=()=>{
    return(
        <>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img style={{height:"600px", width:"100%"}} class="first-slide" src="https://wallpapercave.com/wp/wp2089935.jpg" alt="First slide" />
                <div class="container">
                    <div class="carousel-caption text-start">
                      <h1>Beyond the Seas.</h1>
                      <p className="text-black">We are like islands in the sea, separate on the surface but connected on the deep.” “Dance with the waves, move with the sea, let the rhythm of the water set your soul free</p>
                      <p><a class="btn btn-lg btn-primary" href="/contact" role="button">Connect With Us</a></p>
                    </div>
                </div>
            </div>
          </div><br></br><br></br><br></br><br></br>

        <div className="conatiner-fluid">
        <div class="row">
            <div className="col-1"></div>
          <div class="col-lg-3 text-center text-secondary">
            <img class="rounded-circle" src="https://image.shutterstock.com/image-photo/beach-oceanfront-260nw-422059351.jpg" alt="Generic placeholder image" width="140" height="140" />
            <h2 >Sapphire</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam ratione aliquam, vero officia rem sequi magni necessitatibus consectetur magnam, minima dolorum placeat fuga. Ab natus consectetur perspiciatis doloribus incidunt?</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-lg-3 text-center text-secondary">
            <img class="rounded-circle" src="https://papers.co/wallpaper/papers.co-ma76-boat-at-sunset-sea-nature-6-wallpaper.jpg" alt="Generic placeholder image" width="140" height="140" />
            <h2>Tangerine.</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam ratione aliquam, vero officia rem sequi magni necessitatibus consectetur magnam, minima dolorum placeat fuga. Ab natus consectetur perspiciatis doloribus incidunt?</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-lg-3 text-center text-secondary">
            <img class="rounded-circle" src="https://free4kwallpapers.com/uploads/originals/2018/07/19/forest-at-dusk-mikael-gustafsson--download-link-in-comments-wallpaper.jpg" alt="Generic placeholder image" width="140" height="140" />
            <h2>Calamitous</h2>
            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam ratione aliquam, vero officia rem sequi magni necessitatibus consectetur magnam, minima dolorum placeat fuga. Ab natus consectetur perspiciatis doloribus incidunt?</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div><br></br><br></br>

        <hr></hr><br></br><br></br>
        <div className="row">
          <div className="col-md-7">
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h2 className="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p className="lead text-center">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quisquam ullam sit minus eaque tempore laudantium pariatur voluptatum iste nam molestias voluptatem optio, maiores odit maxime iure porro! Nam, earum?</p>
          </div>
          <div className="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://i.pinimg.com/originals/8c/2e/74/8c2e74d610b0efe4da17fd52dafcb47d.jpg" alt="...." />
          </div>
        </div>
        </div>
        <br></br><hr></hr><br></br>
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
export default Home;