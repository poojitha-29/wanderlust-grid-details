
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, MapPin, Users, Plane, Clock, Star } from 'lucide-react';

const Index = () => {
  const [selectedTour, setSelectedTour] = useState(null);

  const tourPackages = [
    {
      id: 1,
      title: "Singapore Adventure",
      destination: "Singapore 3N/4D",
      price: "INR 58000",
      discount: "5% discount",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      rating: 4.8,
      duration: "4 Days 3 Nights",
      travelers: "34 PAX minimum",
      travelDate: "05th Aug 2025 to 08th Aug 2025",
      highlights: ["Universal Studios", "Sentosa Island", "Gardens by the Bay", "Marina Bay Sands"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & City Tour",
          activities: [
            "Board Flight at 10.25am, with packed lunch",
            "Arrival at changi airport at 6PM",
            "Pickup and proceed to hotel – check-in Room",
            "City tour of Singapore",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 2,
          title: "Sentosa Island Adventure",
          activities: [
            "Morning breakfast at hotel",
            "Proceed to City tour",
            "Afternoon Lunch at Indian Restaurant",
            "Sentosa (Cable car 1 Way + Mt ( Sirl ) + Wings of the time 1st Show)",
            "Evening Dinner at Indian restaurant",
            "Overnight stay at hotel"
          ]
        },
        {
          day: 3,
          title: "Universal Studios",
          activities: [
            "Morning breakfast at hotel",
            "Universal Studios ( Normal Ticket) with 20Sgd Meal Coupon",
            "Night Dinner at Indian restaurant",
            "Overnight stay at hotel"
          ]
        }
      ],
      inclusions: [
        "4* Grand Central or Similar Hotel (double occupancy with breakfast)",
        "All meals as per itinerary",
        "Airport transfers",
        "Sightseeing as per itinerary",
        "Professional tour guide"
      ],
      flightDetails: {
        outward: "Bangalore (10hrs+ 47hrs) 05 Aug 2025: Bangalore 10.25 // Singapore 17.40",
        return: "Singapore Airlines( Non refundable 25Kg+ 7Kg) 08Aug 2025: Singapore 20.05 // Bangalore 21.50"
      }
    },
    {
      id: 2,
      title: "Maldives Paradise",
      destination: "Maldives 5N/6D",
      price: "INR 85000",
      discount: "10% discount",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=300&fit=crop",
      rating: 4.9,
      duration: "6 Days 5 Nights",
      travelers: "20 PAX minimum",
      travelDate: "15th Sep 2025 to 20th Sep 2025",
      highlights: ["Overwater Bungalows", "Snorkeling", "Sunset Cruise", "Spa Treatments"],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Resort Check-in",
          activities: [
            "Flight departure from Bangalore",
            "Arrival at Male Airport",
            "Seaplane transfer to resort",
            "Resort check-in and welcome drink",
            "Evening leisure at beach"
          ]
        }
      ],
      inclusions: [
        "5* Resort accommodation",
        "All meals included",
        "Airport and seaplane transfers",
        "Water sports activities",
        "Sunset cruise"
      ],
      flightDetails: {
        outward: "Bangalore to Male via Colombo",
        return: "Male to Bangalore via Colombo"
      }
    },
    {
      id: 3,
      title: "Thailand Explorer",
      destination: "Thailand 4N/5D",
      price: "INR 42000",
      discount: "8% discount",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      rating: 4.7,
      duration: "5 Days 4 Nights",
      travelers: "25 PAX minimum",
      travelDate: "10th Oct 2025 to 14th Oct 2025",
      highlights: ["Bangkok City Tour", "Floating Markets", "Thai Massage", "Temple Visits"],
      itinerary: [
        {
          day: 1,
          title: "Bangkok Arrival",
          activities: [
            "Arrival at Bangkok Airport",
            "Hotel check-in",
            "Evening at Khao San Road",
            "Welcome dinner"
          ]
        }
      ],
      inclusions: [
        "4* Hotel accommodation",
        "Daily breakfast",
        "Airport transfers",
        "City tours with guide",
        "Traditional Thai dinner"
      ],
      flightDetails: {
        outward: "Bangalore to Bangkok direct flight",
        return: "Bangkok to Bangalore direct flight"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover Amazing
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Destinations
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Embark on unforgettable journeys with our carefully curated travel packages
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            Explore Tours
          </Button>
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

                          {/* Flight Details */}
                          <div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-4">Flight Details</h4>
                            <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                              <div>
                                <h5 className="font-semibold text-blue-600 mb-2">Outward Flight:</h5>
                                <p className="text-gray-700">{tour.flightDetails.outward}</p>
                              </div>
                              <div>
                                <h5 className="font-semibold text-blue-600 mb-2">Return Flight:</h5>
                                <p className="text-gray-700">{tour.flightDetails.return}</p>
                              </div>
                            </div>
                          </div>

                          {/* Book Now Button */}
                          <div className="text-center pt-6">
                            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                              Book This Tour - {tour.price}
                            </Button>
                            <p className="text-sm text-gray-600 mt-3">
                              Special {tour.discount} available for limited time!
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
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Ready for Your Next Adventure?</h3>
            <p className="text-xl text-gray-300 mb-8">Contact us to customize your perfect travel experience</p>
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 rounded-full">
              Contact Us
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
