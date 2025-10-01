import { Globe, Palette, Share2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Design & Fixes',
    description: 'Custom websites and quick fixes to improve your online presence and user experience.',
  },
  {
    icon: Palette,
    title: 'Branding & Logo Design',
    description: 'Professional branding solutions to help your business stand out and build trust.',
  },
  {
    icon: Share2,
    title: 'Social Media Presence',
    description: 'Strategic social media management to engage your audience and grow your following.',
  },
  {
    icon: TrendingUp,
    title: 'SEO & Visibility',
    description: 'Boost your search rankings and online visibility to reach more potential customers.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business succeed online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card p-6 rounded-xl shadow-custom hover:shadow-xl transition-smooth hover:-translate-y-2 border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};