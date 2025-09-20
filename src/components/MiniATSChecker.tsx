import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, CheckCircle, AlertCircle, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MiniATSChecker = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<{
    score: number;
    suggestions: string[];
  } | null>(null);
  const [checksRemaining, setChecksRemaining] = useState(3);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf" || file.type.startsWith("image/")) {
        setUploadedFile(file);
        setAnalysisResult(null);
      } else {
        toast({
          title: "Format file tidak didukung",
          description: "Silakan upload file PDF atau gambar (JPG/PNG)",
          variant: "destructive",
        });
      }
    }
  };

  const analyzeCV = async () => {
    if (!uploadedFile || checksRemaining === 0) return;

    setIsAnalyzing(true);
    
    // Simulasi analisis CV
    setTimeout(() => {
      const mockScore = Math.floor(Math.random() * 30) + 65; // Score antara 65-95
      const mockSuggestions = [
        "Tambahkan kata kunci industri yang relevan",
        "Perbaiki format tanggal pengalaman kerja",
        "Sertakan metrics dan achievement yang terukur"
      ];

      setAnalysisResult({
        score: mockScore,
        suggestions: mockSuggestions.slice(0, 2)
      });
      
      setChecksRemaining(prev => prev - 1);
      setIsAnalyzing(false);
      
      toast({
        title: "Analisis selesai!",
        description: `CV Anda mendapat skor ATS ${mockScore}/100`,
      });
    }, 3000);
  };

  const resetChecker = () => {
    setUploadedFile(null);
    setAnalysisResult(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Coba Gratis Sekarang</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mini <span className="text-gradient-accent">ATS Checker</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload CV Anda dan dapatkan analisis ATS instant dengan saran perbaikan.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="card-glow p-8">
            {!uploadedFile ? (
              /* Upload Area */
              <div className="text-center">
                <div className="border-2 border-dashed border-primary/30 rounded-2xl p-12 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
                     onClick={() => document.getElementById('file-upload')?.click()}>
                  <Upload className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Upload CV Anda</h3>
                  <p className="text-muted-foreground mb-4">
                    Drag & drop atau klik untuk memilih file PDF atau gambar
                  </p>
                  <Button className="btn-hero-primary">
                    Pilih File
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    accept=".pdf,image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
                
                <div className="mt-6 p-4 bg-warning/10 rounded-lg">
                  <div className="flex items-center justify-center gap-2 text-warning font-medium">
                    <AlertCircle className="w-4 h-4" />
                    Sisa {checksRemaining} kali pengecekan tanpa login
                  </div>
                </div>
              </div>
            ) : (
              /* Analysis Area */
              <div className="space-y-6">
                {/* File Info */}
                <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg">
                  <FileText className="w-5 h-5 text-success" />
                  <span className="font-medium">{uploadedFile.name}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetChecker}
                    className="ml-auto"
                  >
                    Ganti File
                  </Button>
                </div>

                {/* Analysis Button */}
                {!analysisResult && (
                  <Button 
                    onClick={analyzeCV}
                    disabled={isAnalyzing || checksRemaining === 0}
                    className="w-full btn-hero-primary"
                    size="lg"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Menganalisis CV...
                      </>
                    ) : (
                      'Analisis CV Sekarang'
                    )}
                  </Button>
                )}

                {/* Results */}
                {analysisResult && (
                  <div className="space-y-4 animate-fade-in-up">
                    {/* Score */}
                    <div className="text-center p-6 bg-gradient-card rounded-xl">
                      <div className="text-5xl font-bold text-gradient-primary mb-2">
                        {analysisResult.score}/100
                      </div>
                      <div className="text-lg font-medium text-foreground">Skor ATS</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {analysisResult.score >= 85 ? "Excellent!" : 
                         analysisResult.score >= 75 ? "Good" : "Needs Improvement"}
                      </div>
                    </div>

                    {/* Suggestions */}
                    <div className="p-6 bg-card rounded-xl border">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success" />
                        Saran Perbaikan:
                      </h4>
                      <ul className="space-y-2">
                        {analysisResult.suggestions.map((suggestion, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA for Full Analysis */}
                    <div className="p-6 bg-gradient-accent rounded-xl text-center">
                      <h4 className="text-white font-semibold mb-2">
                        Ingin analisis yang lebih mendalam?
                      </h4>
                      <p className="text-white/90 text-sm mb-4">
                        Daftar gratis untuk mendapatkan analisis lengkap dan rekomendasi detail
                      </p>
                      <Button className="bg-white text-accent hover:bg-white/90">
                        Daftar Sekarang
                      </Button>
                    </div>
                  </div>
                )}

                {checksRemaining === 0 && !analysisResult && (
                  <div className="text-center p-6 bg-warning/10 rounded-xl">
                    <AlertCircle className="w-8 h-8 text-warning mx-auto mb-2" />
                    <h4 className="font-semibold text-warning mb-2">Batas Penggunaan Tercapai</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Daftar gratis untuk melakukan pengecekan tanpa batas
                    </p>
                    <Button className="btn-hero-primary">
                      Daftar Gratis
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MiniATSChecker;