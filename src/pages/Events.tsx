import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Film, Crown, Bus, Camera, Music, Calendar as CalendarIcon, Trophy, UtensilsCrossed, Flag, Mic2, Guitar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Events = () => {
  const events = [
    {
      title: "Film Festivals",
      icon: Film,
      date: "TBA",
      time: "TBA",
      location: "JU Auditorium",
      description: "Showcasing student films and cinematic excellence",
      emoji: "🎬"
    },
    {
      title: "RAG KING & QUEEN ELECTION",
      icon: Crown,
      date: "TBA",
      time: "TBA",
      location: "Main Campus",
      description: "Vote for the most charismatic personalities of the batch",
      emoji: "👑"
    },
    {
      title: "Rag Tour",
      icon: Bus,
      date: "TBA",
      time: "TBA",
      location: "Various Locations",
      description: "A memorable journey with the entire batch",
      emoji: "🚌"
    },
    {
      title: "Photography Exhibition",
      icon: Camera,
      date: "TBA",
      time: "TBA",
      location: "Art Gallery",
      description: "Capturing moments that defined our journey",
      emoji: "📸"
    },
    {
      title: "Cultural Night",
      icon: Music,
      date: "TBA",
      time: "TBA",
      location: "Central Field",
      description: "An evening of music, dance, and performances",
      emoji: "🎭"
    },
    {
      title: "Weekend Programs",
      icon: CalendarIcon,
      date: "TBA",
      time: "TBA",
      location: "Campus Grounds",
      description: "Fun activities and bonding sessions",
      emoji: "🎪"
    },
    {
      title: "Sports Carnival",
      icon: Trophy,
      date: "TBA",
      time: "TBA",
      location: "Sports Complex",
      description: "Competitive sports and friendly matches",
      emoji: "⚽"
    },
    {
      title: "Grand Food Fest",
      icon: UtensilsCrossed,
      date: "TBA",
      time: "TBA",
      location: "Food Court Area",
      description: "A culinary celebration with diverse cuisines",
      emoji: "🍽️"
    },
    {
      title: "RAG Rally",
      icon: Flag,
      date: "TBA",
      time: "TBA",
      location: "Campus to City",
      description: "The grand procession through campus and city",
      emoji: "🎉"
    },
    {
      title: "Kawali Night",
      icon: Mic2,
      date: "TBA",
      time: "TBA",
      location: "Open Air Theatre",
      description: "Traditional qawwali music performance",
      emoji: "🎵"
    },
    {
      title: "Mega Concert Night",
      icon: Guitar,
      date: "TBA",
      time: "TBA",
      location: "Main Stage",
      description: "The grand finale with live performances",
      emoji: "🎸"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">RAG Events</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Celebrate with us through these amazing events
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2 text-center">{event.emoji}</div>
                  <CardTitle className="text-xl text-center">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-center mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Don't Miss Out Section */}
          <Card className="bg-primary/5 border-primary/20 mb-12">
            <CardContent className="pt-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Register now to participate in all these exciting events and be part of the RAG 45 celebration.
              </p>
              <Link to="/registration">
                <Button size="lg">Register for Events</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Event Highlights */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Event Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="https://ragju45-bualmmwe.manus.space/FB_IMG_1761996137122.jpg" 
                alt="Event Highlight"
                className="w-full rounded-lg shadow-lg"
              />
              <img 
                src="https://ragju45-bualmmwe.manus.space/FB_IMG_1761996233636.jpg" 
                alt="Event Highlight"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
