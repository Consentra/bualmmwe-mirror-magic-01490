import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullNameEnglish: "",
    fullNameBangla: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    bloodGroup: "",
    tshirtSize: "",
    registrationNumber: "",
    department: "",
    hall: "",
    email: "",
    phone: "",
    nidNumber: "",
    presentAddress: "",
    presentOccupation: "",
    category: "",
    paymentConfirmation: "",
    agreeTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      toast({
        title: "Please agree to terms",
        description: "You must agree to the terms and conditions to register.",
        variant: "destructive"
      });
      return;
    }

    // Create email body with all form data
    const emailBody = `
RAG 45 Registration Form

PERSONAL INFORMATION:
Full Name (English): ${formData.fullNameEnglish}
Full Name (বাংলায়): ${formData.fullNameBangla}
Father's Name: ${formData.fatherName}
Mother's Name: ${formData.motherName}
Date of Birth: ${formData.dateOfBirth}
Blood Group: ${formData.bloodGroup}
T-shirt Size: ${formData.tshirtSize}

ACADEMIC INFORMATION:
Registration Number: ${formData.registrationNumber}
Department: ${formData.department}
Hall: ${formData.hall}

CONTACT INFORMATION:
Email: ${formData.email}
Phone: ${formData.phone}
NID Number: ${formData.nidNumber}
Present Address: ${formData.presentAddress}
Present Occupation: ${formData.presentOccupation}

EVENT DETAILS:
Category: ${formData.category}
Payment Confirmation: ${formData.paymentConfirmation}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:ragju45@gmail.com?subject=RAG 45 Registration - ${formData.fullNameEnglish}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Opening Email Client",
      description: "Please send the email from your email client to complete registration.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const departments = [
    "Accounting & Information Systems", "Anthropology", "Archaeology", "Bangla",
    "Biochemistry & Molecular Biology", "Botany", "Chemistry", "Computer Science & Engineering",
    "Drama & Dramatics", "Economics", "English", "Environmental Sciences", "Film & Media Studies",
    "Finance & Banking", "Geography & Environment", "Geology", "Government & Politics",
    "History", "International Relations", "Journalism & Media Studies", "Management Studies",
    "Marketing", "Mathematics", "Microbiology", "Pharmacy", "Philosophy", "Physics",
    "Psychology", "Public Administration", "Public Health", "Sociology", "Statistics",
    "Urban & Regional Planning", "Zoology"
  ];

  const halls = [
    "Maulana Bhashani Hall", "A.F. Rahman Hall", "Mir Mosharraf Hossain Hall",
    "Shaheed Salam Barkat Hall", "Bangabandhu Sheikh Mujibur Rahman Hall",
    "Shaheed Rafiq Jabbar Hall", "Pritilata Hall", "Fazilatunnesa Hall",
    "Jahanara Imam Hall", "Begum Khaleda Zia Hall", "Sheikh Hasina Hall",
    "Bangamata Sheikh Fazilatunnesa Mujib Hall", "Day Student"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">Registration</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Join the RAG 45 Celebration
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">RAG 45 Registration Form</CardTitle>
              <p className="text-center text-muted-foreground">
                Final Call for Rag Day Registration! Fill out the form below to confirm your participation.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullNameEnglish">Full Name (English) *</Label>
                      <Input
                        id="fullNameEnglish"
                        name="fullNameEnglish"
                        value={formData.fullNameEnglish}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fullNameBangla">Full Name (বাংলায়) *</Label>
                      <Input
                        id="fullNameBangla"
                        name="fullNameBangla"
                        value={formData.fullNameBangla}
                        onChange={handleChange}
                        required
                        placeholder="আপনার পুরো নাম লিখুন"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fatherName">Father's Name *</Label>
                      <Input
                        id="fatherName"
                        name="fatherName"
                        value={formData.fatherName}
                        onChange={handleChange}
                        required
                        placeholder="Enter father's name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="motherName">Mother's Name *</Label>
                      <Input
                        id="motherName"
                        name="motherName"
                        value={formData.motherName}
                        onChange={handleChange}
                        required
                        placeholder="Enter mother's name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bloodGroup">Blood Group *</Label>
                      <Select value={formData.bloodGroup} onValueChange={(value) => handleSelectChange("bloodGroup", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A+">A+</SelectItem>
                          <SelectItem value="A-">A-</SelectItem>
                          <SelectItem value="B+">B+</SelectItem>
                          <SelectItem value="B-">B-</SelectItem>
                          <SelectItem value="AB+">AB+</SelectItem>
                          <SelectItem value="AB-">AB-</SelectItem>
                          <SelectItem value="O+">O+</SelectItem>
                          <SelectItem value="O-">O-</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tshirtSize">T-shirt Size *</Label>
                      <Select value={formData.tshirtSize} onValueChange={(value) => handleSelectChange("tshirtSize", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="S">S</SelectItem>
                          <SelectItem value="M">M</SelectItem>
                          <SelectItem value="L">L</SelectItem>
                          <SelectItem value="XL">XL</SelectItem>
                          <SelectItem value="XXL">XXL</SelectItem>
                          <SelectItem value="XXXL">XXXL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Academic Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Academic Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber">Registration Number *</Label>
                    <Input
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      required
                      placeholder="Enter registration number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select value={formData.department} onValueChange={(value) => handleSelectChange("department", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hall">Hall *</Label>
                    <Select value={formData.hall} onValueChange={(value) => handleSelectChange("hall", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select hall" />
                      </SelectTrigger>
                      <SelectContent>
                        {halls.map((hall) => (
                          <SelectItem key={hall} value={hall}>{hall}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+880 1XXX-XXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="nidNumber">NID Number *</Label>
                    <Input
                      id="nidNumber"
                      name="nidNumber"
                      value={formData.nidNumber}
                      onChange={handleChange}
                      required
                      placeholder="Enter NID number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="presentAddress">Present Address *</Label>
                    <Input
                      id="presentAddress"
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleChange}
                      required
                      placeholder="Enter your present address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="presentOccupation">Present Occupation (If Any)</Label>
                    <Input
                      id="presentOccupation"
                      name="presentOccupation"
                      value={formData.presentOccupation}
                      onChange={handleChange}
                      placeholder="Enter your current occupation"
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Event Details</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Alumni">Alumni</SelectItem>
                        <SelectItem value="Guest">Guest</SelectItem>
                        <SelectItem value="Volunteer">Volunteer</SelectItem>
                        <SelectItem value="Organizer">Organizer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="paymentConfirmation">Payment Confirmation Number</Label>
                    <Input
                      id="paymentConfirmation"
                      name="paymentConfirmation"
                      value={formData.paymentConfirmation}
                      onChange={handleChange}
                      placeholder="Enter payment confirmation number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="photoUpload">Upload Image (for Event Ticket)</Label>
                    <p className="text-sm text-muted-foreground mb-2">Upload a passport-size photo for your event ticket</p>
                    <Input
                      id="photoUpload"
                      name="photoUpload"
                      type="file"
                      accept="image/*"
                    />
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox 
                      id="agreeTerms" 
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="agreeTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
                        I agree to the terms and conditions
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        I confirm that all information provided is accurate and I agree to participate in RAG 45 events. 
                        This registration ensures proper allocation of commemorative gifts and inclusion in all batch-specific programs.
                      </p>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Registration
                </Button>
              </form>

              {/* Important Notice */}
              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-3">Important Notice</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• This registration is mandatory for every member of the 45th batch</li>
                  <li>• Ensures accurate attendance for the main event and farewell ceremony</li>
                  <li>• Proper allocation of your commemorative gifts and memorabilia</li>
                  <li>• Inclusion in all batch-specific programs and festivities</li>
                  <li>• Please complete the form accurately and thoroughly</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
