
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Users, Plane, Clock, Star, Hotel } from 'lucide-react';
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
      rating: 4.8,
      duration: "4 Days 3 Nights",
      travelers: "34 PAX minimum",
      travelDate: "05th Aug 2025 to 08th Aug 2025",
      highlights: ["Universal Studios", "Sentosa Island", "Gardens by the Bay", "Marina Bay Sands"],
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
            "Sentosa (Cable car 1 Way + Mt ( 5 in l ) + Wings of the time 1st Show)",
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
          title: "Meals: Breakfast, Lunch & Dinner",
          activities: [
            "Morning breakfast at hotel and checkout hotel as per hotel policy (between 10 am to 12 pm)",
            "leave luggage at lobby, rest of the time at leisure for shopping on own",
            "Lunch at Indian restaurant",
            "dropoff at changi airport with packed dinner"
          ]
        }
      ],
      inclusions: [
        "03N stay in Hotel",
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
        "03 Indian Dinners in restaurant"
      ],
      policy: [
        "HOTEL POLICY: Guest must follow the standard check-in/check-out time as per the final tour confirmation voucher. Hotel timings vary by destination. Early check-in or late check-out is subject to availability and may incur extra cost. Room services and special orders (non-alcoholic beverages) are at the guest's own expense. Some hotels maintain a minibar/snacks – any consumption must be paid for directly by the customer. Any damages to hotel or room property will be charged directly to the guest by the hotel.",
        "CAB POLICY: Tours once booked are non-refundable, non-transferable, and non-changeable. All tours operate on a point-to-point basis, and the cab will follow only the given itinerary. For private or shared tours, the cab will wait as per the time mentioned in the final itinerary only. Guests must strictly adhere to the schedule. Missed tours or no-shows are strictly non-refundable. Any extra excursions or sightseeing outside the itinerary will incur additional cost and must be informed before the tour start day with full payment."
      ],
      flightDetails: {
        pricef: "INR 22655 Approx",
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
      rating: 4.8,
      duration: "5 Days 4 Nights",
      travelers: "25 PAX minimum",
      travelDate: "05th Aug 2025 to 09th Aug 2025",
      highlights: ["Universal Studios", "Sentosa Island", "Gardens by the Bay", "Marina Bay Sands"],
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
            "Sentosa (Cable car 1 Way + Mt ( 5 in l ) + Wings of the time 1st Show)",
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
        pricef: "7700+13414 == 21141 approx",
        onward: "Indigo-- Baggage (30kgs +7kgs)05 Aug 2025: Bangalore 10.25 // Singapore 17.40== inr 7700 approx",
        return: " Indigo-- Baggage (30kgs +7kgs)09Aug 2025 : Kuala Lumpur 21.30 // Bangalore 23.10 ==INR 13414 approx"
      }
    },
     {
  id: 3,
  title: "Amritsar Tour",
  destination: "Amritsar 2N/3D",
  price: "INR 22000 ",
  discount: "AirFare Separate",
  image: "https://as1.ftcdn.net/v2/jpg/03/11/74/00/1000_F_311740081_PL7ftGHnZL7JMBQpigswigY2xFwSRHJg.jpg",
  rating: 4.6,
  duration: "3 Days 2 Nights",
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
    "02N stay in Hotel (Ramada by Wyndham or Similar, double occupancy with breakfast)",
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
  price: "INR 22000 ",
  discount: "AirFare Separate",
  image: "https://www.bautrip.com/images/front/goa.jpg",
  rating: 4.7,
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
    "02N stay in Hotel (Club Mahindra Assanora Resort or Similar, double occupancy with breakfast)",
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
  price: "INR 22000",
  discount: "Specially curated",
  image: "https://wallpapers.com/images/hd/tirupati-balaji-evening-temple-u5jye4arrupbhb6v.jpg",
  rating: 4.6,
  duration: "2 Days 1 Night",
  travelers: "412 PAX (min guaranteed) - 4 batches of 100 each",
  travelDate: "28th Aug 2025 to 29th Aug 2025",
  highlights: [
    "Kalyana Venkateswara Swamy Temple",
    "Tiruchanur Sri Padmavathi Ammavari Temple",
    "Tirumala Balaji Darshan"
  ],
  itinerary: [
    {
      day: 1,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Early morning departure from Bangalore by AC bus",
        "Breakfast on arrival at Tirupati",
        "Hotel check-in and lunch",
        "Visit Kalyana Venkateswara Swamy Temple",
        "Visit Tiruchanur Sri Padmavathi Ammavari Temple",
        "Return to hotel for dinner and overnight stay"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast & Dinner",
      activities: [
        "Breakfast at hotel and check-out",
        "Proceed to Tirumala for Balaji Darshan (based on darshan slot timings)",
        "Dinner followed by return journey to Bangalore by AC bus"
      ]
    }
  ],
  inclusions: [
    "01N stay in Hotel (Marasa Sarovar Premiere or Similar, double occupancy with breakfast)",
    "02 Breakfasts (including day of departure)",
    "01 Lunch at hotel",
    "02 Dinners",
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
  pricef: "Not Applicable",
  onward: "Not Applicable",
  return: "Not Applicable"
}

},
{
  id: 6,
  title: "Phuket Tour",
  destination: "Phuket 3N/4D",
  price: "INR 22000",
  discount: "AirFare Separate",
  image: "https://wallpaperaccess.com/full/150575.jpg",
  rating: 4.8,
  duration: "4 Days 3 Nights",
  travelers: "48 PAX (min guaranteed)",
  travelDate: "11th Aug 2025 to 14th Aug 2025",
  highlights: [
    "Fantasy Show",
    "Phuket City Tour with Dolphin by the Bay",
    "Phi Phi Island",
    "Maya Bay",
    "Khai Island",
    "Indian Restaurants for Meals"
  ],
  itinerary: [
    {
      day: 1,
      title: "Meals: Lunch & Dinner",
      activities: [
        "Arrival at Phuket and proceed to hotel for check-in",
        "Lunch at Indian restaurant",
        "Evening Fantasy show",
        "Dinner at Indian restaurant",
        "Overnight stay in hotel"
      ]
    },
    {
      day: 2,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Breakfast at hotel",
        "Proceed to Phuket City Tour with Dolphin by the Bay",
        "Lunch at Indian restaurant",
        "Evening at leisure",
        "Dinner at Indian restaurant",
        "Overnight stay in hotel"
      ]
    },
    {
      day: 3,
      title: "Meals: Breakfast, Lunch & Dinner",
      activities: [
        "Breakfast at hotel",
        "Proceed to Phi Phi Island + Maya Bay + Khai Island (includes National Park Fees) with lunch",
        "Return by evening and leisure time",
        "Dinner at Indian restaurant",
        "Overnight stay in hotel"
      ]
    },
    {
      day: 4,
      title: "Meals: Breakfast & Lunch",
      activities: [
        "Breakfast at hotel and check-out",
        "Lunch at Indian restaurant",
        "Transfer to airport for departure"
      ]
    }
  ],
  inclusions: [
    "03N stay in Hotel (Club Mahindra Assanora Resort or Similar, double occupancy with breakfast)",
    "03 Breakfasts at hotel (except arrival day)",
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
    pricef: "INR 13664 + 12288 == INR 25952 Approx",
    onward: "Indigo-- Baggage (30kgs + 7kgs) 11 Aug 2025: Bangalore 06.15 // Phuket 11.35 == INR 13664 approx",
    return: "Indigo-- Baggage (30kgs + 7kgs) 14 Aug 2025: Phuket 12.45 // Bangalore 14.50 == INR 12288 approx"
  }
}


];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
 {/* Collaborative Hero Section */}
