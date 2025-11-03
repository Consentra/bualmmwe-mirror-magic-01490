import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const convener = {
    name: "Syed Nur Mohammad",
    role: "Convener",
    image: "https://ragju45-bualmmwe.manus.space/23880.jpg"
  };

  const coConveners = [
    {
      name: "Md Zubayer Hossain",
      role: "Co-Convener",
      image: "https://ragju45-bualmmwe.manus.space/FB_IMG_1761996137122.jpg"
    },
    {
      name: "Md Rofikul Islam",
      role: "Co-Convener",
      image: "https://ragju45-bualmmwe.manus.space/FB_IMG_1761996233636.jpg"
    }
  ];

  const treasurer = {
    name: "Fardous Mahmud Neon",
    role: "Treasurer",
    image: "https://ragju45-bualmmwe.manus.space/FB_IMG_1761997353008.jpg"
  };

  const coTreasurers = [
    {
      name: "Al Imran",
      role: "Co-Treasurer",
      image: "https://ragju45-bualmmwe.manus.space/FB_IMG_1761997580750.jpg"
    },
    {
      name: "Emran Hossain",
      role: "Co-Treasurer",
      image: "https://ragju45-bualmmwe.manus.space/FB_IMG_1761998233696.jpg"
    },
    {
      name: "Nahid Hridoy",
      role: "Co-Treasurer",
      image: "https://ragju45-bualmmwe.manus.space/Hrid.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Team</h1>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            The organizers behind RAG 45
          </p>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Meet the dedicated team working tirelessly to make RAG 45 an unforgettable celebration. These individuals have taken the responsibility to organize and execute every aspect of this momentous event.
          </p>

          {/* Convener */}
          <div className="mb-12">
            <Card className="max-w-md mx-auto hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <img 
                  src={convener.image} 
                  alt={convener.name}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold mb-1">{convener.name}</h3>
                <p className="text-lg text-muted-foreground">{convener.role}</p>
              </CardContent>
            </Card>
          </div>

          {/* Co-Conveners */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Co-Conveners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coConveners.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Treasurer */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Treasurer</h2>
            <Card className="max-w-md mx-auto hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <img 
                  src={treasurer.image} 
                  alt={treasurer.name}
                  className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-1">{treasurer.name}</h3>
                <p className="text-muted-foreground">{treasurer.role}</p>
              </CardContent>
            </Card>
          </div>

          {/* Co-Treasurers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Co-Treasurers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coTreasurers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Thank You */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-4">Thank You</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A heartfelt thanks to all team members and volunteers who are working day and night to make RAG 45 a memorable celebration for the entire batch.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
