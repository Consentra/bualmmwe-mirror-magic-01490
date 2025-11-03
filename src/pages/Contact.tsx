import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Get in touch with the RAG 45 team
          </p>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Have questions about RAG 45? Need assistance with registration? Feel free to reach out to us through any of the following channels.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:contact@rag.ju45th.com" className="text-muted-foreground hover:text-primary">
                        contact@rag.ju45th.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:01997488040" className="text-muted-foreground hover:text-primary">
                        01997488040
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">
                        Rag Building<br />
                        Jahangirnagar University<br />
                        Savar, Dhaka 1342
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Saturday - Thursday</p>
                      <p className="text-muted-foreground">10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Friday</p>
                      <p className="text-muted-foreground">Closed</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    For urgent matters outside office hours, please email us and we'll respond as soon as possible.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Address Image */}
            <div className="space-y-6">
              <img 
                src="https://ragju45-bualmmwe.manus.space/SmartSelect_20251031_114826_Gallery.jpg" 
                alt="Address in Bengali"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Find Us Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
            <div className="w-full rounded-lg shadow-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.0891234567890!2d90.26583!3d23.8809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755ebd3d6df9569%3A0x277b3819d4da3e93!2sJahangirnagar%20University!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jahangirnagar University Location"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
