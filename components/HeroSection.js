function HeroSection(){
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
            <p class="lead"style="width:75%">Working!</p>
            <p><a class="btn btn-lg btn-danger bg-gradient" href="#inventory"><i class="bi bi-search"></i> CHECK INVENTORY</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        

        <div class="container" >
          <div class="carousel-caption text-start">
            <h2 class="headlineText">Quality Used Autos<br><i class="bi bi-headline bi-star-fill"></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill"></i> <br></h2>
            <p class="lead"style="width:75%">...</p>
            <p><a class="btn btn-lg btn-danger" href="#inventory"><i class="bi bi-search"></i> CHECK INVENTORY</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
       

        <div class="container" >
          <div class="carousel-caption text-start">
            <h2 class="headlineText">Quality Used Autos<br><i class="bi bi-headline bi-star-fill"></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill" ></i> <i class="bi bi-headline bi-star-fill"></i> <br></h2>
            <p class="lead"style="width:75%">Providing quality, used, affordable auto mobiles for sale in the greater Seattle area</p>
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

export default HeroSection;
