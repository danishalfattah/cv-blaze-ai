import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  BarChart3, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  Target,
  Brain
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Pembuat CV Terstruktur",
      description: "Template CV profesional yang dioptimalkan khusus untuk ATS dengan panduan langkah demi langkah.",
      highlights: ["20+ Template Premium", "ATS-Optimized", "Real-time Preview"],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Analisis ATS Mendalam",
      description: "Dapatkan skor ATS detail dengan rekomendasi spesifik untuk meningkatkan peluang lolos seleksi.",
      highlights: ["Skor Real-time", "Detail Analytics", "Improvement Tips"],
      color: "accent"
    },
    {
      icon: MessageSquare,
      title: "Simulasi Wawancara AI",
      description: "Latihan wawancara dengan AI yang disesuaikan dengan posisi dan pengalaman di CV Anda.",
      highlights: ["Personalized Questions", "Real Feedback", "Progress Tracking"],
      color: "success"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Fitur Unggulan</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tiga Pilar <span className="text-gradient-primary">CVJitu</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Platform lengkap untuk mempersiapkan karir impian Anda dengan teknologi AI terdepan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card 
                key={index} 
                className="card-glow p-8 text-center group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className={`
                  w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center 
                  ${feature.color === 'primary' ? 'bg-gradient-primary' : 
                    feature.color === 'accent' ? 'bg-gradient-accent' : 
                    'bg-gradient-to-br from-success to-success/80'}
                  group-hover:scale-110 transition-transform duration-300
                `}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                      <Sparkles className="w-3 h-3 text-accent" />
                      <span className="text-foreground/80">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="outline" 
                  className="group/btn border-primary/30 hover:bg-primary hover:text-primary-foreground"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-card rounded-2xl shadow-lg">
            <Brain className="w-8 h-8 text-primary" />
            <div className="text-left">
              <h3 className="font-semibold text-lg">Siap memulai perjalanan karir Anda?</h3>
              <p className="text-muted-foreground">Bergabung dengan 50,000+ profesional yang sudah merasakan manfaatnya</p>
            </div>
            <Button className="btn-hero-primary ml-4">
              Mulai Sekarang
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;