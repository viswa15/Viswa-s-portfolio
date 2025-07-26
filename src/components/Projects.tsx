import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: "Chatty - A Real Time Chat Application",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Zustand","Tailwind CSS","Cloudinary","Daisy UI","Render","JWT"],
      github: "https://github.com/viswa15/Chat-Application.git",
      live: "https://chat-application-4aox.onrender.com/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742454050/Screenshot_2025-03-20_123031_l3abc9.png",
      category : "Full Stack"
    },
    {
      title: "BeMyGuest - A Wedding Guest Booking Service",
      description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React.js", "Material UI", "Node.js", "Express.js", "MongoDB", "Stripe","Render"],
      github: "https://github.com/viswa15/Chat-Application.git",
      live: "https://bemyguest-8bla.onrender.com/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742450171/Screenshot_2025-03-20_112555_nuequs.png",
      category : "Full Stack"
    },
    {
      title: "EigenLayer Restaking API",
      description: "Interactive weather application with location-based forecasts, historical data visualization, and responsive design.",
      technologies: ["Node.js", "ether.js", "MongoDB", "Express.js","Render"],
      github: "https://github.com/viswa15/EigenLayer-Restaking-API.git",
      live: "",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1753526771/iubrmbszsabubaiv68ma.jpg",
      category : "Backend"
    },
    {
      title: "Advanced Authentication API",
      description: "Analytics platform for social media metrics with data visualization, automated reporting, and multi-platform integration.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Zustand", "Render", "JWT", "Nodemailer"],
      github: "https://github.com/viswa15/Authentication-App",
      live: "",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742449341/screenshot-for-readme_odqug7.png",
      category : "Backend"
    },
    {
      title: "Blogs Management System",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["Node.js", "MongoDB", "Express.js", "Nodemailer"],
      github: "https://github.com/viswa15/Blogs-Management-API.git",
      live: "",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1753526600/dadqnouvncrb3did6qdy.png",
      category : "Backend"
    },
    {
      title: "Emoji Game",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "CSS"],
      github: "https://github.com/viswa15/Emoji-Game.git",
      live: "https://emojigametvt.ccbp.tech/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742454385/68747470733a2f2f6173736574732e636362702e696e2f66726f6e74656e642f636f6e74656e742f72656163742d6a732f656d6f6a692d67616d652d6f75747075742d76322e676966_tgtiyu.gif",
      category : "Frontend"
    },
    {
      title: "NxtTrendz - A E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "Node.js", "Express.js", "Cookies", "SQlite"],
      github: "https://github.com/viswa15/Nxt-trendz.git",
      live: "https://tvtnxttrendz.ccbp.tech/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742450389/Screenshot_2025-03-20_112934_bpo34e.png",
      category : "Full Stack"
    },
    {
      title: "NxtWatch - A Video Streaming Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "Node.js", "Express.js", "Cookies", "SQlite"],
      github: "https://github.com/viswa15/Nxt-Watch.git",
      live: "https://viswanxtwatch.ccbp.tech/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742450236/Screenshot_2025-03-20_112703_z6nlgw.png",
      category : "Full Stack"
    },
    {
      title: "Jobby App - A Job Portal",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["React", "Node.js", "Express.js", "Cookies", "SQlite"],
      github: "https://github.com/viswa15/jobby-app.git",
      live: "https://tvtsjobbyapp.ccbp.tech/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1742450314/Screenshot_2025-03-20_112807_nnkav6.png",
      category : "Full Stack"
    },
    {
      title: "Speed Typing Game",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["HTML","CSS","Javascript"],
      github: "https://github.com/viswa15/Speed-Typing-Test.git",
      live: "https://viswatypingtest.ccbp.tech/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1690538493/typing_test_scw3zi.jpg",
      category : "Frontend"
    },
    {
      title: "Airport Information API",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["Node.js", "SQLite", "Express.js", "csvtojson","RESTAPI","TypeORM"],
      github: "https://github.com/viswa15/Airport-Information-API.git",
      live: "",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1753526523/images_ybnkfe.jpg",
      category : "Backend"
    },
    {
      title: "World Around You",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order tracking.",
      technologies: ["HTML","CSS","Javascript"],
      github: "https://github.com/viswa15/World-around-you.git",
      live: "https://viswawikiglobe.ccbp.tech/",
      image: "https://res.cloudinary.com/dgl0v7vwf/image/upload/v1690539492/wikiglobe_u8f78y.jpg",
      category : "Frontend"
    },
  ];

  const categories = ['All', 'Full Stack', 'Backend', 'Frontend'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of recent projects demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center md:justify-between bg-card rounded-xl p-4 shadow-glow w-full max-w-4xl gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200 px-8 py-3 text-base font-medium w-full md:w-40"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="px-4 md:px-16">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                skipSnaps: false,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-6">
                {filteredProjects.map((project, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    <Card className="group hover:shadow-glow transition-all duration-300 bg-card-gradient overflow-hidden h-full">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                            {(project.category !== "Backend") && (
                              <Button size="sm" variant="secondary" asChild>
                                <a href={project.live} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="h-4 w-4 mr-2" />
                                  Live Demo
                                </a>
                              </Button>
                            )}
                            
                            <Button size="sm" variant="secondary" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-lg md:text-xl text-card-foreground">{project.title}</CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 bg-background/80 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300 z-10" />
              <CarouselNext className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 bg-background/80 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300 z-10" />
            </Carousel>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-full blur-3xl -z-10" />
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}