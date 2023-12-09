import React, {useState} from "react";
import { useFormik } from "formik";
import { errHelper, showToast } from "../utils/tools"; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import airline1 from '../../assets/flightImages/vistara.png';
import emirates from '../../assets/flightImages/emirates.png';
import qatar from '../../assets/flightImages/qatar.png';
import AirIndia from '../../assets/flightImages/AirIndia.png';
import vistara from '../../assets/flightImages/vistara.png';
import { ToastContainer, toast } from "react-toastify";
import {
    TextField,  
    Button,
    Divider,
    Select,
    MenuItem,
    FormControl,
    FormHelperText,
    FormGroup


} from '@mui/material';

const Bookings = ({item}) => {

    

    const [passengerCount, setPassengerCount] = useState([1]);

    const [price, setPrice] = useState(0);

    const [initialValues, setInitialValues] = useState({});

    const handleSubmit = async(values) => {
        
        console.log(values);

        var passengers = [];
        var amount = 0, e1 = 0, b1 = 0, f1 = 0, e2 = 0, b2 = 0, f2 = 0;

        for(var i=0; i<passengerCount.length; i++){
            passengers.push({
                name: values[`pname${i}`],
                age: values[`page${i}`],
                class: values[`class${i}`]
            });

            if(values[`class${i}`] == 'e')
            {
                amount += item[0].seat_price.economy;
                e1++;
                e2++;
            }
            else if(values[`class${i}`] == 'b')
            {
                amount += item[0].seat_price.business;
                b1++;
                b2++;
            }
            else if(values[`class${i}`] == 'f')
            {
                amount += item[0].seat_price.first;
                f1++;
                f2++;
            }
        }

        amount += values.bags * item[0].free_luggage.price_checkin;

        const requestBody = {
            userId:"6567f34f652bfead3d3dd41c",

            bookingDate: item[0].departure,

            amount:amount,

            boarding: item[0].boarding,
            destination: item[0].destination,
            departure: item[0].departure,
            arrival: item[0].arrival,

            flights: item,

            passengers:passengers,

            luggage:{
                cabin_weight:7,
                cabin_bags: 1,
                checkin_weight:46,
                checkin_bags: item[0].free_luggage.checkin_bags + values.bags
            }
        }

        try{
            const booking = await fetch('http://localhost:3001/flights/bookings/flightBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(requestBody),
        });

        const update1 = await fetch(`http://localhost:3001/flights/flights/updateFlight/${item[0]._id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                ...item[0],
                seats:{
                    economy: item[0].seats.economy - e1,
                    business: item[0].seats.business - b1,
                    first: item[0].seats.first - f1
                
            }})
        });

        console.log(update1)

        

        const update2 = item.length>1 ? await fetch(`http://localhost:3001/flights/flights/updateFlight/${item[1]._id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                ...item[1],
                seats:{
                    economy: item[1].seats.economy - e2,
                    business: item[1].seats.business - b2,
                    first: item[1].seats.first - f2
                
            }})
        }) : 0;

        console.log(update2)
        toast.success('Booking Successful')
        
        }catch(err){
            console.log(err);
            toast.error('Booking Failed');
        }


    }

    const increasePassenger = () => {
        setPassengerCount(prev=>[...prev,1]);
        initialValues[`pname${passengerCount.length}`] = '';
        initialValues[`page${passengerCount.length}`] = '';
        initialValues[`class${passengerCount.length}`] = '';


    }

    const formik = useFormik({
        initialValues : initialValues,
        onSubmit:(values) => {
            handleSubmit(values);
        }

    });

    return(
        
        <>
        <ToastContainer position="bottom-left" />

        <Card style={{ maxWidth:'70%', marginBottom:'4%', padding:'auto'}} className='p-2'>
        
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
        <div style={{lineHeight:0, marginTop:'7%'}}>{item.length == 1 ? "Direct" : "Connecting"}</div>
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
            
        </div>
        <hr />
        <div className="row">
                <div className="col-md-12">
                <div style={{fontStyle:'italic'}}>1. Cabin: {item[0].free_luggage.cabin_bags} bags & Weight: {item[0].free_luggage.cabin_weight}kg <br /> 2. CheckIn:  {item[0].free_luggage.checkin_bags} bags & Weight: {item[0].free_luggage.checkin_weight}kg </div>
                </div>
            </div>
        </div>
    
        </CardContent>
    
        
        {
            item.length > 1 ? 
            
            <div className="row" style={{position:'relative'}}>
    
            <div className="col-md-10"><hr/></div>
            <div className="col-md-2">
               
             
            </div>

            
    
            </div>

            
            
            : null
        }
        
    
        {
        item.length > 1 ? 
            <>
            
                    <div className="row">
            <div className="col-md-2"><img src={airline1} alt="" width='90%' height='90%' /></div>
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
            </div>
    
            </CardContent>
            </>
            :null
        }
    
        </Card>
        
        <form className="mt-3 article_form" onSubmit={formik.handleSubmit}>
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <Button style={{marginBottom:'10px'}} variant="outlined" color="success" onClick={() => increasePassenger()}>Add Passenger</Button>
                                
                                {
                                    passengerCount.map((item, ind)=>(
                                        
                                        <>
                                        
                                        <TextField
                                    style={{width:'100%', marginBottom:'10px'}}
                                    name = {`pname${ind}`}
                                    label = {`Passenger ${ind+1} Name`}
                                    variant="outlined"
                                    {...formik.getFieldProps('pname' + ind)}
                                    {...errHelper(formik, 'pname' + ind)}
                                
                                />

                                    <TextField
                                        style={{width:'100%', marginBottom:'10px'}}
                                        name = {`page${ind}`}
                                        label = {`Passenger ${ind+1} Age`}
                                        variant="outlined"
                                        type="number"
                                        {...formik.getFieldProps('page' + ind)}
                                        {...errHelper(formik, 'page' + ind)}
                                    
                                    />

                                    <FormGroup>
                                    <Select
                                        name= {`class${ind}`}
                                        label="Class"
                                        style={{width:'100%',  marginBottom:'30px'}}
                                        {...formik.getFieldProps('class' + ind)}
                                        error = {formik.errors['class' + ind] && formik.touched['class' + ind] ? true:false}
                                        
                                    >
                                        <MenuItem value ="e"><em>Economy</em></MenuItem>
                                        <MenuItem value ="b"><em>Business</em></MenuItem>
                                        <MenuItem value ="f"><em>First</em></MenuItem>
                                        

                                    </Select>
                                    </FormGroup>

                                    

                                    

                                    <Divider className="mt-3 mb-3"/>
                                        
                                        </>

                                    ))
                                }

                                <div className="form-group">
                                <TextField
                                        style={{width:'100%', marginBottom:'10px'}}
                                        name = {`bags`}
                                        label = {`Add baggage(Price per bag: ${item[0].free_luggage.price_checkin})`}
                                        variant="outlined"
                                        type="number"
                                        {...formik.getFieldProps('bags')}
                                        {...errHelper(formik, 'bags')}
                                    
                                    />
                                </div>


                            </div>

                            

                                


                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                               Book This Flight
                            </Button>

                        </form>
        
        </>

    )

}

export default Bookings;