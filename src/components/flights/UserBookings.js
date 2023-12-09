import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader } from "@mui/material";
import airline1 from '../../assets/flightImages/vistara.png';
import emirates from '../../assets/flightImages/emirates.png';
import qatar from '../../assets/flightImages/qatar.png';
import AirIndia from '../../assets/flightImages/AirIndia.png';
import vistara from '../../assets/flightImages/vistara.png';
import { useDispatch, useSelector } from "react-redux";

const UserBookings = () => {

    const [bookings, setBookings] = useState([]);
    const [flights, setFlight] = useState([]);
    const userid = useSelector((state) => state.auth.data.userid);

    useEffect(() => {

        fetch("https://dream-travels.onrender.com/flights/bookings/getAirlines",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setBookings(data);
            
        })
        .catch((error) => {
            console.log(error);
        });
    },[]);


  return (
    <div className="container mt-5">
         <div style={{textAlign:'center'}}><h2>Flight Bookings</h2></div>
    
    {
        bookings.map((item, ind)=>(

          


            <>

           
        

            <Card style={{ maxWidth:'50%', marginBottom:'4%', padding:'auto', marginLeft:'20%'}} className='p-2 shadow-lg'>
            <Card style={{ maxWidth:'70%', marginBottom:'4%', padding:'auto'}} className='p-2'>
        
        <div className="row">
        <div className="col-md-2"><img src={item.flights[0].airline == 'vistara' ? vistara : item.flights[0].airline == 'qatar' ? qatar : item.flights[0].airline == "emirates" ? emirates : AirIndia} alt="" width='90%' height='90%' /></div>
        <div className="col-md-6">{item.flights[0].airline}</div>
        </div>
        <CardContent>
    
        <div className="row">
        <div className="col-md-3">
        <div>
            <div>{item.flights[0].departure.substring(8,10)}/{item.flights[0].departure.substring(5,7)}/{item.flights[0].departure.substring(2,4)}</div>
            {item.flights[0].departure.substring(11,16)}
            </div>
            <div>
            {item.flights[0].boarding}
            </div>
    
        </div>
        <div className="col-md-3">
        <div style={{lineHeight:0, marginTop:'7%'}}>
            {
                Math.floor(Math.abs(new Date(item.flights[0].departure) - new Date(item.flights[0].arrival)) / (1000 * 60 * 60 * 24))
            }
            d:
            {
                Math.floor((Math.abs(new Date(item.flights[0].departure) - new Date(item.flights[0].arrival)) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            }
            hrs
        {console.log(new Date(item.flights[0].departure) - new Date(item.flights[0].arrival))}
        </div>
        <div style={{lineHeight:0, marginTop:'7%'}}><hr className="progress_bar"/></div>
        <div style={{lineHeight:0, marginTop:'7%'}}>{item.flights.length == 1 ? "Direct" : "Direct"}</div>
        </div>
        <div className="col-md-3">
        <div>{item.flights[0].arrival.substring(8,10)}/{item.flights[0].arrival.substring(5,7)}/{item.flights[0].arrival.substring(2,4)}</div>
            <div>{item.flights[0].arrival.substring(11,16)}</div>
            <div>{item.flights[0].destination}</div>
        </div>
        <div className="col-md-1">
        <div></div>
        <div>
        </div>
        <div></div>
        </div>
        <div className="col md-2" style={{marginTop:'5%'}}>
            
        </div>
        <hr />
        </div>
    
        </CardContent>
    
        
        {
            item.flights.length > 1 ? 
            
            <div className="row" style={{position:'relative'}}>
    
            <div className="col-md-10"><hr/></div>
            <div className="col-md-2">
               
             
            </div>

            
    
            </div>

            
            
            : null
        }
        
    
        {
        item.flights.length > 1 ? 
            <>
            
                    <div className="row">
        <div className="col-md-2"><img src={item.flights[1].airline == 'vistara' ? vistara : item.flights[1].airline == 'qatar' ? qatar : item.flights[1].airline == "emirates" ? emirates : AirIndia} alt="" width='90%' height='90%' /></div>
        <div className="col-md-6">{item.flights[1].airline}</div>
            </div>
            <CardContent>
    
            <div className="row">
            <div className="col-md-3">
            <div>
            <div>{item.flights[0].departure.substring(8,10)}/{item.flights[0].departure.substring(5,7)}/{item.flights[0].departure.substring(2,4)}</div>
            
            {item.flights[1].departure.substring(11,16)}
                </div>
                <div>
                {item.flights[1].boarding}
                </div>
    
            </div>
            <div className="col-md-3">
            <div style={{lineHeight:0, marginTop:'7%'}}>
                {
                    Math.floor(Math.abs(new Date(item.flights[1].departure) - new Date(item.flights[1].arrival)) / (1000 * 60 * 60 * 24))
                }
                d:
                {
                    Math.floor((Math.abs(new Date(item.flights[1].departure) - new Date(item.flights[1].arrival)) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                }
                hrs
            </div>
            <div style={{lineHeight:0, marginTop:'7%'}}><hr className="progress_bar"/></div>
            <div style={{lineHeight:0, marginTop:'7%'}}>Direct</div>
            </div>
            <div className="col-md-3">
            <div>{item.flights[1].arrival.substring(8,10)}/{item.flights[1].arrival.substring(5,7)}/{item.flights[1].arrival.substring(2,4)}</div>
            
                <div>{item.flights[1].arrival.substring(11,16)}</div>
                <div>{item.flights[1].destination}</div>
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
            </div>
    
            </CardContent>
            
            </>
            :null
        }
        
    
        </Card>
                <div>{item.airline}</div>
        <CardContent>

            <b>Passengers</b><br />

            {item.passengers.map((item1, ind1)=>(
                <div className="row">
                    <div className="col-md-4"><b>Name: </b>{item1.name}</div>
                    <div className="col-md-4"><b>Age: </b>{item1.age}</div>
                    <div className="col-md-4"><b>Class: </b>{item1.class == 'e' ? "Economy" : item1.class == 'b' ? "Business": "First"}</div>
                </div>
            ))}

            <hr />

            <div className="row">
            <div className="col-md-6"><b>Date of Journey: </b> {item.departure.split('T')[0]}</div>
            <div className="col-md-6"><b>Time of Journey: </b> {item.departure.split('T')[1].substring(0,8)}</div>
            
            </div>

            <div className="row">
            <div className="col-md-6"><b>Date of Arrival: </b> {item.arrival.split('T')[0]}</div>
            <div className="col-md-6"><b>Time of Arrival: </b> {item.arrival.split('T')[1].substring(0,8)}</div>
            </div>

            <div className="row">
            <div className="col-md-6"><b>From: </b> {item.boarding}</div>
            <div className="col-md-6"><b>To: </b>{item.destination}</div>
            </div>
            <div><b>Price: </b>{item.price}</div>

            <div className="row">
                <div className="col-md-6">
                    <div><b>Cabin: </b></div>
                    <div><b>Bags: </b>{item.luggage.cabin_bags}</div>
                    <div><b>Weight: </b>{item.luggage.cabin_weight}</div>
                </div>
                <div className="col-md-6">
                    <div><b>CheckIn: </b></div>
                    <div><b>Bags: </b>{item.luggage.checkin_bags}</div>
                    <div><b>Weight: </b>{item.luggage.checkin_weight}</div>
                </div>
            </div>
            

        </CardContent>
            </Card>

            </>
        ))

    }

  </div>
  )
};  

export default UserBookings;