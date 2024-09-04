import React from 'react'

function Section() {
  return (
    <div className='Main-section Web-padding mt-5'>

      {/* OFFER SECTION STARTS */}
      <div className='Offer-section'>
        <h3 className='text-start fw-bold'>Offers</h3>


        <div id="carouselExampleIndicators" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item d-flex justify-content-center active">

       <div className='info border rounded p-4 d-flex me-5'>
    <div className='Left-info text-start'>
        <h5 className='text-black'>Fly away to your dream holiday</h5>
        <p>Get inspired, compare and book flights with more flexibility</p>
        <button className='btn btn-primary'>Search for flights</button>
      </div>
      <div className='Right-info'>
         <img src='./i2.jpg' width={124} />
      </div>
      </div>

      <div className='info p-4 border rounded d-flex align-item-center ms-5'>
      <div className='Left-info text-start'>
        <h5 className='text-black'>Planning a trip to the 2024 Summer Games?</h5>
        <p>Brussels is a quick train ride from all the action</p>
        <button className='btn btn-primary'>Explore brussels</button>
      </div>
      <div className='Right-info'>
      <img className='rounded' src='./fly.jpg' width={124} />
      </div>
      </div>


    </div>

    <div class="carousel-item d-flex visually-hidden justify-content-between">

    <div className='info'>
     <div className='Left-info'>
        <h5 className='text-black'>Seize the moment</h5>
        <p>Save 15% or more when you book and stay before 1 October 2024</p>
        <button>Find Gateaway Deals</button>
      </div>
</div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>

      {/* OFFER SECTION ENDS */}

       {/* Trending destinations */}
        
        <div className='Trend-section '>
         <h3 className='fw-bold mt-5 text-start'>Trending destinations</h3>
         <p className='text-start'>Most popular choices for travellers from India</p>

         <div className='Dest row '>
          <div className='Dest-img col-lg-6 col-md-12 mb-4 mb-lg-0'>
            <h3>New Delhi</h3>
          <img className='rounded mb-4 w-100' src='./delhi.jpg' height={300} />
          </div>
          <div className='Dest-img col-lg-6 col-md-12 mb-4 mb-lg-0'>
          <h3>Banglore</h3>
          <img className='rounded w-100' src='./banglore.jpg' height={300} />
          </div>
          <div className='Dest-img col-lg-4 col-md-12 mb-4 mb-lg-0' >
          <h3>Mumbai</h3>
          <img className='rounded w-100' src='./mumbai.jpg' />
          </div>
          <div className='Dest-img col-lg-4 col-md-12 mb-4 mb-lg-0'>
          <h3>Chennai</h3>
          <img className='rounded w-100' src='./chennai.jpg' />
          </div>
          <div className='Dest-img col-lg-4 col-md-12 mb-4 mb-lg-0'>
          <h3>Manali</h3>
          <img className='rounded mb-4  w-100' src='./manali.jpg' />
          </div>
         </div>
        </div>

       {/* trending destinations ends */}

       {/* property type */}

       <div className='property'>
          <h3 className='fw-bolder text-start'>Browse by property type</h3>
          <div className='row'>
          <div className=' col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./hotels.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Hotels</h5>
          </div>
          <div className=' col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./apartemts.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Apartments</h5>
          </div>

          <div className=' col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./resort.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Resorts</h5>
          </div>

          <div className=' col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./villa.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Viilas </h5>
          </div>
          
          </div>
       </div>

       {/* property type ends  */}

          {/* Explore india  */}

         <div className='Explore mt-2'>
         <h3 className='fw-bolder text-start'>Explore India</h3>
         <p className='text-start'>These popular destinations have a lot to offer</p>


          <div className='row'>
          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Goa.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Goa</h5>
          <p className='text-start'>5,251 properties</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Ooty.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Ooty</h5>
          <p className='text-start'>5,251 properties</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Mumbai2.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Mumbai</h5>
          <p className='text-start'>5,251 properties</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Delhi2.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>New delhi</h5>
          <p className='text-start'>5,251 properties</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Banglore2.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Banglore</h5>
          <p className='text-start'>5,251 properties</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Munnar.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Munnar</h5>
          <p className='text-start'>5,251 properties</p>
          </div>
          </div>
         </div>

          {/* Explore india ends  */}

          {/* Trip planner */}

          <div className='Trip-planner'>
            <h3 className='text-start'>Quick and easy trip planner</h3>
            <p className='text-start'>Pick a vibe and explore the top destinations in India</p>

            <div className='List-trip'>
            <ul className='Trip-ul mb-0 justify-content-start align-items-center p-0 d-flex'>
            <li className=' me-2 p-2 pe-3 ps-3 border border-white rounded-pill'>
              <span><i className="fa-solid fa-person-biking text-black"></i></span>
              <span className='text-black ms-2'>Outdoors</span>
            </li>
            
            <li className=' me-2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-solid fa-city text-black"></i></span>
              <span className='text-black ms-2'>City</span>
            </li>

            <li className='me-2 dis2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-solid fa-umbrella-beach text-black"></i></span>
              <span className='text-black ms-2'>Beach</span>
            </li>

             <span className=' add text-light fs-4 fw-bold'>+</span>

            <li className=' dis me-2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-regular fa-heart text-black"></i></span>
              <span className='text-black ms-2'>Romance</span>
            </li>
            </ul>
            </div>

            <div className='row mt-3'>
          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Ramnagar.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Ramnagar</h5>
          <p className='text-start'>426 km away</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Garjia.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Garjia</h5>
          <p className='text-start'>426 km away</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Dehradun.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Dehradun</h5>
          <p className='text-start'>426 km away</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Musoorie.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Mussoorie</h5>
          <p className='text-start'>426 km away</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Kasauli.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Kasauli</h5>
          <p className='text-start'>426 km away</p>
          </div>

          <div className=' col-lg-2 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Shimla.jpg' />
          <h5 className='text-start mt-3 fw-bolder'>Shimla</h5>
          <p className='text-start'>426 km away</p>
          </div>
          </div>
          </div>

          {/* Trip planner ends  */}


          {/* Top properties */}

            <div className='Top-props'>
              <h3 className='text-start'>Stay at our top unique properties</h3>
              <p className='text-start'>From castles and villas to boats and igloos, we've got it all</p>

              <div className='row d-flex gap-3 flex-nowrap mb-3'>
          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
            <div className='Image'>
          <img className='w-100 rounded-top' src='./Gyttja.jpg' />
          </div>
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
          </div>
          

          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded-top w-100' src='./Wald.jpg' />
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
          </div>

          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded-top w-100' src='./Harbor.webp' />
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
          </div>

          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded-top w-100' src='./Casa.jpg' />
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
          </div>
          </div>
            </div>

          {/* Top properties ends  */}


             {/* Home guest */}

              <div className='Home-guest'>


                <div className='d-flex justify-content-between'>
                  <div>
                  <h3>Homes guests love</h3>
                  </div>
                  <div>
                  <a className='text-end Disc'>Discover homes</a>
                  </div>
                </div>

                <div className='row d-flex gap-3 flex-nowrap mb-3'>
          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
            <div className='Image'>
          <img className='w-100 rounded-top' src='./Gyttja.jpg' />
          </div>
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
          <p className='Price text-end me-3'>starting from <span className='fw-bolder fs-5'>10,777</span></p>
          </div>
          

          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded-top w-100' src='./Wald.jpg' />
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
<p className='Price text-end me-3'>starting from <span className='fw-bolder fs-5'>10,777</span></p>
          </div>

          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded-top w-100' src='./Harbor.webp' />
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
<p className='Price text-end me-3'>starting from <span className='fw-bolder fs-5'>10,777</span></p>
          </div>

          <div className='Row-info rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded-top w-100' src='./Casa.jpg' />
          <h5 className='text-start ps-2 mt-3 fw-bolder'>Gyttja Västergårds</h5>
          <p className='text-start ps-2'>Finland, lillandent</p>
          <div className='Rating ps-2 pb-4 d-flex'>
            <div className='Rate me-2 rounded-top rounded-end text-light'>9.8</div>
            <span>Superb</span>
            <span>.</span>
            <span>reviews</span>
          </div>
<p className='Price text-end me-3'>starting from <span className='fw-bolder fs-5'>10,777</span></p>
          </div>
          </div>


              </div>

             {/* Home guest end  */}

             {/* Inspiration */}

               <div className='Inspiration'>
                

               <div className='d-flex justify-content-between'>
                  <div>
                  <h3>Get inspiration for your next trip</h3>
                  </div>
                  <div>
                  <a className='text-end Disc'>More</a>
                  </div>
                </div>



                <div className='row  mb-3'>
          <div className=' Picture rounded col-lg-6 col-md-12 mb-4 mb-lg-0' >
            
          <img className='w-100 rounded' src='./Newyork.jpg' />
          <div className='Picture-title'>
          <h4 className='text-start text-light ps-2 mt-3 fw-bolder'>New year's Eve in New york city</h4>
          <p className='text-start text-light ps-2'>Ring in the new year with iconic moments and unforgettable memories in New York City</p>
          </div>
         
          </div>
          

          <div className=' rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Japan.jpg' height={250}/>
          <h5 className='text-start ps-2 mt-3 fw-bolder'>6 best ryokans in Japan to rejuvenate yourself</h5>
          <p className='text-start ps-2'>Discover unmissable ryokans to relax and unwind in style.</p>
          
          </div>

          <div className='rounded col-lg-3 col-md-12 mb-4 mb-lg-0' >
          <img className='rounded w-100' src='./Asia.jpg' height={250}/>
          <h5 className='text-start ps-2 mt-3 fw-bolder'>7 best places in Asia to celebrate Christmas</h5>
          <p className='text-start ps-2'>Discover the shimmering lights and festive sights of Asia’s holiday season.</p>
          
          </div>
</div>
               </div>

             {/* Inspiration ends  */}

             {/* Find banner */}

             <div className='Banner-find'>
              <div className='Banner-content border rounded'>
                <a className='Banner-link d-flex text-decoration-none justify-content-center'>
                  <div className='Obj1'></div>
                  <div className='Obj2'>
                    <div className='Info-3'>
                    <div className='fw-bolder fs-4'>Find Homes</div>
                    <div className='fw-bolder fs-4'>for your next trip</div>
                    </div>
                    <span className='Info-4 text-start'>
                      Discover Homes
                    </span>
                  </div>
                  <div className='Obj3 ms-5'>
                    <img src='./banner2.png' width={360}/>
                  </div>
                </a>
              </div>
             </div>
             {/* Find banner ends  */}

             {/* Travel more  */}

              <div className='Travel-content mt-4'>
                <h3 className='text-start'>Travel more, spend less</h3>

                <div className='Content-container border rounded'>
                   <div className='Content d-flex justify-content-between p-4'>
                    <div className='Left-content text-start'>
                    <h5 className='fw-bolder'>Sign in, save money</h5>
                    <p>Save 10% or more at participating properties - just look for the blue Genius label</p>
                    <button className='btn btn-primary'>Sign in</button>
                    <button className='btn btn-light text-primary ms-2'>Register</button>
                    </div>
                    <div className='Right-content'>
                         <img src='./Genius.jpg' width={100}/>
                    </div>
                   </div>
                </div>
              </div>

             {/* Travel more ends  */}

             {/* destinations we love  */}

               <div className='Destinations mt-4'>
                <h3 className='text-start fw-bolder'>Destinations we love</h3>
               </div>


               <div className='List-trip'>
            <ul className='Trip-ul mb-0 justify-content-start align-items-center p-0 d-flex'>
            <li className=' me-2 p-2 pe-3 ps-3 border border-white rounded-pill'>
              
              <span className='text-black ms-2'>Regions</span>
            </li>
            
            <li className=' me-2 p-2 pe-3 ps-3 rounded-pill'>
              
              <span className='text-black ms-2'>Cities</span>
            </li>

            <li className='me-2 dis2 p-2 pe-3 ps-3 rounded-pill'>
              
              <span className='text-black ms-2'>Place of intrest</span>
            </li>
            </ul>
            </div>


            <div className='row text-start mt-4 mb-3'>


<div className='col'>
  <ul>
    <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Countries</a></li>
      <p>89 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Regions</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Cities</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Districts</a></li>
      <p>39 properties</p>
     
  </ul>
</div>

<div className='col'>
  <ul >
  <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Homes</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Apartments</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Resorts</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Villas</a></li>
      <p>39 properties</p>
  </ul>
</div>

<div className='col'>
  <ul>
  <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Unique places to stay</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      All destinations</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      All flight destinations</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      All car hire locations</a></li>
      <p>39 properties</p>
  </ul>
</div>

<div className='col'>
  <ul>
  <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Car hire</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Flight finder</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Reastaurant reservations</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Booking.com for Travel Agents</a></li>
      <p>39 properties</p>
  </ul>
</div>

<div className='col'>
  <ul>
  <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Coronavirus (covid-19) FAQs</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      About Booking.com</a></li>
      <p>39 properties</p>
      <li className='list-group-item'><a className='text-black fw-bold text-decoration-none'>
      Customer service help</a></li>
      <p>39 properties</p>
      
  </ul>
</div>
</div>
             {/* ends  */}
    </div>
  )
}

export default Section