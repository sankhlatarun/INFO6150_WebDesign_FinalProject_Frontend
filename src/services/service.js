import { loadStripe } from "@stripe/stripe-js";

function getServicesForStripePayment(amount) {
  const stripePromise = loadStripe(
    "pk_test_51OK217Eub5KRjd22doJowfB4O3E0jIuekmGqDRXxtT15ECnkevRwCKwyknyMutwRgg9u1F05BNCC4pWuvwOhyVeQ00tncQ8Srl"
  );

  let clientSecret = '';


  const postData ={
    "amount": amount,
    "currency": "usd",
    "automatic_payment_methods": {
      "enabled": true
    }
  }
  fetch('https://dream-travels.onrender.com/secret', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Secret Data:', data);
                    clientSecret = data.client_secret;

                    const options = {
                      mode: "payment",
                      amount: amount,
                      currency: "usd",
                      clientSecret: clientSecret,
                      // Fully customizable with appearance API.
                      appearance: {
                        /*...*/
                      },
                    };
                  
                    return [options, stripePromise];
                })
                .catch(error => console.error('Error adding hotel:', error));
  


}

async function getAllHotels(setData, setLoading, setError) {
  try {
    
    
    const data = await fetch("https://dream-travels.onrender.com/hotels/getHotels");
    const response = await data.json();
    setData(response);
    setLoading(false);
    console.log(response);
  } catch (err) { 
    setError(err);
    setLoading(false);
  }
}

