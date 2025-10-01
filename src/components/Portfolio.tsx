import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';

const projects = [
  {
    title: 'Local Restaurant Website',
    description: 'Complete website redesign with online ordering system and modern UI/UX.',
    image: portfolio1,
    category: 'Website Design',
  },
  {
    title: 'E-commerce Fashion Store',
    description: 'Responsive e-commerce platform with payment integration and inventory management.',
    image: portfolio2,
    category: 'E-commerce',
  },
  {
    title: 'Professional Services Brand',
    description: 'Complete branding package including logo, colors, and marketing materials.',
    image: portfolio1,
    category: 'Branding',
  },
  {
    title: 'Social Media Campaign',
    description: 'Increased engagement by 300% through strategic content and community management.',
    image: portfolio2,
    category: 'Social Media',
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence and achieve their goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card rounded-xl overflow-hidden shadow-custom hover:shadow-xl transition-smooth border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-smooth" />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <Button variant="outline" size="sm" className="group">
                  View Project
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};