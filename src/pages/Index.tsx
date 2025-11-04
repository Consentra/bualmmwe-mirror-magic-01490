import { Link } from "react-router-dom";
import { Calendar, Users, Mail, FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroBg from "@/assets/hero-bg.jpg";
import campus1 from "@/assets/campus1.jpg";
import campus2 from "@/assets/campus2.jpg";
import campus3 from "@/assets/campus3.jpg";
import campus4 from "@/assets/campus4.jpg";

const Index = () => {
  // Set a target date for the countdown (you can modify this)
  const targetDate = new Date("2025-12-31T23:59:59");

  const quickLinks = [
    {
      icon: FileText,
      title: "Registration",
      description: "Join the celebration",
      path: "/registration",
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Explore our programs",
      path: "/events",
    },
    {
      icon: Users,
      title: "Team",
      description: "Meet the organizers",
      path: "/team",
    },
    {
      icon: Mail,
      title: "Contact",
      description: "Get in touch",
      path: "/contact",
    },
  ];

  const campusImages = [
    { src: campus1, alt: "JU Campus 1" },
    { src: campus2, alt: "JU Campus 2" },
    { src: campus3, alt: "Graduation" },
    { src: campus4, alt: "Inspirational Quote" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(52, 168, 83, 0.85), rgba(46, 125, 50, 0.75), rgba(67, 160, 71, 0.85)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        
        <div className="relative z-10 text-center px-4 py-20 max-w-5xl mx-auto mt-20">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 drop-shadow-lg">
            RAG 45
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary-foreground mb-6 drop-shadow-md">
            Jahangirnagar University
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/95 mb-12 drop-shadow-md font-medium">
            উৎসবে আর ক্রন্দনে, থাক পঁয়তাল্লিশ বন্ধনে
          </p>
          
          <div className="mb-12">
            <CountdownTimer targetDate={targetDate} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/registration">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Register Now
              </Button>
            </Link>
            <Link to="/events">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                View Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Welcome to RAG 45
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed mb-16">
            The 45th Batch of Jahangirnagar University represents the fusion of intellect, art, and activism that defines JU's culture. Our rag celebration — RAG JU 45 — is more than an event; it's a tribute to friendship, creativity, and the unforgettable spirit of student life.
          </p>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
            We've created this website to share our story, connect batchmates, and showcase our collective energy through events, photography, theatre, and memories that will last beyond campus life.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={index} to={link.path}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{link.title}</h3>
                      <p className="text-muted-foreground">{link.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Campus Memories Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Campus Memories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {campusImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] aspect-video"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
