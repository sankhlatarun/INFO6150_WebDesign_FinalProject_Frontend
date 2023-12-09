import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProgressBar from 'react-bootstrap/ProgressBar';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import '../../assets/flights.css';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import airline1 from '../../assets/flightImages/vistara.png';
import { Link, useLocation } from 'react-router-dom';
import FlightCard from './flightCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/flights.css';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const SearchFlights = () => {
  const val = useQuery();

  const [flightData, setFlightData] = React.useState([]);

  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState(Number.MAX_SAFE_INTEGER);

  const [flights, setFlights] = useState([]);

  const [filters, setFliters] = useState([]);

  const [priceRange, setPriceRange] = useState();

  const [defaultVal, setDefaultVal] = useState([]);

  const [keyword, setKeyword] = useState();

  const marks = [
    {
      value: minPrice,
      label: minPrice,
    },
    {
      value: maxPrice,
      label: maxPrice,
    }
  ];

  // console.log(val.get('id'));
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  useEffect(() => {

    toast.success("Welcome to Flight Search !");
    if(flightData.length == 0){
      const from = val.get('from');
    const to = val.get('to');
    const dep = val.get('dep');
    const date = new Date(dep).toISOString();
    console.log("dep: " + date);

    fetch(`https://dream-travels.onrender.com/flights/flights/getFlightsByDetails/${from}/${to}/${date}}`, 
    {method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }})
    .then(res => res.json())
    .then(data => {
      console.log(data);
      var fromPickup2 = [];
      var toDest2 = [];
      data.map((item, ind)=>{
        if(item.boarding === val.get('from')){
          fromPickup2.push(item);
        }
        else if(item.destination === val.get('to')){
          toDest2.push(item);
        }
      })

      let Flightpackage = [];
      let flights = [];
      let min = Number.MAX_SAFE_INTEGER;
      let max = Number.MIN_SAFE_INTEGER;
      fromPickup2.forEach((item1, ind1)=>{
        toDest2.forEach((item2, ind2)=>{
          Flightpackage = [];
          if(item1._id != item2._id && item1.destination === item2.boarding && new Date(item1.arrival) < new Date(item2.departure)){
            Flightpackage.push(item1);
            Flightpackage.push(item2);
            flights.push(Flightpackage);

            if((item1.price+item2.price) < min) min = (item1.price+item2.price);
            if((item1.price+item2.price) > max) max = (item1.price+item2.price);

        }
        else {
          if(item1.destination == to && item1.boarding == from){
            Flightpackage.push(item1);
            flights.push(Flightpackage);
            
            if(item1.price < min) min = item1.price; 
            if(item1.price > max) max = item1.price;           
          }
          if(item2.destination == to && item2.boarding == from){
            Flightpackage.push(item2);
            flights.push(Flightpackage);
            if(item2.price < min) min = item2.price;
            if(item2.price > max) max = item2.price;
          }
        }
      })
    })
    setFlights(flights);
    setMaxPrice(max);
    setMinPrice(min);
    })
    .catch(err => console.log(err));
    }
  },[]);

  const handleSlideChange = (e,value) => {
    setPriceRange(value);
  }

  const formik = useFormik({
    initialValues:{keywords:''}
})


  const handleBoxes = (item) => {

    const currInd = filters.indexOf(item);

        const newArr = [...filters];

        if(currInd === -1){
                newArr.push(item);
        }else{
            newArr.splice(currInd, 1)
        }

        setFliters(newArr);
  }

  const resetForm = () => {

    setFlights([...defaultVal])
  }

  const applyFilters = () => {

    const arr = [];
    if(defaultVal.length == 0) setDefaultVal([...flights]);
    flights.forEach((item) => {

      if(filters.indexOf(6) !== -1 && item.length == 1) {arr.push(item)}

      else if(filters.indexOf(1) !==-1 && item[0].departure.substring(11,13) <12) {arr.push(item)}

      else if(filters.indexOf(2) !==-1 && parseInt(item[0].departure.substring(11,13)) > 21) {arr.push(item) }

      else if(filters.indexOf(3) !==-1 && item[0].seats.economy >= 1) {arr.push(item)}

      else if(filters.indexOf(4) !==-1 && item[0].seats.business >= 1) {arr.push(item)}

      else if(filters.indexOf(5) !==-1 && item[0].seats.first >= 1) {arr.push(item)}

      else if(priceRange > minPrice && item.length>1 && (item[0].price+item[1].price) <= priceRange) {arr.push(item)}

      else if(priceRange > minPrice && item.length == 1 && (item[0].price) <= priceRange) {arr.push(item)}

      else if(item[0].airline.includes(keyword)) {arr.push(item)}
    })

    setFlights(arr);
  }

  const notify = () => toast.error("This is a toast notification !");

    return(
      
        
        <div>

          
          <div className="container mt-5" style={{marginTop:'50%'}}>
          <div>
          
          </div>
          {console.log("from pickup: " + JSON.stringify(flights))}
          <div className="row" style={{height:'3rem'}}></div>

        <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-5" >
            <Box
            component="form"
            noValidate
            autoComplete="off"
            >
            <TextField onChange={(val) => setKeyword(val)} style={{width:'100%', height:'10%'}} id="outlined-basic" label="Airline" variant="outlined" {...formik.getFieldProps('keywords')} />
            </Box>
            </div>
            <div className="col-md-1"><Button variant="contained" onClick={applyFilters}>Search</Button></div>
            <div className="col-md-1"><Button variant='contained' color='success'><Link style={{textDecoration:'none', color:'white'}} to = '/flight/bookings'>Bookings</Link></Button></div>
        </div>

        <div className="row mt-3">
            <div className="col-md-4">
            <Card>
      <CardContent>
        <h6>Popular Filters</h6>
        <div><Checkbox  onChange={() => handleBoxes(6)}/> Non Stop</div>
        <div><Checkbox onChange={() => handleBoxes(1)} checked = { filters.indexOf(1) !== -1}/> Morning Departures</div>
        <div><Checkbox onChange={() => handleBoxes(2)} checked = { filters.indexOf(2) !== -1}/> Late Departures</div>
        <div>
        <b>Price Range</b>
      <Box sx={{ width: 300 }}>
      <Slider onChange={handleSlideChange} value={priceRange} min={minPrice} max={maxPrice} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" marks={marks} />
    </Box>
        </div>
      <h6>Class:</h6>
      <div><Checkbox onChange={() => handleBoxes(3)} checked = { filters.indexOf(3) !== -1}/> Economy</div>
      <div><Checkbox onChange={() => handleBoxes(4)} checked = { filters.indexOf(4) !== -1}/> Business</div>
      <div><Checkbox onChange={() => handleBoxes(5)} checked = { filters.indexOf(5) !== -1}/> First</div>
      <div></div>
      <div className="col-md-2"><Button variant="contained" onClick={resetForm}>Reset</Button></div>

      </CardContent>
            </Card>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-7">
            
            <FlightCard flights={flights} />
            
            </div>
        </div>
        </div>
        <ToastContainer position="bottom-left" />
        </div>
    )
}

export default SearchFlights    