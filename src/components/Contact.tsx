import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "viswatejatummala@gmail.com",
      href: "mailto:viswatejatummala@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+91 7843841226",
      href: "tel:+917843841226"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Guntur, Andhra Pradesh, India",
      href: "#"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      'service_n67ozi5',      // e.g., 'service_xxxxx'
      'template_ummbtej',     // e.g., 'template_xxxxx'
      e.currentTarget,
      '9wc_kVBg8m0P6pNPa'       // e.g., 'user_xxxxx'
    )
    .then(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        variant: "default",
      });
      e.currentTarget.reset();
    }, (error) => {
      toast({
        title: "Failed to Send Message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
      console.error('EmailJS error:', error);
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Let's Start a Conversation
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, creative projects, 
                or just having a chat about technology and development.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-card-foreground">{info.title}</h4>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-glow">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Let's discuss a project" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button className="w-full" size="lg" type="submit" disabled={isSubmitting}>
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}