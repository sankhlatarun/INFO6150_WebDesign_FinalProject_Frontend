import React,{useState} from 'react' 
import DatePicker from "react-datepicker";
import {Formik, useFormik} from 'formik';
import Button from '@mui/material/Button';
import { errHelper } from '../utils/tools';
import * as Yup from 'yup'
import TextField from '@mui/material/TextField';

import "react-datepicker/dist/react-datepicker.css";
import carousel3 from '../../assets/flightImages/carousel3.jpg'
import carousel2 from '../../assets/flightImages/carousel2.jpg'
import carousel1 from '../../assets/flightImages/carousel1.jpg'
import '../../assets/flights.css';

import card1 from '../../assets/flightImages/card1.jpg'
import card2 from '../../assets/flightImages/card2.jpg'
import card3 from '../../assets/flightImages/card3.jpg'
import card4 from '../../assets/flightImages/card4.jpg'
import card5 from '../../assets/flightImages/card5.jpg'
import card6 from '../../assets/flightImages/card6.jpg'

import person1 from '../../assets/flightImages/person1.jpg'
import person2 from '../../assets/flightImages/person2.jpg'
import person3 from '../../assets/flightImages/person3.jpg'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import 'bootstrap/dist/css/bootstrap.min.css';

import {data} from '../../assets/data/airportDetails';
import { useNavigate } from 'react-router-dom';

