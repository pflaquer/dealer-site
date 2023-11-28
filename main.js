let makeandmodel = 'Jeep Compass Trailhawk'
let description = "Barely Used!"
const logo = 'https://raw.githubusercontent.com/pflaquer/dealer-site/main/logo_recon.png'

let miles = 50000

let type = 'SUV'

//https://car-dealership-omega.vercel.app/assets/logo_-36dda34c.webp

const navBar = ()=>{
  return `
  
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-gradient">
     <div class="topnav">
<div>
     <ul class="navbar-nav sm-icons">
     
      <a class="nav-link" style="color:white;font-weight:400;" href="tel:"><i class="bi bi-geo-alt-fill"></i> 15028 Hwy 99, Lynnwood, WA</a></li>
     
     <ul class="navbar-nav sm-icons">
     <a class="nav-link" href="tel:2065555555"><i class="bi bi-envelope"></i> </a></li>
     <li><a class="nav-link" href="tel:2065555555"><i class="bi bi-phone"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-facebook"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-instagram"></i></a></li>
        <li><a class="nav-link" href="#"><i class="bi bi-twitter"></i></a></li>
        
      </ul>
      
  
     
       <hr style="color:red;margin-top:-2px;height:10px;">
     </div>
     </div>
     <hr style="color:red;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="logo" src="https://raw.githubusercontent.com/pflaquer/dealer-site/main/logo_recon.png"></img></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Used Autos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d">Contact Us</a>
          </li>
        </ul>
        
        
        
       
      </div>
    </div>
  </nav>
  
  
  `
}


const heroSection = ()=>{
  return `
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" style="background-image:radial-gradient(circle, rgba(0, 0, 0, 0) 35%, rgba(24, 24, 24, 1) 75%),url('https://raw.githubusercontent.com/pflaquer/car-dealership/main/src/assets/cars/car-16.jpg');display:flex;width:100%;height:900px;background-attachment: fixed;
  background-position: center;">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" >
        

        <div class="container" >
          <div class="carousel-caption text-start">
            <h2 class="headlineText">Quality Used Autos<br><i class="bi bi-headline bi-star-fill"></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill"></i> <br></h2>
            <p class="lead"style="width:50%">Providing quality, used, affordable auto mobiles for sale in the greater Seattle area</p>
            <p><a class="btn btn-lg btn-danger bg-gradient" href="#inventory"><i class="bi bi-search"></i> CHECK INVENTORY</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        

        <div class="container" >
          <div class="carousel-caption text-start">
            <h2 class="headlineText">Quality Used Autos<br><i class="bi bi-headline bi-star-fill"></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill"></i> <br></h2>
            <p class="lead"style="width:50%">Providing quality, used, affordable auto mobiles for sale in the greater Seattle area</p>
            <p><a class="btn btn-lg btn-danger" href="#inventory"><i class="bi bi-search"></i> CHECK INVENTORY</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
       

        <div class="container" >
          <div class="carousel-caption text-start">
            <h2 class="headlineText">Quality Used Autos<br><i class="bi bi-headline bi-star-fill"></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill"></i> <br></h2>
            <p class="lead"style="width:50%">Providing quality, used, affordable auto mobiles for sale in the greater Seattle area</p>
            <p><a class="btn btn-lg btn-danger" href="#inventory"><i class="bi bi-search"></i> CHECK INVENTORY</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  
  
  
  
  
  
  `
}





let card = ()=>{
  return `
  
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
      <img src="https://car-dealership-omega.vercel.app/assets/car-16-c9c1bce3.jpg" width="100%" height="60%"></img>
        <h5 class="card-title">${makeandmodel}</h5>
        <p class="card-text">${description}</p>
         <code class="card-text">Mileage: ${miles}</code>
         <br>
         <code class="card-text">Type: ${type}</code>
         <br>
        </div>
        <div class="card-footer bg-transparent border-secondary">
        <a onclick="alert('working')"  style="width:8rem;" class="btn btn-secondary" >VIEW MORE</a>
        <a onclick="alert(${JSON.stringify(this.innerHTML)})" class="btn btn-danger">INQUIRE</a>
        </div>
      
    </div>
  </div>

  `
}

let db = [1,2,3,4,5,6]

db.forEach(()=>{
  document.getElementById("cardcontainer").innerHTML += card();
})

let pages = [heroSection,navBar]


let i=0;

document.getElementById("heroSection").innerHTML = pages[i]

document.getElementById("navBar").innerHTML = pages[1]

//

//unused below

let cardGroup = ()=>{
  return `
  
     
    <div class="card-group" id="car-cards">
  
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
    
  </div>
        

  <div class="col-6 col-md-4">
    
    <div class="card-group" id="car-cards">
    <div class="card" style="width: 30rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    </div>
  
  `
}


const headerFeatures = ()=>{
  return `
  
    <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">Heading</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2 class="fw-normal">Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div><!-- /.col-lg-4 -->
  
  `
}
