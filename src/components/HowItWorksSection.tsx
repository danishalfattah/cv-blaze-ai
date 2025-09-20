import { Card } from "@/components/ui/card";
import { 
  FileEdit, 
  BarChart, 
  MessageCircle, 
  Trophy,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: FileEdit,
      title: "Buat CV Profesional",
      description: "Pilih template yang sesuai dan isi informasi Anda dengan bantuan AI assistant kami.",
      features: ["Template ATS-Optimized", "AI Content Suggestions", "Real-time Formatting"]
    },
    {
      step: "02", 
      icon: BarChart,
      title: "Analisis & Optimasi",
      description: "Dapatkan skor ATS dan rekomendasi untuk meningkatkan kualitas CV Anda.",
      features: ["ATS Score Analysis", "Keyword Optimization", "Industry Standards"]
    },
    {
      step: "03",
      icon: MessageCircle,
      title: "Latihan Wawancara",
      description: "Praktik wawancara dengan AI yang disesuaikan dengan posisi target Anda.",
      features: ["Personalized Questions", "Performance Feedback", "Progress Tracking"]
    },
    {
      step: "04",
      icon: Trophy,
      title: "Siap Berkarir",
      description: "CV yang telah dioptimasi dan kemampuan wawancara yang terasah siap untuk melamar pekerjaan.",
      features: ["Professional CV", "Interview Confidence", "Career Success"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-4 py-2 mb-4">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-success font-medium">Cara Kerja</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            4 Langkah Menuju <span className="text-gradient-accent">Karir Impian</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proses yang sederhana namun efektif untuk mempersiapkan Anda menghadapi dunia kerja modern.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-gradient-primary opacity-20">
                      {step.step}
                    </div>
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Card */}
                <div className="flex-1 w-full">
                  <Card className="card-gradient p-8 h-80 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                      <div className="text-4xl font-bold text-gradient-primary">
                        {step.step}
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
                  </Card>
                </div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 translate-y-8">
                    <ArrowRight className="w-8 h-8 text-primary/30 rotate-90" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-hero rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">
              Siap Memulai Perjalanan Anda?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Bergabunglah dengan ribuan profesional yang telah berhasil meningkatkan karir mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors">
                Mulai Gratis Sekarang
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Lihat Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;