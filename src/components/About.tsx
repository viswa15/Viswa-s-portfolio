import { Code, Database, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full Stack Development",
      description: "End-to-end web applications using React.js, Node.js, and Express.js with modern development practices."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Express.js, and Socket.io."
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React.js, Tailwind CSS, and Redux-Toolkit."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Software Architecture",
      description: "Implementing MVC patterns, OOP principles, LLD (Low Level Design), and scalable system design with clean, maintainable code."
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate and detail-oriented Full Stack Developer with a strong foundation in building responsive, user-centric web applications. Proficient in technologies like React.js, Node.js, MongoDB, and Express.js, I thrive in creating scalable and efficient solutions. With hands-on experience in integrating REST APIs, managing authentication systems, and deploying real-time applications, I enjoy solving real-world problems through clean and maintainable code. I'm always eager to learn, collaborate, and contribute to impactful projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-card-gradient border-border">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-xl p-6 shadow-glow">
            <div className="text-left">
              <div className="text-xl font-semibold text-card-foreground">
                <span className="font-bold text-primary">Problem</span> Solver
              </div>
              <div className="text-sm text-muted-foreground">Through clean, efficient code</div>
            </div>
            <div className="w-px h-12 bg-border mx-4"></div>
            <div className="text-2xl font-bold text-primary">8+</div>
            <div className="text-left">
              <div className="font-semibold text-card-foreground">Personal Projects</div>
              <div className="text-sm text-muted-foreground">Built with passion & dedication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}