
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Users, BuildingIcon, Clock, Star } from 'lucide-react';
import { PerksCarousel } from './PerksCarousel';

const Index = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  const tourPackages = [
    {
      id: 1,
      title: "Singapore Adventure",
      destination: "Singapore 3N/4D",
      price: "INR 58000",
      discount: "AirFare Seperate",
      image: "https://wallpapercave.com/wp/wp1841860.jpg",
      rating: 4.9,
      duration: " 3 Nights 4 Days",
      travelers: "34 PAX minimum",
      travelDate: "05th Aug 2025 to 08th Aug 2025",
      highlights: ["Universal Studios", "Sentosa Island"],
      itinerary: [
        {
          day: 1,
          title: "Meals: Packed Lunch, Dinner",
          activities: [
            "Board Flight at 10.25am, with packed lunch",
            "Arrival at changi airport at 6PM",
            "Pickup and proceed to hotel – check-in Room",
            "Night dinner at Restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 2,
          title: "Meals: Breakfast, Lunch & Dinner",
          activities: [
            "Morning breakfast at hotel",
            "Proceed to Singapore City tour",
            "Afternoon Lunch at Indian Restaurant",
            "Sentosa (Cable car 1 Way + Madame Tussauds ( 5 in l ) + Wings of the time 1st Show)",
            "Night Dinner at Indian restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 3,
          title: "Meals: Breakfast, Lunch & Dinner",
          activities: [
            "Morning breakfast at hotel",
            "Universal Studios ( Normal Ticket) with 20Sgd Meal Coupon",
            "Night Dinner at Indian restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 4,
          title: "Meals: Breakfast, Lunch & Packed Dinner",
          activities: [
            "Morning breakfast at hotel and checkout hotel as per hotel policy (between 10 am to 12 pm)",
            "leave luggage at lobby, rest of the time at leisure for shopping on own",
            "Lunch at Indian restaurant",
            "dropoff at changi airport with packed dinner"
          ]
        }
      ],
      inclusions: [
        "03N stay in Hotel 4* Grand Central or Similar ( double occupancy with breakfast )",
        "03 Breakfast at hotel(except arrival day)",
        "01 packed lunch on arrival day",
        "02 Indian Lunches in restaurant",
        "01 meal coupon in universal studio",
        "03 Indian Dinners in restaurant",
        "01packed dinner on departure day",
        "2*500ml Bottles of water per person per day",
        "All transfers according to program including airport transfers by AC coach",
        "Singapore tourist Visa"
      ],
      exclusions: [
        "Airfare",
        "Insurance",
        "Any extra tours & transfers",
        "Anything not mentioned in Inclusions",
        "Tourism taxes if any applicable per night per person payable direct at hotel",
      ],
      policy: [
        "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per hotel policy mentioned in the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.Sangeethaholidayspvtltd is not responsible for the damaged property",
        "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment.    Note :Final service voucher will be provided one day before departure day"
      ],
      flightDetails: {
        pricef: "INR 22655 Approx(varies based on date and time)",
        onward: "Baggage (30kg + 7 kg) 05 Aug 2025: Bangalore 10.25 // Singapore 17.40",
        return: "Singapore Airlines( Non refundable 25Kg+ 7Kg) 08Aug 2025: Singapore 20.05 // Bangalore 21.50"
      }
    },
     {
      id: 2,
      title: "Singapore-Kuala Lumpur",
      destination: "Singapore 3N – Kuala Lumpur 1N",
      price: "INR 71000",
      discount: "AirFare Seperate",
      image: "https://wallpapercave.com/wp/wp2378959.jpg",
      rating: 4.9,
      duration: " 4 Nights 5 Days",
      travelers: "25 PAX minimum",
      travelDate: "05th Aug 2025 to 09th Aug 2025",
      highlights: ["Universal Studios", "Genting highland","Sentosa Island",  "Spice Garden"],
      itinerary: [
        {
          day: 1,
          title: "Meals: Packed Lunch, Dinner",
          activities: [
            "Board Flight at 10.25am, with packed lunch",
            "Arrival at changi airport at 6PM ,Pickup and proceed to hotel -- check-in Room",
            "Night dinner at Restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 2,
          title: "Meals: Breakfast, Lunch & Dinner",
          activities: [
            "Morning breakfast at hotel",
            "Proceed to Singapore City tour",
            "Afternoon Lunch at Indian Restaurant",
            "Sentosa (Cable car 1 Way + Madame Tussauds ( 5 in l ) + Wings of the time 1st Show)",
            "Night Dinner at Indian restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 3,
          title: "Meals: Breakfast, Lunch & Dinner",
          activities: [
            "Morning breakfast at hotel",
            "Universal Studios ( Normal Ticket) with 20Sgd Meal Coupon",
            "Night Dinner at Indian restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 4,
          title: "( Meals: Breakfast, Lunch, Dinner ) Singapore to Kuala lumpur",
          activities: [
            "Morning after breakfast , check-out Singapore hotel - Proceed to kuala lumpur by coach",
            "Lunch on the way",
            " on arrival at kuala lumpur check-in hotel",
            " Dinner at Indian restaurant",
            " overnight stay in Kualalumpur hotel",
          ]
        },
         {
          day: 5,
          title: " Meals: Breakfast, Lunch, Packed Dinner ",
          activities: [
            "Morning after breakfast , check-out hotel, Keep luggage in coach( Note: Guest need to take care of there belongings in baggage kept in coach . Company will not be responsible if any things is misplaced)",
            "Proceed to Full day Genting tour ( 9.30am pickup)",
            " Enroute Batu cave visit (20 Min photo Stop only)",
            " Two-Way Cable Car (subject to maintenance / weather)",
               " Indoor theme park ticket",
                 "01 Lunch @ Spice Garden in Genting",
            "3pm proceed to Kualalumpur airport with Packed Dinner",
          ]
        }
      ],
      inclusions: [
        " 03N stay in Singapore: 4* Grand Central or Similar ( double occupancy with breakfast )",
        "01N stay in Kuala lumpur -Ramada KLCC or Similar ( double occupancy with breakfast )",
        "04 Breakfast at hotel(except arrival day)",
        "01 packed lunch",
        "02 Indian Lunches in restaurant",
        "01 meal coupon in universal studio",
        "01 Lunch in genting highland",
        "04 Indian Dinners in restaurant",
        "01 packed dinner on departure day",
       " 2*500ml Bottles of water per person per day",
        "All transfers according to program including airport transfers by AC coach",
        "Singapore tourist Visa",
        "Tourism taxes in Kualalumpur"
      ],
      exclusions: [
        "Airfare",
        "Insurance",
        "Any extra tours & transfers",
        "Anything not mentioned in Inclusions",
        "Tourism taxes if any applicable per night per person payable direct at hotel."
      ],
      policy: [
        "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
        "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
      ],
      flightDetails: {
        pricef: "7700+13414 == 21141 approx (varies based on date and time)",
        onward: "Indigo-- Baggage (30kgs +7kgs)05 Aug 2025: Bangalore 10.25 // Singapore 17.40== inr 7700 approx",
        return: " Indigo-- Baggage (30kgs +7kgs)09Aug 2025 : Kuala Lumpur 21.30 // Bangalore 23.10 ==INR 13414 approx"
      }
    },
     {
  id: 3,
  title: "Amritsar Tour",
  destination: "Amritsar 2N/3D",
  price: "INR 15000 ",
  discount: "AirFare Separate",
  image: "https://as1.ftcdn.net/v2/jpg/03/11/74/00/1000_F_311740081_PL7ftGHnZL7JMBQpigswigY2xFwSRHJg.jpg",
  rating: 4.9,
  duration: " 2 Nights 3 Days",
  travelers: "53 PAX (min guaranteed)",
  travelDate: "26th Aug 2025 to 28th Aug 2025",
  highlights: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Local Shopping"],
  itinerary: [
    {
      day: 1,
      title: "Meals: Lunch & Dinner",
      activities: [
        "Arrival at Amritsar airport, pickup and proceed to hotel for check-in",
        "Finish lunch at hotel",
        "Visit Golden Temple and Jallianwala Bagh",
        "Night dinner and overnight stay at hotel"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Morning breakfast at hotel",
        "Day at leisure for shopping",
        "Afternoon lunch at hotel",
        "Evening visit to Wagah Border",
        "Return to hotel for dinner and overnight stay"
      ]
    },
    {
      day: 3,
      title: "Meals: Breakfast & Lunch",
      activities: [
        "Morning breakfast at hotel",
        "Check-out and finish lunch at hotel",
        "Drop-off at airport"
      ]
    }
  ],
  inclusions: [
    "02N stay in Hotel (Golden sarovar or Similar, Standard room basic category (high category extra charges applicable))",
    "02 Breakfasts at hotel (except arrival day)",
    "03 Lunches, 02 Dinners",
    "2*500ml Bottles of water per person per day",
    "All transfers according to program including airport transfers by AC coach"
  ],
  exclusions: [
    "Airfare",
    "Taxes",
    "Any extra tours & transfers",
    "Anything not mentioned in Inclusions",
    "Tourism taxes if any applicable per night per person payable direct at hotel"
  ],
  policy: [
    "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
    "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
  ],
  flightDetails: {
    pricef: "6797 + 7444 == INR 13611 Approx",
    onward: "Indigo-- Baggage (15kgs +7kgs) 26 Aug 2025: Bangalore 09.00 // Amritsar 12.15 == INR 6797 approx",
    return: "Indigo-- Baggage (15kgs +7kgs) 28 Aug 2025: Amritsar 16.05 // Bangalore 19.30 == INR 7444 approx"
  }
},

  {
  id: 4,
  title: "Goa Tour",
  destination: "Goa 2N/3D",
  price: "INR 19000 ",
  discount: "AirFare Separate",
  image: "https://www.bautrip.com/images/front/goa.jpg",
  rating: 4.9,
  duration: "3 Days 2 Nights",
  travelers: "200 PAX (min guaranteed)",
  travelDate: "10th Aug 2025 to 12th Aug 2025",
  highlights: [
    "Fort Aguada",
    "Calangute Beach",
    "Baga Beach",
    "Mandovi River Cruise",
    "Mangeshi Temple",
    "Basilica of Bom Jesus",
    "Se Cathedral",
    "Miramar Beach",
    "Dona Paula",
    "Bogmalo Beach"
  ],
  itinerary: [
    {
      day: 1,
      title: "Meals: Lunch & Dinner",
      activities: [
        "Arrival at Goa airport, pickup and proceed to hotel",
        "Lunch at resort, then check-in to rooms",
        "Free time to enjoy resort activities (some may be chargeable)",
        "Dinner and overnight stay at resort"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Breakfast at resort",
        "Proceed for North Goa tour (Fort Aguada, Calangute Beach, Baga Beach)",
        "Lunch at restaurant",
        "Evening Mandovi River Cruise (subject to weather conditions)",
        "Return to resort, dinner and overnight stay"
      ]
    },
    {
      day: 3,
      title: "Meals: Breakfast & Lunch",
      activities: [
        "Breakfast at resort and check-out, luggage in vehicle",
        "South Goa tour (Mangeshi Temple, Basilica of Bom Jesus, Se Cathedral, Miramar, Dona Paula, Bogmalo)",
        "Lunch at restaurant",
        "Drop-off at airport"
      ]
    }
  ],
  inclusions: [
    "02N stay in Hotel (Club Mahindra Assanora Resort or Similar, ( standar room- basic category))",
    "02 Breakfasts at hotel (except arrival day)",
    "02 Lunches in restaurant/resort",
    "02 Dinners in resort",
    "2*500ml Bottles of water per person per day",
    "All transfers according to program including airport transfers by AC coach"
  ],
  exclusions: [
    "Airfare",
    "Taxes",
    "Any extra tours & transfers",
    "Anything not mentioned in Inclusions",
    "Tourism taxes if any applicable per night per person payable direct at hotel"
  ],
  policy: [
    "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
    "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
  ],
  flightDetails: {
    pricef: "INR 3000 + 3000 == INR 6000 Approx",
    onward: "Indigo-- Baggage (15kgs +7kgs) 10 Aug 2025: Bangalore 11.10 // Goa 12.20 == INR 3000 approx",
    return: "Indigo-- Baggage (15kgs +7kgs) 12 Aug 2025: Goa 19.15 // Bangalore 20.40 == INR 3000 approx"
  }
},
{
  id: 5,
  title: "Tirupati Tour",
  destination: "Tirupati 1N/2D",
  price: "INR 16000 ",
  discount: "Specially Curated",
  image: "https://wallpapers.com/images/hd/tirupati-balaji-evening-temple-u5jye4arrupbhb6v.jpg", // Replace with a better image URL if needed
  rating: 4.9,
  duration: "1N/2D",

  travelers: "412 PAX (min guaranteed) - 4 batches (100 each)",
  travelDate: "28th Aug 2025 to 29th Aug 2025",
  highlights: [
    "Darshan at Tirumala Temple",
    "Visit to Kalyana Venkateswara Swamy Temple",
    "Visit to Sri Padmavati Ammavaari Temple",
    "Indian Meals",
    "AC Bus Travel from Bangalore"
  ],
  itinerary: [
    {
      day: 1,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Early morning start by AC bus to Tirupati",
        "Breakfast on arrival",
        "Check-in to hotel",
        "Lunch at hotel ",
        "Afternoon visit to Kalyana Venkateswara Swamy Temple and Tiruchanur Sri Padmavati Ammavaari Temple",
        "Dinner and overnight stay at hotel"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Breakfast at hotel and check-out",
        "Proceed to Tirumala for darshan as per slot timing",
        " dinner",
        "Night return to Bangalore by AC bus"
      ]
    }
  ],
  inclusions: [
    "01N stay in Hotel (Fortune Select Grand Ridge / Ekanta Bliss Hotel / Marasa Sarovar Premier or similar standard room- base category (high category room extra cost))",
    "02 Breakfasts, 02 Lunches, 01 Dinner, 01 Packed Dinner",
    "Darshan ticket (as per slot availability)",
    "2*500ml Bottles of water per person per day",
    "All transfers by Ac coach from Banglore to Banglore"
  ],
  exclusions: [
    "Airfare",
    "Taxes",
    "Any extra tours & transfers",
    "Anything not mentioned in Inclusions",
    "Tourism taxes if any applicable per night per person payable direct at hotel"
  ],
  policy: [
   "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
    "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
  ],
  flightDetails: {
    pricef: "Not Applicable",
    onward: "Not Applicable",
    return: "Not Applicable"
  }
}
,
{
  id: 6,
  title: "Bangkok",
  destination: "Bangkok 2N/3D",
  price: "INR 22000",
  discount: "AirFare Separate",
  image: "https://wallpapercave.com/wp/wp1916874.jpg",
  rating: 4.9,
  duration: "2 Nights 3 Days",
  travelers: "97 PAX( min guaranteed)",
  travelDate: "11th Aug 2025 to 13th Aug 2025",
  highlights: [
    "Marble temple",
    "Gems Gallery",
    "safari world & Marine park"
  ],
  itinerary: [
    {
      day: 1,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "on Arrival at Bangkok , fresh up at airport , later proceed to hotel for breakfast",
        "Later check-in room", 
        "Lunch at Indian restaurant",
        "Afternoon Bangkok city tour with (Golden + Marble temple + Gems Gallery)",
        "Dinner at Indian restaurant",
        "Overnight stay in hotel"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Morning after breakfast , - proceed to safari world & Marine park with Lunch ",
        "Evening Proceed for Chao phraya Cruise with Indian dinner ",
        "Overnight stay in hotel"
      ]
    },
    {
      day: 3,
      title: "Meals: Breakfast, Lunch ",
      activities: [
        "Morning after breakfast , check-out room as per hotel policy",
        "Put luggage in lobby . rest of the time at leisure",
        "Lunch at Indian restaurant",
        "drop off at Bangkok airport"
      ]
    },
   
  ],
  inclusions: [
    "02N stay in Hotel Ambassador Hotel or Similar ( Standard room – basic category )(Higher category on extra cost ) ",
    "03 Breakfasts at hotel",
    "02 Lunches in restaurant",
    "01 lunch on tour",
    "02 Dinners in restaurant",
    "2*500ml Bottles of water per person per day",
    "All transfers according to program including airport transfers by AC coach"
  ],
  exclusions: [
    "Airfare",
    "Taxes",
    "Any extra tours & transfers",
    "Anything not mentioned in Inclusions",
    "Tourism taxes if any applicable per night per person payable direct at hotel"
  ],
  policy: [
    "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
    "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
  ],
  flightDetails: {
    pricef: "INR 32931 Approx",
    onward: "ThaiAirways-- Baggage (23kgs +7kgs) Non Refundable 11 Aug 2025: Bangalore 00.30 // Bangkok 05.55",
    return: "ThaiAirways-- Baggage (23kgs +7kgs) Non Refundable13 Aug 2025 : Bangkok 21.20 // Bangalore 23.20"
  }
},

{
  id: 7,
  title: "Phuket",
  destination: "Phuket 3N/4D",
  price: "INR 30000",
  discount: "AirFare Separate",
  image: "https://wallpaperaccess.com/full/150575.jpg",
  rating: 4.9,
  duration: "3 Nights 4 Days ",
  travelers: "48 PAX( min guaranteed)",
  travelDate: "25th Aug 2025 to 28th Aug 2025",
  highlights: [
    "Magic show",
    "City tour",
    "phi phi and khai islands"
  ],
  itinerary: [
    {
      day: 1,
      title: "Meals:  Lunch & Dinner",
      activities: [
        "Arrive HKT airport and transfer to Phuket hotel",
        "Lunch at Indian restaurant in Phuket", 
        "Check in at hotel (std check in time post 1400 hrs)",
        "Carnival magic Show",
        "Dinner at Indian restaurant"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Breakfast at hotel ",
        "Phuket city tour dolphin by the bay ( regular seat)",
        "Lunch at Indian restaurant in Phuket",
        "Dinner at Indian restaurant in Phuket",
      ]
    },
    {
      day: 3,
      title: "Meals: Breakfast, Lunch ",
      activities: [
        "Breakfast at hotel",
        "Phi Phi Island + Khai island + Maya bay tour by Speed boat including Indian Lunch -(Include national park fees)",
        "Dinner at Indian restaurant",
      ]
    },
     {
      day: 4,
      title: "Meals: Breakfast, Lunch ",
      activities: [
        "Breakfast at hotel",
        "Check out before 12:00 pm ",
        "Transfer to airport for flight"
      ]
    }
   
  ],
  inclusions: [
    "03N stay in Hotel ",
    "03 Breakfasts at hotel(except arrival day)",
    "02 Lunches in restaurant",
    "01 lunch on tour",
    "03 Dinners in restaurant",
    "2*500ml Bottles of water per person per day",
    "All transfers according to program including airport transfers by AC coach"
  ],
  exclusions: [
    "Airfare",
    "Taxes",
    "Any extra tours & transfers",
    "Anything not mentioned in Inclusions",
    "Tourism taxes if any applicable per night per person payable direct at hotel"
  ],
  policy: [
    "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
    "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
  ],
  flightDetails: {
    pricef: "INR 23402 Approx",
    onward: "Indigo-- Baggage (30kgs +7kgs)25 Aug 2025: Bangalore 06.15 // Phuket 11.35",
    return: "Indigo-- Baggage (30kgs +7kgs)28 Aug 2025 : phuket 12.45 // Bangalore 14.50"
  }
}


];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
 {/* Collaborative Hero Section */}
<div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 to-green-600 text-white py-20 px-4 overflow-hidden">
  
  {/* Logo Collaboration Section */}
  <div className="flex items-center space-x-8 mb-10 bg-white/10 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-xl border border-white/30 hover:shadow-2xl transition-shadow duration-300">
    
    {/* Star Health Logo */}
    <div className="bg-white rounded-full shadow-lg p-1">
      <img src="/images/image.png" alt="Star Health" className="h-20 w-20 object-contain rounded-full" />
    </div>

    {/* Collaboration Badge */}
    <div className="text-white text-sm md:text-base font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-green-500 shadow-inner flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.286 3.946c.3.921-.755 1.688-1.538 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.783.57-1.838-.197-1.538-1.118l1.286-3.946a1 1 0 00-.364-1.118L2.075 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
      </svg>
      <span>Our Collaboration</span>
    </div>

    {/* Sangeetha Holidays Logo */}
    <div className="bg-white rounded-full shadow-lg p-1">
      <img src="/images/sangeethalogo.jpg" alt="Sangeetha Holidays" className="h-20 w-20 object-contain rounded-full" />
    </div>
  </div>

  {/* Hero Heading and Button */}
  <div className="text-center">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
      A Journey Together
    </h1>
    <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto opacity-90">
      Star Health & Sangeetha Holidays join forces to deliver exclusive trips crafted just for Star Health employees.
    </p>
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        >
          Memories of our previous collaboration
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">
            Agents R&R at The Golden Palms Resort, Bangalore
          </DialogTitle>
        </DialogHeader>
        <PerksCarousel />
      </DialogContent>
    </Dialog>
  </div>

  {/* Scrolling Services Text */}
 {/* Scrolling Services Text */}
<div className="w-full overflow-hidden mt-12 space-y-4">
  <p className="animate-scrollLeft whitespace-nowrap text-lg md:text-xl font-semibold tracking-wide text-white/80">
    ✈️ Air Ticketing &nbsp;&nbsp; • &nbsp;&nbsp; 🏨 Hotel Bookings  &nbsp;&nbsp; • &nbsp;&nbsp; 📋 Visa & Passport Assistance &nbsp;&nbsp; • &nbsp;&nbsp; 📦 Customized Holidays
  </p>
  <p className="animate-scrollRight whitespace-nowrap text-lg md:text-xl font-semibold tracking-wide text-white/80">
     🚢 Cruise Packages &nbsp;&nbsp; • &nbsp;&nbsp; 💍 Destination Weddings &nbsp;&nbsp; • &nbsp;&nbsp; 🧳 Family Packages &nbsp;&nbsp; • &nbsp;&nbsp; 🌍 International and domestic tours
  </p>
</div>

</div>






      {/* Tour Packages Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured Tour Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our handpicked selection of incredible destinations and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((tour) => (
            <Card key={tour.id} className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full">
                    {tour.discount}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 text-white">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{tour.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{tour.destination}</span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{tour.travelers}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {tour.highlights.slice(0, 2).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {tour.highlights.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{tour.highlights.length - 2} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-blue-600">{tour.price}</span>
                    <span className="text-gray-500 text-sm ml-1">per person</span>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-6 py-2 transition-all duration-300 transform hover:scale-105"
                        onClick={() => setSelectedTour(tour)}
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-3xl font-bold text-gray-800 mb-4">
                          {tour?.title}
                        </DialogTitle>
                      </DialogHeader>
                      
                      {tour && (
                        <div className="space-y-8">
                          {/* Tour Image */}
                          <div className="relative rounded-2xl overflow-hidden">
                            <img 
                              src={tour.image} 
                              alt={tour.title}
                              className="w-full h-80 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                              <h3 className="text-2xl font-bold">{tour.destination}</h3>
                              <p className="text-lg">{tour.travelDate}</p>
                            </div>
                          </div>

                          {/* Quick Info */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-blue-50 rounded-lg">
                              <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                              <p className="font-semibold text-gray-800">{tour.duration}</p>
                              <p className="text-sm text-gray-600">Duration</p>
                            </div>
                            <div className="text-center p-4 bg-green-50 rounded-lg">
                              <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                              <p className="font-semibold text-gray-800">{tour.travelers}</p>
                              <p className="text-sm text-gray-600">Group Size</p>
                            </div>
                            <div className="text-center p-4 bg-purple-50 rounded-lg">
                              <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                              <p className="font-semibold text-gray-800">{tour.rating}/5</p>
                              <p className="text-sm text-gray-600">Rating</p>
                            </div>
                            <div className="text-center p-4 bg-orange-50 rounded-lg">
                              <BuildingIcon className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                              <p className="font-semibold text-gray-800">{tour.price}</p>
                              <p className="text-sm text-gray-600">Price</p>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h4>
                            <div className="grid grid-cols-2 gap-3">
                              {tour.highlights.map((highlight, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                  <span className="text-gray-700">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Itinerary */}
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">Day Wise Itinerary</h4>
                            <div className="space-y-6">
                              {tour.itinerary.map((day, index) => (
                                <div key={index} className="border-l-4 border-blue-600 pl-6 pb-6">
                                  <h5 className="text-xl font-semibold text-blue-600 mb-2">
                                    Day {day.day}: {day.title}
                                  </h5>
                                  <ul className="space-y-2">
                                    {day.activities.map((activity, actIndex) => (
                                      <li key={actIndex} className="flex items-start space-x-2">
                                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                        <span className="text-gray-700">{activity}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Inclusions */}
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">Package Inclusions</h4>
                            <div className="bg-green-50 rounded-lg p-6">
                              <ul className="space-y-3">
                                {tour.inclusions.map((inclusion, index) => (
                                  <li key={index} className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">{inclusion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          
                           {/* exclusions */}
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">Package exclusions</h4>
                            <div className="bg-green-50 rounded-lg p-6">
                              <ul className="space-y-3">
                                {tour.exclusions.map((exclusion, index) => (
                                  <li key={index} className="flex items-start space-x-3">
                                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </div>
                                    <span className="text-gray-700">{exclusion}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                         {/* Flight Details */}
<div>
  <h4 className="text-2xl font-bold text-gray-800 mb-4">Flight Details</h4>
  <div className="bg-blue-50 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <h5 className="font-semibold text-blue-600 mb-2"> AirFare:</h5>
      <p className="text-gray-700">{tour.flightDetails.pricef}</p>
    </div>
    <div>
      <h5 className="font-semibold text-blue-600 mb-2">Onward Flight:</h5>
      <p className="text-gray-700">{tour.flightDetails.onward}</p>
    </div>
    <div>
      <h5 className="font-semibold text-blue-600 mb-2">Return Flight:</h5>
      <p className="text-gray-700">{tour.flightDetails.return}</p>
    </div>
    
  </div>
</div>

{/* Policy */}
{selectedTour?.policy && (
  <section>
    <h4 className="text-2xl font-bold mb-4">Policy</h4>
    <ul className="bg-yellow-50 p-4 rounded-lg list-disc list-inside">
      {selectedTour.policy.map((pol, i) => (
        <li key={i}>{pol}</li>
      ))}
    </ul>
  </section>
)}

           

                          {/* Book Now Button */}
                         <div className="text-center pt-6">
  <Button
    size="lg"
    className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
    onClick={() => {
      const phoneNumber = '918106868686'; // 🔁 Replace with YOUR WhatsApp number
      const message = encodeURIComponent(
        `Subject: Booking Inquiry for ${tour.title}  Package
I am interested in booking the “${tour.title}” package (${tour.destination}) scheduled from ${tour.travelDate}. I would appreciate it if you could guide me through the next steps for confirming the reservation..`
      );
      alert("Redirecting to WhatsApp...");
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    }}
  >
    Book This Tour - {tour.price}
  </Button>
  <p className="text-sm text-gray-600 mt-3">
    Gst and TCS applicable 5% each! (out of India) <br />
    Gst 5% (inside India)
  </p>
</div>

                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    {/* Footer */}
<footer className="bg-gray-800 text-white pt-12">
  {/* Why Choose Us Section */}
  <div className="bg-white py-12 px-6 rounded-t-2xl shadow-md max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Why Choose Us</h2>
    <p className="text-lg text-gray-600 text-center mb-10">
      Our partnership with <span className="font-semibold text-blue-700">Star Health</span> reflects our commitment to delivering trusted, safe, and memorable travel experiences. 
      Here's what makes us the perfect choice for your next journey:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
        <h4 className="text-xl font-semibold text-blue-700 mb-2">Tailored for Employees</h4>
        <p className="text-gray-700">We create exclusive travel packages that cater specifically to the preferences and comfort of Star Health employees.</p>
      </div>
      <div className="bg-green-50 p-6 rounded-xl shadow-sm">
        <h4 className="text-xl font-semibold text-green-700 mb-2">Trusted Collaboration</h4>
        <p className="text-gray-700">With the trusted backing of Star Health, we ensure a seamless and secure travel planning experience.</p>
      </div>
      <div className="bg-yellow-50 p-6 rounded-xl shadow-sm">
        <h4 className="text-xl font-semibold text-yellow-700 mb-2">Value-Added Perks</h4>
        <p className="text-gray-700">Special inclusions and perks tailored for employees make your trips more rewarding and cost-effective.</p>
      </div>
      <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
        <h4 className="text-xl font-semibold text-purple-700 mb-2">Expert Planning</h4>
        <p className="text-gray-700">Our experienced travel team ensures every detail is handled, allowing you to simply relax and enjoy the journey.</p>
      </div>
    </div>
  </div>

  {/* Main Footer CTA */}
 <div className="container mx-auto px-4 mt-16 text-center">
  <h3 className="text-3xl font-bold mb-4">Ready for Your Next Travel?</h3>
  <p className="text-xl text-gray-300 mb-2">Managing Director: P. Venkata Srikanth</p>
  <p className="text-xl text-gray-300">Contact us at: 81068 68686</p>
</div>


</footer>

    </div>
  );
};

export default Index;