<div className="relative flex items-center justify-center bg-gradient-to-r from-blue-700 to-green-600 text-white py-20">
  {/* Logos */}
 <div className="absolute top-6 left-6 flex items-center space-x-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
  <img src="/images/image.png" alt="Star Health" className="h-14 w-auto object-contain" />
  <span className="text-white text-xl font-semibold">×</span>
  <img src="/images/stt.jpg" alt="Sangeetha Holidays" className="h-14 w-auto object-contain" />
</div>


  {/* Hero Copy with Perks Button */}
  <div className="text-center px-4">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
      A Journey Together
    </h1>
    <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto opacity-90">
      Star Health & Sangeethaholidays join forces to deliver exclusive trips crafted just for Star Health employees.
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
            Employee Perks Gallery
          </DialogTitle>
        </DialogHeader>
        <PerksCarousel />
      </DialogContent>
    </Dialog>
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
                              <Plane className="w-8 h-8 text-orange-600 mx-auto mb-2" />
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
      <h5 className="font-semibold text-blue-600 mb-2">Outward Flight:</h5>
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
                            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                              Book This Tour - {tour.price}
                            </Button>
                            <p className="text-sm text-gray-600 mt-3">
                              Gst and TCS applicable 5% each!
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
    <h3 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h3>
    <p className="text-xl text-gray-300 mb-8">Contact us to customize your perfect travel experience</p>
    <Button
      size="lg"
      className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full"
    >
      Contact Us
    </Button>
  </div>
</footer>

    </div>
  );
};

export default Index;
