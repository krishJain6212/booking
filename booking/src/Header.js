import React, { useState } from 'react'

function Header() {

   const [data,setdata] = useState([])
  
  const fetchapi = ()=>{
      let url = 'http://localhost:4500/cities'

      fetch(url)
      .then((res)=>{return res.json()})
      .then((data)=>{
        setdata(data)
      })
  }
   const [query,setQuery] = useState("")
   const search_params = Object.keys(Object.assign({}, ...data))

   function search(data) {
       return data.filter((data)=>
       search_params.some((parameter)=>
       data[parameter].toString().toLowerCase().includes(query)
       )
       )
   }

  return (
    <>
    <div className='Header-parent'>
    <div className='Header d-flex justify-content-between pt-3 Web-padding' >


       <div className='Left'>
       <span className='fs-4 fw-bold text-light'>Booking.com</span> 
       </div>


       <div className='Right'>

        <div className='Bars '>
          <div className='d-flex'>
            <div className='profile'>
            <i className="fa-regular fa-user text-light fs-5"></i>
            </div>
            <div className='Bar-i'>
            <i className="fa-solid fa-bars text-light ms-3 fs-5"></i>
            </div>
            </div>
        </div>

        <div className='Right-info'>
          <ul className='Menu-list d-flex  align-items-center'>
          <span className=' text-light fw-bold' >INR</span>
           <li><img src='./ind.jpg' className='  ms-3 rounded-circle' width={30}/></li>
           <li><i className=" ms-3 fa-regular fa-circle-question fs-5 text-light"></i></li>
           <li className=' ms-3 text-light fw-bold'>List your property</li>
           <li><button className='ms-3 btn text-primary bg-light'>Register</button></li>
           <li><button className='ms-3 btn text-primary bg-light'> Sign in</button></li>
          </ul> 
          
        </div>


       </div>
    </div>

    <div className='Navbar Web-padding'>
           <ul className='Nav-list mb-0 justify-content-start align-items-center p-0 d-flex'>
            <li className=' me-2 p-2 pe-3 ps-3 border border-white rounded-pill'>
              <span><i className="fa-solid fa-bed text-light"></i></span>
              <span className='text-light ms-2'>Stays</span>
            </li>
            
            <li className=' me-2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-solid fa-bed text-light"></i></span>
              <span className='text-light ms-2'>Flights</span>
            </li>

            <li className='me-2 dis2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-solid fa-bed text-light"></i></span>
              <span className='text-light ms-2'>Flight + Hotel</span>
            </li>

             <span className=' add text-light fs-4 fw-bold'>+</span>

            <li className=' dis me-2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-solid fa-bed text-light"></i></span>
              <span className='text-light ms-2'>Car rentals</span>
            </li>

            <li className=' dis me-2 p-2 pe-3 ps-3 rounded-pill'>
              <span><i className="fa-solid fa-bed text-light"></i></span>
              <span className='text-light ms-2'>Attractions</span>
            </li>

            <li className=' dis p-2 pe-3 ps-3  rounded-pill'>
              <span><i className="fa-solid fa-bed text-light"></i></span>
              <span className='text-light ms-2'>Airport taxis</span>
            </li>
           </ul>
    </div>

    <div className='Banner text-start pb-4 pt-4 Web-padding'>
      <h1 className=' Heading-1 pt-5 text-light'>Find your next stay</h1>
      <p className='text-light pb-5'>Search low prices on hotels, homes and much more...</p>
    </div>
        
        <div className='Form '>
          <form>
            <div className='tr d-flex flex-wrap justify-content-center align-items-center'>
              <div className='td Search-City d-flex  col'>
                <span><i className="fa-solid fa-bed me-2"></i></span>
                <span><input 
                       onClick={fetchapi} 
                       
                       onChange={(e)=> setQuery(e.target.value)}

                       type='search' 
                       
                       placeholder='Where are you going?'
                       
                       /></span>

<div className='Res mt-2'>
      {search(data).map((dataObj) => {

return (

  <div className="box w-50 m-auto">

    <div class="card">

      

      <div class="heading"
      onClick={()=>}
      >

        {dataObj.City}

       

      </div>

    </div>

  </div>

);

})}

    </div>

  


              </div>
              <div className='td d-flex col'>
                <span><i className="fa-solid fa-calendar-days me-2"></i></span>
                <span><button className='Check'>Check-in date</button></span>
                <span>-</span>
                <span><button className='Check'>Check-out date</button></span>
              </div>
              <div className='td d-flex col'>
                <span><i class="fa-regular fa-user me-2"></i></span>
                <span>2 adults</span>
                <span>.</span>
                <span>0 children</span>
                <span>.</span>
                <span className='me-4'>1 room</span>
                <span><i class="fa-solid fa-v ms-5"></i></span>
              </div>
              <div className='td-2'>
                <span><button className='bg-primary text-light'>Search</button></span>
              </div>
            </div>
          </form>
          <div className='Checkbox text-start'>
            <input type='checkbox' className='me-2'/>
            <span>i'm looking for flights</span>
          </div>
        </div>

    </div>
    </>
  )
}

export default Header