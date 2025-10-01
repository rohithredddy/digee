import { Users, Award, Clock, Heart } from 'lucide-react';
import teamImage from '@/assets/team-illustration.jpg';

const stats = [
  {
    icon: Users,
    value: '20+',
    label: 'Happy Clients',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Projects Completed',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Support Available',
  },
  {
    icon: Heart,
    value: '99.5%',
    label: 'Client Satisfaction',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who <span className="text-gradient">We Are</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              We are a small team of final-year B.Tech students passionate about helping 
              local businesses with their digital presence. We believe in proving our value 
              first, starting with free landing pages and affordable services.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our mission is to bridge the gap between traditional businesses and the digital 
              world, making professional web services accessible to everyone, regardless of budget.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 bg-card rounded-lg shadow-custom border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={teamImage}
                alt="Our team of passionate B.Tech students working together on digital projects"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};