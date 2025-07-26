import { Github, Linkedin, Mail, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <img
                src="https://res.cloudinary.com/dgl0v7vwf/image/upload/v1753530190/me_cve22f.jpg"
                alt="Profile"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Viswateja Tummala
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90">
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting digital experiences with modern technologies. 
            Passionate about building scalable applications that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-12">
            <Button size="lg" variant="secondary" className="group" asChild>
              <a href="https://drive.google.com/file/d/14Fp3TxYuNfm1hHFUGcpI8n_9yCbh8scb/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                View Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/viswa15"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/viswateja-tummala/"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:viswatejatummala@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}