const FlightDashBoard = () => {

    const [isHovered, setIsHovered] = useState([false,'']);

    const [to, setTo] = useState("");

    const [from, setFrom] = useState("");

    const [dep, setDep] = useState(new Date());

    const [ret, setRet] = useState(new Date());

    const [oneway, setOneWay] = useState('oneway');

    const navigate = useNavigate();

    const handleTo = (event) => {
      setTo(event.target.value);
      formik.setFieldValue('to', event.target.value);
    };

    const handleFrom = (event) => {
      setFrom(event.target.value);

      formik.setFieldValue('from', event.target.value);
    };
    
    const handleWay = (event) => {
        
    }

    const dateToggle = (name, date) => {
      formik.setFieldValue(name, date);

    }

    const swapLocations = () => {
      const temp = formik.values.from;
      formik.setFieldValue('from', formik.values.to);
      formik.setFieldValue('to', temp);
    }

    const formik = useFormik({
      initialValues: {
        from: '',
        to: '',
        dep:'',
        ret:''

      },
      validationSchema: Yup.object({
        from: Yup.string().required("Required"),
        to: Yup.string().required("Required")
      }),
      onSubmit: (values) => {
        handleSubmit(values)
      }
    }) 

    const handleSubmit = async(values) => {
      console.log(values)
    //   const flights = await fetch(`http://localhost:3001/flights/flights/getFlightsByDetails/${values.from}/${values.to}`, 
    // {method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // }})
    // const data = await flights.json();
    // console.log(data);
      navigate(`/flight/search?from=${values.from}&to=${values.to}&dep=${values.dep}`,)
    }


    return(
        <div>
    
  <form onSubmit={formik.handleSubmit}>
  <div className="container-fluid p-5 border mt-5 contain" style={{ backgroundImage: 'linear-gradient(rgb(9, 9, 107),rgb(75, 75, 205))' }}>

<div className="container p-5 mb-4" style={{position:'relative', backgroundColor:'white', borderRadius:'2%'}} id="handleBookCover">
  
  <div className="row p-5 g-3 position-relative">
    <div className="col-lg-6">
      <RadioGroup
      row
      aria-labelledby="demo-row-radio-buttons-group-label"
      name="way-buttons-group"
      value={oneway}
      onChange={(e) => setOneWay(e.target.value)} 
    >
        <FormControlLabel value="oneway" control={<Radio />} label="One Way"/>
        <FormControlLabel value="roundtrip" control={<Radio />} label="Round Trip" />
      </RadioGroup>
    </div>
    </div>

    
    
    <div className="row position-relative">
    <div className="col-lg-3 border p-5" style={{position:'relative', borderRadius:'5%'}}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-helper-label">From<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
            </svg></InputLabel>
  <Select
    name='from'
    {...formik.getFieldProps('from')}
    error = {formik.errors.from && formik.touched.brand ? true:false}
  >
    <MenuItem value="">
      <em>None</em>
    </MenuItem>
    {
        data.map((item, ind) => (
            <MenuItem key={ind} value={item.name}>{item.name.substring(0,14)}...{item.short_name}</MenuItem>
            
        ))
      }
  </Select>
        </FormControl>
        <button onClick={swapLocations} style={{zIndex:2, float:'right', verticalAlign:'middle', position:'absolute', left:'95%', top:'40%'}} type="button" className="btn btn-light rounded-circle shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-arrow-down-up bi-type-bold" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
    </button>
    
      </div>
    <div className="col-lg-3 p-5 border"  style={{borderRadius:'5%'}}>
          <div className="maps">
          

    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id="demo-simple-select-helper-label">To<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
              </svg></InputLabel>
    <Select
      name='to'
      {...formik.getFieldProps('to')}
      error = {formik.errors.to && formik.touched.brand ? true:false}
    >
      <MenuItem value="">
        <em>None</em>

      </MenuItem>
      {
        data.map((item, ind) => (
            <MenuItem  key={ind} value={item.name}>{item.name.substring(0,14)}...{item.short_name}</MenuItem>
            
        ))
      }
    </Select>
          </FormControl>

          </div>
        </div>

      <div className="col-lg-3 p-5 border" style={{borderRadius:'5%', zIndex:2}}>
          <label className="mb-2 text-dark">
          Departure
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" className="bi bi-calendar-week-fill" viewBox="0 0 16 16">
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
            </svg>
          </label>
          <DatePicker 
            minDate={new Date()} 
            selected={formik.values.dep}
            value={formik.values.dep}
            onChange={(date) => dateToggle('dep',date)}
            name='dep' 
            />
        </div>
        
      <div className="col-lg-3 p-5 border" style={{borderRadius:'5%', zIndex:2}}>
        <label className="mb-2 text-dark">
        Return
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="brown" className="bi bi-calendar-week-fill" viewBox="0 0 16 16">
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM9.5 7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm3 0h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM2 10.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </label>
        <DatePicker 
          minDate={new Date()} 
          selected={formik.values.ret}
          value={formik.values.ret}
          onChange={(date) => dateToggle('ret',date)}
          name='ret' 
          disabled={oneway == 'oneway' ? true : false}
          />
      </div>
      
    </div>

    <div className="col-12 text-end pt-0" style={{zIndex:2, top:'95%', right:'45%', position:'absolute', borderRadius:'50%'}}>
      <button type='submit' className="btn btn-primary mb-n4" style={{ backgroundImage: 'linear-gradient(#f67a36,#ed008c)' }}>Find Flights</button>
    </div>
    
</div>

</div>
  </form>



  <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex:'12'}}>
    <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
      <div className="toast-header">
        <strong className="me-auto">Fly High</strong>
        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div className="toast-body">
        Get Your favourite flights
      </div>
    </div>
  </div>

  <div className="container-fluid mt-5 mb-2">

    <div id="demo" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
      </div>

    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={carousel3} className="d-block" style={{width:'100%', height: '100vh',}}/>
        <div className="carousel-caption">
          <h3 className="text-success">EXPLORE GREAT HEIGHTS</h3>
          <p className="text-success">ALONG WITH MELODIOUS MUSIC</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={carousel2} className="d-block" style={{width:'100%', height: '100vh',}}/>
        <div className="carousel-caption">
          <h3>SECURITY</h3>
          <p>LIKE NOWHERE ELSE</p>
        </div> 
      </div>
      <div className="carousel-item">
        <img src={carousel1} className="d-block" style={{width:'100%', height: '100vh',}}/>
        <div className="carousel-caption">
          <h3>IN-FLIGHT ENTERTAINMENT</h3>
          <p>WATCH YOUR FAVOURITE MOVIES AND SHOWS</p>
        </div>  
      </div>
    </div>
    
    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
      <span className="carousel-control-prev-icon"></span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
      <span className="carousel-control-next-icon"></span>
    </button>
  </div>
  </div>

  <div className="container mt-5">
    <h2 className="text-success">Exciting Offers</h2>

    <div className="container-fluid d-flex flex-wrap mt-5">
      
      <div onMouseEnter={() => setIsHovered([true,'1'])} onMouseLeave={()=>setIsHovered([false,''])} className={isHovered[0] && isHovered[1] == '1'? 'card shadow-lg' : 'card'} style={{width:'400px', marginRight: '20px',marginBottom: '1rem',minWidth: '20rem'}} id="offer_cards">
        <img className="card-img-top img-fluid" src={card1} alt="Card image" style={{width:'100%', height: '300px'}}/>
        <div className="card-body">
          <div style={{display: 'flex'}}>
            <h4 className="card-title">ITALY</h4>
          <span style={{"marginLeft":"65%","fontWeight":"bold"}}>4.9<i className="fa-solid fa-star fa-md" style={{color: '#f5f82a'}}></i></span>
          </div>
          
          <p className="card-text">Book Tickets for your dream destination</p>
          <button type="button" className="btn btn-primary position-relative" data-toggle="popover" title="Italy Tickets">
            Book Now
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              15% off
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
      <div onMouseEnter={() => setIsHovered([true,'2'])} onMouseLeave={()=>setIsHovered([false,''])} className={isHovered[0] && isHovered[1] == '2'? 'card shadow-lg' : 'card'} style={{"width":"400px","marginRight":"20px","marginBottom":"1rem","minWidth":"20rem"}} id="offer_cards">
        <img className="card-img-top img-fluid" src={card2} alt="Card image" style={{"width":"100%","height":"300px"}}/>
        <div className="card-body">
          <div style={{"display":"flex"}}>
            <h4 className="card-title">SPAIN</h4>
          <span style={{"marginLeft":"60%","fontWeight":"bold"}}>4.7<i className="fa-solid fa-star fa-md" style={{"color":"#f5f82a"}}></i></span>
          </div>
          
          <p className="card-text">Book Tickets for your dream destination</p>
          
          <button type="button" className="btn btn-primary position-relative" data-toggle="popover" title="Spain Tickets">
            Book Now
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              25% off
            </span>
          </button>

        </div>
      </div>
      <div onMouseEnter={() => setIsHovered([true,'3'])} onMouseLeave={()=>setIsHovered([false,''])} className={isHovered[0] && isHovered[1] == '3'? 'card shadow-lg' : 'card'} style={{"width":"400px","marginRight":"20px","marginBottom":"1rem","minWidth":"20rem"}} id="offer_cards">
        <img className="card-img-top img-fluid card-img-scale-wrapper img-fluid" src={card3} alt="Card image" style={{"width":"100%","height":"300px"}}/>
        <div className="card-body">
          <div style={{"display":"flex"}}>
            <h4 className="card-title">ROME</h4>
          <span style={{"marginLeft":"60%","fontWeight":"bold"}}>4.2<i className="fa-solid fa-star fa-md" style={{"color":"#f5f82a"}}></i></span>
          </div>
          
          <p className="card-text">Book Tickets for your dream destination</p>
          <button type="button" className="btn btn-primary position-relative" data-toggle="popover" title="Rome Tickets">
            Book Now
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              35% off
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </div>
      </div>
      

      

      </div>

      <div className="container-fluid d-flex flex-wrap mt-5">
      
        <div onMouseEnter={() => setIsHovered([true,'4'])} onMouseLeave={()=>setIsHovered([false,'4'])} className={isHovered[0] && isHovered[1] == '4'? 'card shadow-lg' : 'card'}  style={{"width":"400px","marginRight":"20px","minWidth":"20rem","marginBottom":"1rem"}} id="offer_cards">
          <img className="card-img-top img-fluid" src={card4} alt="Card image" style={{"width":"100%","height":"300px"}}/>
          <div className="card-body">
            <div style={{"display":"flex"}}>
              <h4 className="card-title">FRANCE</h4>
            <span style={{"marginLeft":"58%","fontWeight":"bold"}}>4.9<i className="fa-solid fa-star fa-md" style={{"color":"#f5f82a"}}></i></span>
            </div>
            
            <p className="card-text">Book Tickets for your dream destination</p>
            <button type="button" className="btn btn-primary position-relative"  data-toggle="popover" title="France Tickets">
              Book Now
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                15% off
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        <div onMouseEnter={() => setIsHovered([true,'5'])} onMouseLeave={()=>setIsHovered([false,'5'])} className={isHovered[0] && isHovered[1] == '5'? 'card shadow-lg' : 'card'}  style={{"width":"400px","marginRight":"20px","minWidth":"20rem","marginBottom":"1rem"}} id="offer_cards">
          <img className="card-img-top img-fluid" src={card5} alt="Card image" style={{"width":"100%","height":"300px"}}/>
          <div className="card-body">
            <div style={{display: 'flex'}}>
              <h4 className="card-title">ICELAND</h4>
            <span style={{"marginLeft":"55%","fontWeight":"bold"}}>4.7<i className="fa-solid fa-star fa-md" style={{color: '#f5f82a'}}></i></span>
            </div>
            
            <p className="card-text">Book Tickets for your dream destination</p>
            
            <button type="button" className="btn btn-primary position-relative"  data-toggle="popover" title="Iceland Tickets">
              Book Now
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                25% off
              </span>
            </button>
  
          </div>
        </div>
        <div onMouseEnter={() => setIsHovered([true,'6'])} onMouseLeave={()=>setIsHovered([false,'6'])} className={isHovered[0] && isHovered[1] == '6'? 'card shadow-lg' : 'card'}  style={{"width":"400px","marginRight":"20px","minWidth":"20rem","marginBottom":"1rem"}} id="offer_cards">
          <img className="card-img-top img-fluid card-img-scale-wrapper img-fluid" src={card6} alt="Card image" style={{"width":"100%","height":"300px"}}/>
          <div className="card-body">
            <div style={{display: 'flex'}}>
              <h4 className="card-title">THAR</h4>
            <span style={{"marginLeft":"60%","fontWeight":"bold"}}>4.2<i className="fa-solid fa-star fa-md" style={{color: '#f5f82a'}}></i></span>
            </div>
            
            <p className="card-text">Book Tickets for your dream destination</p>
            <button type="button" className="btn btn-primary position-relative"  data-toggle="popover" title="Thar Tickets">
              Book Now
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                35% off
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        
  
        
  
        </div>

    </div>

  <div className="container-fluid mt-5 reviews">
    <div className="row cover-head2">
      <div className="col-md-12">
        Meet Our Customers
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="text-center">
          <img src={person1} className="img-fluid rounded-circle" alt=""/>
          <h2>Daniel Steve</h2>
          
        </div>




        

      </div>
      <div className="col-md-4 wow">
        <div className="text-center">
          <img src={person2} className="img-fluid rounded-circle" alt=""/>
          <h2>Rajan Murthy</h2>
          
        </div>
      </div>
      <div className="col-md-4">
        <div className="text-center">
          <img src={person3} className="img-fluid rounded-circle" alt=""/>
          <h2>Cristina</h2>
          
        </div>
      </div>	
    </div>
  </div>

  <div className="container mt-5 mb-5">
    <h2 className="mt-5 text-danger">Your Travel Guide</h2>

    <div className="accordion accordion-flush shadow-lg">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" id="accordion-head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            How to find the best deals??
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">

            Finding the best flight deals involves a combination of strategies. Start by using flight search engines and aggregators like Google Flights, Skyscanner, or Kayak, which compare fares across multiple airlines. Be flexible with your travel dates and airports, as adjusting your schedule or choosing nearby airports can often lead to substantial savings. Additionally, signing up for fare alerts and newsletters from airlines or deal websites can provide early access to discounts. Utilize loyalty programs and travel rewards credit cards to accumulate points and miles for future trips. Lastly, consider booking flights well in advance or during off-peak travel seasons to secure the most favorable fares.

          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button id="accordion-head" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Some popular Airlines
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            <ol>
              <li>Delta Air Lines</li>
              <li>American Airlines</li>
              <li>United Airlines</li>
              <li>Emirates</li>
              <li>Lufthansa</li>
              <li>Southwest Airlines</li>
              <li>Cathay Pacific</li>
              <li>Air France</li>
              <li>Qatar Airways</li>
              <li>Singapore Airlines</li>
          </ol>
          </div>
      </div>


  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button  id="accordion-head" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        Travel Rules and Guide
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
        <h1>Do's and Don'ts of Flight Travel</h1>
