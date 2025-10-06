"use client";

import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function IntroductionSection() {
  return (
    <section className="py-20 px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(205, 127, 50, 0.1) 50px, rgba(205, 127, 50, 0.1) 52px)'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-accent">
                Добро пожаловать в мир, где история не начинается заново
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mb-6"></div>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Каждые два месяца наступает новая <span className="text-accent font-medium">Эра</span>, 
                но следы прошлого не исчезают бесследно. Великие цивилизации прошлого оставляют 
                после себя руины, артефакты и легенды, которые становятся фундаментом для будущего.
              </p>
              
              <p>
                Ваша крепость может стать частью этих легенд. Ваши решения определяют ход истории. 
                Ваши поступки <span className="text-primary font-medium">эхом отзываются в веках</span>.
              </p>
              
              <p className="text-xl font-medium text-foreground border-l-4 border-accent pl-6 py-4 bg-card/50 rounded-r">
                История продолжается. И вы — её часть.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1634138666283-a61fe12798cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwY29wcGVyJTIwbWVkaWV2YWwlMjBmb3J0cmVzc3xlbnwxfHx8fDE3NTcyNTQ1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ancient fortress"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Decorative Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur opacity-30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
