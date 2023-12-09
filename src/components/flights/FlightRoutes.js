import {Routes, Route, BrowserRouter} from 'react-router-dom';
import FlightDashBoard from './FlightDashboard';

const FlightRoutes = () => {
    
        return(
        <Route path = '/flights' element = {<FlightDashBoard/>}/>
    
        )

}

export default FlightRoutes