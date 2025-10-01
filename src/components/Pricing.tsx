import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    name: 'Starter',
    subtitle: 'Free Demo',
    price: 'Free',
    description: 'Perfect for getting started and seeing our value',
    features: [
      'Free consultation call',
      'Basic landing page demo',
      'Design mockup review',
      'No commitment required',
      'Email support',
    ],
    highlighted: false,
    ctaText: 'Get Free Demo',
  },
  {
    name: 'Growth',
    subtitle: 'Most Popular',
    price: '₹15,000',
    description: 'Complete digital solution for growing businesses',
    features: [
      'Custom website design',
      'Mobile responsive',
      'Basic SEO optimization',
      'Contact forms integration',
      '3 months support',
      'Social media setup',
    ],
    highlighted: true,
    ctaText: 'Get Started',
  },
  {
    name: 'Pro',
    subtitle: 'Full Package',
    price: '₹25,000',
    description: 'Everything you need for digital success',
    features: [
      'Everything in Growth',
      'E-commerce functionality',
      'Advanced SEO package',
      'Google Analytics setup',
      '6 months support',
      'Brand identity design',
      'Social media management',
    ],
    highlighted: false,
    ctaText: 'Go Pro',
  },
];

export const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your business needs. Start with our free demo 
            and see the difference we can make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-8 shadow-custom transition-smooth hover:shadow-xl border ${
                pkg.highlighted
                  ? 'border-primary shadow-glow scale-105 lg:scale-110'
                  : 'hover:-translate-y-2'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    {pkg.subtitle}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                {!pkg.highlighted && (
                  <p className="text-sm text-muted-foreground mb-4">{pkg.subtitle}</p>
                )}
                <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.highlighted ? 'cta' : 'default'}
                size="lg"
                className="w-full"
                onClick={scrollToContact}
              >
                {pkg.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};