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

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import airline1 from '../../assets/flightImages/vistara.png';
import emirates from '../../assets/flightImages/emirates.png';
import qatar from '../../assets/flightImages/qatar.png';
import AirIndia from '../../assets/flightImages/AirIndia.png';
import vistara from '../../assets/flightImages/vistara.png';
import { useLocation, useNavigate } from 'react-router-dom';
import BookFlight from './BookFlightModal';

const FlightCard = ({ flights }) => {

    const [showModal, setShowModal] = useState(false);
    const [item, setItem] = useState();

    const handleModal = (item) => {
        console.log("triggered");
        setShowModal(false);
        setItem(item);
        setShowModal(true);

    }

    return(

        <>
            {showModal ? <BookFlight item = {item}/> : null}

{
    flights.map((item, ind)=>(

        <Card style={{ maxWidth:'70%', marginBottom:'4%', padding:'auto'}} className='p-2 shadow-md'>
        
        <div className="row">
        <div className="col-md-2"><img src={item[0].airline == 'vistara' ? vistara : item[0].airline == 'qatar' ? qatar : item[0].airline == "emirates" ? emirates : AirIndia} alt="" width='90%' height='90%' /></div>
        <div className="col-md-6">{item[0].airline}</div>
        </div>
        <CardContent>
    
        <div className="row">
        <div className="col-md-3">
        <div>
            <div>{item[0].departure.substring(8,10)}/{item[0].departure.substring(5,7)}/{item[0].departure.substring(2,4)}</div>
            {item[0].departure.substring(11,16)}
            </div>
            <div>
            {item[0].boarding}
            </div>
    
        </div>
        <div className="col-md-3">
        <div style={{lineHeight:0, marginTop:'7%'}}>
            {
                Math.floor(Math.abs(new Date(item[0].departure) - new Date(item[0].arrival)) / (1000 * 60 * 60 * 24))
            }
            d:
            {
                Math.floor((Math.abs(new Date(item[0].departure) - new Date(item[0].arrival)) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            }
            hrs
        {console.log(new Date(item[0].departure) - new Date(item[0].arrival))}
        </div>
        <div style={{lineHeight:0, marginTop:'7%'}}><hr className="progress_bar"/></div>
        <div style={{lineHeight:0, marginTop:'7%'}}>{item.length == 1 ? "Direct" : "Direct"}</div>
        </div>
        <div className="col-md-3">
        <div>{item[0].arrival.substring(8,10)}/{item[0].arrival.substring(5,7)}/{item[0].arrival.substring(2,4)}</div>
            <div>{item[0].arrival.substring(11,16)}</div>
            <div>{item[0].destination}</div>
        </div>
        <div className="col-md-1">
        <div></div>
        <div>
        </div>
        <div></div>
        </div>
        <div className="col md-2" style={{marginTop:'5%'}}>
            {item.length == 1 ? "$"+item[0].price:null}
        </div>
        <hr />
        <div className="row">
                <div className="col-md-12">
                <div style={{fontStyle:'italic'}}>1. Cabin: {item[0].free_luggage.cabin_bags} bags & Weight: {item[0].free_luggage.cabin_weight}kg <br /> 2. CheckIn:  {item[0].free_luggage.checkin_bags} bags & Weight: {item[0].free_luggage.checkin_weight}kg </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <b>E: </b>{item[0].seats.economy} <b> B: </b>{item[0].seats.business} <b> F: </b>{item[0].seats.first} seats remaining
                </div>
            </div>
        </div>
    
        </CardContent>
    
        
        {
            item.length > 1 ? 
            
            <div className="row" style={{position:'relative'}}>
    
            <div className="col-md-10"><hr/></div>
            <div className="col-md-2">
               ${item[0].price + item[1].price}
             
            </div>

            
    
            </div>

            
            
            : null
        }
        
    
        {
        item.length > 1 ? 
            <>
            
                    <div className="row">
                    <div className="col-md-2"><img src={item[1].airline == 'vistara' ? vistara : item[1].airline == 'qatar' ? qatar : item[1].airline == "emirates" ? emirates : AirIndia} alt="" width='90%' height='90%' /></div>
        <div className="col-md-6">{item[1].airline}</div>
            </div>
            <CardContent>
    
            <div className="row">
            <div className="col-md-3">
            <div>
            <div>{item[0].departure.substring(8,10)}/{item[0].departure.substring(5,7)}/{item[0].departure.substring(2,4)}</div>
            
            {item[1].departure.substring(11,16)}
                </div>
                <div>
                {item[1].boarding}
                </div>
    
            </div>
            <div className="col-md-3">
            <div style={{lineHeight:0, marginTop:'7%'}}>
                {
                    Math.floor(Math.abs(new Date(item[1].departure) - new Date(item[1].arrival)) / (1000 * 60 * 60 * 24))
                }
                d:
                {
                    Math.floor((Math.abs(new Date(item[1].departure) - new Date(item[1].arrival)) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                }
                hrs
            </div>
            <div style={{lineHeight:0, marginTop:'7%'}}><hr className="progress_bar"/></div>
            <div style={{lineHeight:0, marginTop:'7%'}}>Direct</div>
            </div>
            <div className="col-md-3">
            <div>{item[1].arrival.substring(8,10)}/{item[1].arrival.substring(5,7)}/{item[1].arrival.substring(2,4)}</div>
            
                <div>{item[1].arrival.substring(11,16)}</div>
                <div>{item[1].destination}</div>
            </div>
            <div className="col-md-1">
            <div></div>
            <div>
            </div>
            <div></div>
            </div>
            <div className="col md-2" style={{marginTop:'1%'}}>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <div>Free Baggage: a. Cabin:  {item[1].free_luggage.cabin_bags} bags, weight: {item[1].free_luggage.cabin_weight}kg  a. CheckIn:  {item[1].free_luggage.checkin_bags} bags, weight: {item[1].free_luggage.checkin_weight}kg </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <b>E: </b>{item[1].seats.economy} <b> B: </b>{item[1].seats.business} <b> F: </b>{item[1].seats.first} seats remaining
                </div>
            </div>
            </div>
    
            </CardContent>
            
            </>
            :null
        }
        <CardActions>
            <Button variant='contained' color='success' onClick={()=>handleModal(item)}>Book</Button>

            </CardActions>
    
        </Card>
       
    ))
}
        </>


    )

};

export default FlightCard;