function getHotelFakeData() {
  const data =  [
      {
        hotelName: "Luxury Oasis Retreat",
        description:
          "Nestled on a private island, this five-star resort offers unparalleled luxury. Guests can indulge in spa treatments, dine in gourmet restaurants, and enjoy breathtaking ocean views from their private villas.",
        location: {
          city: "Tropical Paradise",
          country: "Islandia",
        },
        contact: {
          email: "info@luxuryoasis.com",
          phone: "+123 456 7890",
          address: "123 Oceanfront Avenue",
          zipCode: "54321",
        },
        website: "https://www.luxuryoasis.com",
        type: "hotel",
        latitude: 25.7617,
        longitude: 80.1918,
        rating: 4.5,
        rate: 115 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
      },
      {
        hotelName: "Urban Elegance Boutique Hotel",
        description:
          "Located in the heart of a bustling city, this boutique hotel combines modern design with historic charm. Each room is uniquely decorated, and guests can explore nearby cultural attractions before returning to the rooftop bar for panoramic city views.",
        location: {
          city: "Metropolis",
          country: "Cityland",
        },
        contact: {
          email: "info@urbanelegance.com",
          phone: "+987 654 3210",
          address: "456 Historic Street",
          zipCode: "12345",
        },
        website: "https://www.urbanelegancehotel.com",
        type: "motel",
        latitude: 20.7617,
        longitude: 80.1918,
        rating: 4.5,
        rate: 29 ,
        reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
      },
      {
        hotelName: "Mountain Lodge Serenity",
        description:
          "Escape to the tranquility of the mountains in this cozy lodge. With rustic decor and a fireplace in every room, guests can unwind after a day of hiking or skiing. The lodge also features a hot tub with mountain views.",
        location: {
          city: "Serenity Peaks",
          country: "Mountainland",
        },
        contact: {
          email: "info@mountainlodge.com",
          phone: "+111 222 3333",
          address: "789 Alpine Trail",
          zipCode: "67890",
        },
        website: "https://www.mountainlodge.com",
        type: "resort",
        latitude: 1.7617,
        longitude: 8.1918,
        rating: 4.5,
        rate: 31 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
      },
      {
        hotelName: "Historic Charm Manor",
        description:
          "Step back in time at this beautifully restored historic manor. Antique furnishings and elegant gardens transport guests to a bygone era, while modern amenities ensure a comfortable stay.",
        location: {
          city: "Heritageville",
          country: "Historyland",
        },
        contact: {
          email: "info@historiccharm.com",
          phone: "+456 789 0123",
          address: "789 Heritage Lane",
          zipCode: "54321",
        },
        website: "https://www.historiccharmhotel.com",
        type: "cabin",
        latitude: -20.7617,
        longitude: -80.1918,
        rating: 3.5,
        rate: 401 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",

      },
      {
        hotelName: "Tech-Savvy Urban Retreat",
        description:
          "Ideal for business travelers, this hotel seamlessly blends technology and comfort. Smart rooms, coworking spaces, and high-speed internet cater to the needs of the modern professional.",
        location: {
          city: "TechHub City",
          country: "Innovateland",
        },
        contact: {
          email: "info@techurban.com",
          phone: "+789 012 3456",
          address: "101 Innovation Street",
          zipCode: "12345",
        },
        website: "https://www.techurbanretreat.com",
        type: "apartment",
        latitude: 10.7617,
        longitude: 8.1918,
        rating: 1.5,
        rate: 506 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        hotelName: "Family-Friendly Beach Resort",
        description:
          "This resort caters to families with spacious suites, a kid's club, and a range of activities for all ages. The beachfront location allows guests to enjoy sun, sand, and sea.",
        location: {
          city: "Sunshine Cove",
          country: "Beachland",
        },
        contact: {
          email: "info@familybeachresort.com",
          phone: "+987 654 3210",
          address: "456 Shoreline Drive",
          zipCode: "56789",
        },
        website: "https://www.familybeachresort.com",
        type: "hostel",
        latitude: 80.7617,
        longitude: 8.1918,
        rating: 2.5,
        rate: 105 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 16 details (Example)
        hotelName: "Tranquil Forest Retreat",
        description:
          "Surrounded by lush greenery, this retreat offers a peaceful escape in the heart of the forest. Guests can enjoy nature walks, birdwatching, and cozy evenings by the fireplace.",
        location: { city: "Forest Haven", country: "Woodland" },
        contact: {
          email: "info@forestretreat.com",
          phone: "+222 333 4444",
          address: "567 Evergreen Trail",
          zipCode: "34567",
        },
        website: "https://www.tranquilforestretreat.com",
        type: "holiday-home",
        latitude: 10.7617,
        longitude: 8.1918,
        rating: 2.5,
        rate: 96 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 17 details (Example)
        hotelName: "Skyline View Towers",
        description:
          "Perched on a hill, this modern hotel offers breathtaking skyline views. Guests can unwind in stylish rooms, dine in rooftop restaurants, and experience the vibrant city lights.",
        location: { city: "Skyline City", country: "Viewland" },
        contact: {
          email: "info@skylinetowers.com",
          phone: "+333 444 5555",
          address: "789 Heights Boulevard",
          zipCode: "45678",
        },
        website: "https://www.skylineviewtowers.com",
        type: "homestay",
        latitude: 16.7617,
        longitude: 52.1918,
        rating: 4.5,
        rate: 999 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 18 details (Example)
        hotelName: "Safari Adventure Lodge",
        description:
          "Immerse yourself in the wonders of nature at this safari-themed lodge. Guests can go on guided wildlife tours, relax by the bonfire, and experience the thrill of the African savannah.",
        location: { city: "Wildlife Haven", country: "SafariLand" },
        contact: {
          email: "info@safarilodge.com",
          phone: "+444 555 6666",
          address: "101 Safari Trail",
          zipCode: "56789",
        },
        website: "https://www.safariadventurelodge.com",
        type: "country-house",
        latitude: 23.7617,
        longitude: 8.1918,
        rating: 5,
        rate: 123 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 19 details (Example)
        hotelName: "Alpine Chalet Retreat",
        description:
          "Escape to the mountains in this charming alpine chalet. Guests can enjoy ski-in, ski-out access, cozy evenings by the fireplace, and stunning views of snow-capped peaks.",
        location: { city: "Alpine Village", country: "Snowland" },
        contact: {
          email: "info@alpineretreat.com",
          phone: "+555 666 7777",
          address: "123 Mountain Road",
          zipCode: "67890",
        },
        website: "https://www.alpinechaletretreat.com",
        type: "hotel",
        latitude: 25.7617,
        longitude: 0.1918,
        rating: 3.5,
        rate: 321 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 20 details (Example)
        hotelName: "Tropical Paradise Resort",
        description:
          "Indulge in a tropical getaway at this resort surrounded by palm trees and white sandy beaches. Guests can relax in beachfront cabanas, savor tropical cuisine, and enjoy vibrant sunsets.",
        location: { city: "Island Bliss", country: "TropicLand" },
        contact: {
          email: "info@tropicalresort.com",
          phone: "+666 777 8888",
          address: "456 Palm Grove Lane",
          zipCode: "78901",
        },
        website: "https://www.tropicalparadiseresort.com",
        type: "motel",
        latitude: 2.7617,
        longitude: 0.1918,
        rating: 2.5,
        rate: 409 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 10 details (Underwater Paradise Resort)
        hotelName: "Underwater Paradise Resort",
        description:
          "Experience a one-of-a-kind stay in this resort submerged in crystal-clear waters. Each room has panoramic views of the vibrant marine life, providing an immersive and unforgettable experience for guests.",
        location: { city: "Coral Haven", country: "OceanLand" },
        contact: {
          email: "info@underwaterparadise.com",
          phone: "+111 222 3333",
          address: "123 Reef Boulevard",
          zipCode: "23456",
        },
        website: "https://www.underwaterparadiseresort.com",
        type: "resort",
        latitude: 18.7617,
        longitude: 50.1918,
        rating: 5,
        rate: 431 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 11 details (Eclectic Art Hotel)
        hotelName: "Eclectic Art Hotel",
        description:
          "Immerse yourself in a world of creativity at this hotel. Each room is a canvas of artistic expression, featuring a diverse range of contemporary and traditional artworks.",
        location: { city: "Artistry Town", country: "CultureLand" },
        contact: {
          email: "info@eclecticarthotel.com",
          phone: "+222 333 4444",
          address: "456 Canvas Street",
          zipCode: "34567",
        },
        website: "https://www.eclecticarthotel.com",
        type: "apartment",
        latitude: -20.7617,
        longitude: -80.1918,
        rating: 4.5,
        rate: 546 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 12 details (Eco-Friendly Wellness Retreat)
        hotelName: "Eco-Friendly Wellness Retreat",
        description:
          "Surrounded by lush greenery, this eco-conscious retreat emphasizes wellness. Organic cuisine, yoga classes, and sustainable practices make it an ideal destination for those seeking a holistic experience.",
        location: { city: "Green Haven", country: "EcoLand" },
        contact: {
          email: "info@ecofriendlyretreat.com",
          phone: "+333 444 5555",
          address: "789 Sustainable Lane",
          zipCode: "45678",
        },
        website: "https://www.ecofriendlywellness.com",
        type: "homestay",
        latitude: 30.7617,
        longitude: 30.1918,
        rating: 4.5,
        rate: 884 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 13 details (Adventure Lodge in the Wilderness)
        hotelName: "Adventure Lodge in the Wilderness",
        description:
          "For the adventurous at heart, this lodge is situated in the midst of a dense forest. Guests can explore hiking trails, go wildlife spotting, and enjoy outdoor activities before retiring to comfortable cabins.",
        location: { city: "Wilderness Junction", country: "AdventureLand" },
        contact: {
          email: "info@adventurelodge.com",
          phone: "+444 555 6666",
          address: "101 Adventure Trail",
          zipCode: "56789",
        },
        website: "https://www.adventurelodge.com",
        type: "apartment",
        latitude: 40.7617,
        longitude: 40.1918,
        rating: 4.5,
        rate: 134 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 14 details (Example)
        hotelName: "Modern Skyline Suites",
        description:
          "Indulge in luxury at these modern skyline suites. Each room offers stunning views of the city skyline, and guests can enjoy upscale amenities and fine dining experiences.",
        location: { city: "Skyline Metropolis", country: "ModernLand" },
        contact: {
          email: "info@modernsuites.com",
          phone: "+555 666 7777",
          address: "123 Highrise Avenue",
          zipCode: "67890",
        },
        website: "https://www.modernskylinesuites.com",
        type: "hostel",
        latitude: 20.7617,
        longitude: 10.1918,
        rating: 4.5,
        rate: 211 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
      {
        // Hotel 15 details (Example)
        hotelName: "Enchanted Garden Inn",
        description:
          "Escape to an enchanting garden setting at this charming inn. Guests can stroll through blooming gardens, relax by the fountain, and enjoy the serenity of nature.",
        location: { city: "Garden Haven", country: "NatureLand" },
        contact: {
          email: "info@enchantedgardeninn.com",
          phone: "+666 777 8888",
          address: "456 Blossom Lane",
          zipCode: "78901",
        },
        website: "https://www.enchantedgardeninn.com",
        type: "resort",
        latitude: 21.7617,
        longitude: 80.1918,
        rating: 4.5,
        rate: 854 ,
reviews:[
            {
                user:'65728234881b5c9d6548e028',
                rating:4,
                comment :"The highlight for me was the nature walks. The guided tours through the forest allowed me to connect with nature in a way I hadn't in a long time. The rooms were well-appointed, providing a perfect blend of modern comfort and rustic charm. Waking up to the sound of birdsong and the fresh mountain air was a delightful way to start each day. I can't wait to return to this peaceful oasis!"
            }
        ],
        amentitiies: "Free Wifi, Free Parking, Pool, Spa, Restaurant, Bar, Fitness Center, Room Service, Laundry Service, Concierge, Air Conditioning, Airport Transportation, Breakfast included, Banquet Room, Business Center, Children Activities (Kid / Family Friendly), Conference Facilities, Dry Cleaning, Heated pool, Hot Tub, Indoor pool, Meeting rooms, Multilingual Staff, Non-smoking hotel, Outdoor pool, Public Wifi, Sauna, Wheelchair Accessible",
        policies: "Check-in: 3:00 PM, Check-out: 11:00 AM, Non-smoking rooms, Pets are not allowed.",
        roomService: "Room service, Air conditioning, Housekeeping, Private balcony, Private bathrooms, Flatscreen TV, Room safe, Complimentary toiletries, Hair dryer, Ironing facilities, Telephone, Wake-up service / alarm clock, Bath / shower, Complimentary tea, Desk, Seating area, Bathrobes, Interconnected rooms available, Laptop safe, Private beach, Private pool, Sofa, Walk-in shower, Cable / satellite TV channels, Minibar, Refrigerator, Electric kettle.",
        parking : "Free parking, Valet parking, Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        internet : "Free internet, Wifi, Pool, Fitness Center with Gym / Workout Room, Bar / lounge, Beach, Bicycle rental, Bicycles available, Car hire, Children Activities (Kid / Family Friendly), Concierge, Conference facilities, Dry cleaning, Heated pool, Hot tub, Indoor pool, Laundry service, Meeting rooms, Multilingual staff, Outdoor pool, Pool / beach towels, Restaurant, Rooftop pool, Sauna, Spa, Sun loungers / beach chairs, Sun terrace, Sun umbrellas, Taxi service, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        pets: "Pets are not allowed.",
        kids: "Children Activities (Kid / Family Friendly)",
        langueges: "English, Spanish, French, German, Italian, Russian, Hindi, Arabic, Dutch, Portuguese, Chinese.",
        other : "Babysitting, Car hire, Concierge, Currency exchange, Gift shop, Laundry service, Meeting/Banquet facilities, Multi-lingual staff, Special diet menus (on request), Tour desk, Face masks for guests available, Health club, Spa, Beauty salon, 24-hour security, Baggage storage, Concierge, Currency exchange, Express check-in / check-out, Newspaper, Non-smoking hotel, Outdoor furniture, Picnic area, Private check-in / check-out, Shops, Sun deck, Sun terrace, Sun umbrellas, ATM on site, 24-hour check-in, 24-hour front desk, 24-hour wellness center, Dry cleaning, Laundry service, Ironing service, Shoeshine.",
        
      },
    ];
  return data;
}

export { getServicesForStripePayment, getAllHotels,getHotelFakeData };
