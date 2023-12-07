import React, { useState } from 'react';
import './../hotel/hotel.css';
import './../../App.css';
const AddNewHotel = () => {
    const initialHotelState = {
        name: '',
        availability: true,
        schedule: new Date().toISOString(),
        rooms: [
          {
            roomType: '',
            roomNumber: '',
            hourlyAvailability: Array.from({ length: 24 }, (_, hour) => ({ hour, available: true })),
            hourlyRate: 0,
          },
        ],
        type: '',
        active: true,
        address: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        phone: '',
        fax: '',
        tollFree: '',
        email: '',
        website: '',
        latitude: '',
        longitude: '',
        rating: 0,
        reviews: [
          {
            user: '',
            rating: 0,
            comment: '',
          },
        ],
        amenities: '',
        description: '',
        photos: [''],
        bookings: [
          {
            user: '',
            room: '',
            checkIn: new Date().toISOString(),
            checkOut: new Date().toISOString(),
          },
        ],
        policies: '',
        cancellation: '',
        roomService: '',
        parking: '',
        internet: '',
        pets: '',
        kids: '',
        languages: '',
        other: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
    
      const [hotel, setHotel] = useState(initialHotelState);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setHotel({ ...hotel, [name]: value });
      };
    
      const handleRoomChange = (e, index) => {
        const { name, value } = e.target;
        const updatedRooms = [...hotel.rooms];
        updatedRooms[index][name] = value;
        setHotel({ ...hotel, rooms: updatedRooms });
      };
    
      const handleHourlyAvailabilityChange = (index, hour) => {
        const updatedRooms = [...hotel.rooms];
        const hourIndex = updatedRooms[index].hourlyAvailability.findIndex(slot => slot.hour === hour);
        updatedRooms[index].hourlyAvailability[hourIndex].available = !updatedRooms[index].hourlyAvailability[hourIndex].available;
        setHotel({ ...hotel, rooms: updatedRooms });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Hotel Data:', hotel);
        // Add logic to send the data to your server
        fetch('YOUR_API_ENDPOINT', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(hotel),
          })
            .then(response => response.json())
            .then(data => {
              console.log('Hotel added successfully:', data);
              // Optionally, reset the form or perform other actions after successful submission
              setHotel(initialHotelState);
            })
            .catch(error => console.error('Error adding hotel:', error));
      };

      const loadDummyData = () => {
        // Logic to generate and set dummy data
        const dummyHotelData = {
          name: 'Dummy Hotel',
          availability: true,
          schedule: new Date().toISOString(),
          rooms: [
            {
              roomType: 'Single',
              roomNumber: '101',
              hourlyAvailability: Array.from({ length: 24 }, (_, hour) => ({ hour, available: true })),
              hourlyRate: 100,
            },
          ],
          type: 'Hotel',
          active: true,
          // ... other dummy data
        };
        setHotel(dummyHotelData);
      };
    
      return (
        <>
        <div className='black full_container'>
            <div>
            <h1>Add new Hotel</h1>
            <button className='btn' style={{marginLeft:'auto', marginRight:'10px',float:'right'}} onClick={loadDummyData}>Load Dummy Data</button>
            </div>
        <form style={{marginTop:'50px'}} className='flex flex-wrap flex-start' onSubmit={handleSubmit}>
          <label>
            Hotel Name:
            <input type="text" name="name" value={hotel.name} onChange={handleChange} required maxLength={255} />
          </label>
          {/* Add other input fields for the hotel model */}
          <label>
            Room Number:
            <input type="text" name="roomNumber" value={hotel.rooms[0].roomNumber} onChange={(e) => handleRoomChange(e, 0)} required maxLength={255} />
            </label>
            <label>
            Hourly Rate:
            <input type="text" name="hourlyRate" value={hotel.rooms[0].hourlyRate} onChange={(e) => handleRoomChange(e, 0)} required maxLength={255} />
            </label>
            <label>
            Room Type:
            <input type="text" name="roomType" value={hotel.rooms[0].roomType} onChange={(e) => handleRoomChange(e, 0)} required maxLength={255} />
            </label>
            <label>
                Type:
                <select name="type" value={hotel.type} onChange={handleChange} required>
                    <option value="">Select a type</option>
                    <option value="hotel">Hotel</option>
                    <option value="motel">Motel</option>
                    <option value="resort">Resort</option>
                    <option value="guest-house">Guest House</option>
                    <option value="apartment">Apartment</option>
                    <option value="bed-and-breakfast">Bed and Breakfast</option>
                    <option value="hostel">Hostel</option>
                    <option value="inn">Inn</option>
                    <option value="holiday-home">Holiday Home</option>
                    <option value="homestay">Homestay</option>
                    <option value="country-house">Country House</option>
                </select>
            </label>
           
            <label>
                Address:
                <input type="text" name="address" value={hotel.address} onChange={handleChange} required maxLength={255} />

            </label>
            <label>
                City:
                <input type="text" name="city" value={hotel.city} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                State:
                <input type="text" name="state" value={hotel.state} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Country:
                <input type="text" name="country" value={hotel.country} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Zip:
                <input type="text" name="zip" value={hotel.zip} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" value={hotel.phone} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Fax:
                <input type="text" name="fax" value={hotel.fax} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Toll Free:
                <input type="text" name="tollFree" value={hotel.tollFree} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={hotel.email} onChange={handleChange} required maxLength={255} />
            </label>    
            <label>
                Website:
                <input type="text" name="website" value={hotel.website} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Latitude:
                <input type="text" name="latitude" value={hotel.latitude} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Longitude:
                <input type="text" name="longitude" value={hotel.longitude} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Rating:
                <input type="text" name="rating" value={hotel.rating} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Amenities:
                <input type="text" name="amenities" value={hotel.amenities} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Description:
                <input type="text" name="description" value={hotel.description} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Photos:
                <input type="text" name="photos" value={hotel.photos} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Policies:
                <input type="text" name="policies" value={hotel.policies} onChange={handleChange} required maxLength={255} />

            </label>
            <label>
                Cancellation:
                <input type="text" name="cancellation" value={hotel.cancellation} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Room Service:
                <input type="text" name="roomService" value={hotel.roomService} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Parking:
                <input type="text" name="parking" value={hotel.parking} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Internet:
                <input type="text" name="internet" value={hotel.internet} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Pets:
                <input type="text" name="pets" value={hotel.pets} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Kids:
                <input type="text" name="kids" value={hotel.kids} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Languages:
                <input type="text" name="languages" value={hotel.languages} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Other:
                <input type="text" name="other" value={hotel.other} onChange={handleChange} required maxLength={255} />
            </label>
            {/* <label>
                Created At:
                <input type="text" name="createdAt" value={hotel.createdAt} onChange={handleChange} required maxLength={255} />
            </label>
            <label>
                Updated At:
                <input type="text" name="updatedAt" value={hotel.updatedAt} onChange={handleChange} required maxLength={255} />
            </label> */}



        
          <label>
            Room Type:
            <input type="text" name="roomType" value={hotel.rooms[0].roomType} onChange={(e) => handleRoomChange(e, 0)} required maxLength={255} />
          </label>
        
          <div style={{marginBottom:'30px'}}>
            Hourly Availability:
            {hotel.rooms[0].hourlyAvailability.map((slot) => (
              <label key={slot.hour}>
                {slot.hour}:00 - {slot.hour + 1}:00
                <input
                  type="checkbox"
                  checked={slot.available}
                  onChange={() => handleHourlyAvailabilityChange(0, slot.hour)}
                />
              </label>
            ))}
          </div>
          <label>
                Active:
                <input type="checkbox" name="active" checked={hotel.active} onChange={handleChange} />
            </label>
          {/* ... Add other input fields for the hotel model */}
          <button className='btn' style={{display:'block'}} type="submit">Add Hotel</button>
        </form>
        </div>
        </>
      );
}

export default AddNewHotel