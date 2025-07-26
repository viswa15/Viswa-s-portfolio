import { 
  Code, 
  Database, 
  Server, 
  Settings,
  BookOpen,
  User
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C++", "Java"]
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Socket.io", "Tailwind CSS", "Redux-Toolkit","Zustand","Socket.io"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Databases",
      skills: ["MongoDB", "SQLite", "PostgreSQL", "MySQL"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VSCode", "Postman", "Render", "WebStorm", "Cursor"]
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Concepts & Practices",
      skills: ["Low-Level-Design(LLD)","Data Structures", "OS", "Computer Networks", "OOP", "REST APIs", "MVC", "Debugging", "Logging"]
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Soft Skills",
      skills: ["Adaptability", "Time Management", "Analytical Thinking"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the entire stack.
          </p>
        </div>

        <div className="relative px-12 md:px-16">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {skillCategories.map((category, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="group relative">
                    <Card className="relative overflow-hidden bg-gradient-to-br from-card via-card to-card/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -m-px" />
                      
                      <CardContent className="relative p-8 text-center h-full flex flex-col z-10">
                        {/* Icon container with enhanced styling */}
                        <div className="relative mb-8">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 scale-150" />
                          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 text-primary border border-primary/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 mx-auto">
                            <div className="absolute inset-2 rounded-full bg-background/50 backdrop-blur-sm" />
                            <div className="relative z-10">
                              {category.icon}
                            </div>
                          </div>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors duration-300 relative">
                          {category.title}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-500" />
                        </h3>
                        
                        {/* Skills with enhanced styling */}
                        <div className="flex flex-wrap justify-center gap-3 flex-grow">
                          {category.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary"
                              className="relative overflow-hidden bg-background/80 text-foreground border border-border/50 hover:border-primary/50 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default text-xs font-medium px-3 py-1.5 backdrop-blur-sm"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                              <span className="relative z-10">{skill}</span>
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Enhanced navigation buttons */}
            <CarouselPrevious className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-background/80 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300" />
            <CarouselNext className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-background/80 border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg backdrop-blur-sm transition-all duration-300" />
          </Carousel>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-tl from-secondary/10 to-primary/10 rounded-full blur-3xl -z-10" />
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            Always learning and staying up-to-date with the latest technologies
          </p>
          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm">Currently exploring new frameworks and tools</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}