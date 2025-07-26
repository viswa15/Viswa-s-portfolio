import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-foreground mb-2">Alex Morgan</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com"
              className="p-2 rounded-lg bg-background hover:bg-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-2 rounded-lg bg-background hover:bg-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-2 rounded-lg bg-background hover:bg-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center space-x-1">
            <span>© {currentYear} Alex Morgan. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}