<h2>Do's:</h2>
<ul className="list-group">
    <li className="list-group-item">Arrive Early: Arrive at the airport well in advance to allow time for check-in, security, and unforeseen delays.</li>
    <li className="list-group-item">Travel Light: Pack efficiently and within airline baggage restrictions to avoid excess fees.</li>
    <li className="list-group-item">Bring Essentials: Carry important documents, medications, and personal items in your carry-on bag.</li>
    <li className="list-group-item">Stay Hydrated: Drink water to combat the dehydrating effects of air travel.</li>
    <li className="list-group-item">Respect Personal Space: Be considerate of fellow passengers and maintain appropriate space.</li>
    <li className="list-group-item">Follow Crew Instructions: Cooperate with flight attendants and adhere to safety guidelines.</li>
    <li className="list-group-item">Entertain Quietly: Use headphones when watching or listening to entertainment.</li>
    <li className="list-group-item">Mind Your Manners: Maintain courtesy and politeness in interactions with airline staff and other travelers.</li>
</ul>
<h2>Don'ts:</h2>
<ul className="list-group">
    <li className="list-group-item">Don't Arrive Late: Avoid arriving at the airport last minute to prevent missed flights.</li>
    <li className="list-group-item">Don't Overpack: Don't exceed baggage limits to dodge additional charges.</li>
    <li className="list-group-item">Don't Forget ID: Leave home without proper identification; it's vital for check-in and security.</li>
    <li className="list-group-item">Don't Overindulge: Refrain from excessive alcohol or overeating during the flight.</li>
    <li className="list-group-item">Don't Recline Abruptly: Gradually recline your seat to avoid disturbing the passenger behind you.</li>
    <li className="list-group-item">Don't Disobey Crew: Don't argue with flight attendants or ignore safety instructions.</li>
    <li className="list-group-item">Don't Be Disruptive: Avoid loud or disruptive behavior that can disturb fellow passengers.</li>
    <li className="list-group-item">Don't Rush the Aisle: Wait your turn when disembarking to ensure an orderly exit.</li>
</ul>
      </div>
  </div>
</div>
</div>
</div>
        </div>
    )
    
}

export default FlightDashBoard