import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Search, 
  Filter, 
  Star, 
  Eye, 
  Download,
  Briefcase,
  Code,
  TrendingUp,
  Heart,
  DollarSign,
  Wrench
} from "lucide-react";

const Examples = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [atsScoreRange, setAtsScoreRange] = useState([80]);

  const categories = [
    { value: "all", label: "Semua Kategori", icon: Briefcase },
    { value: "teknologi", label: "Teknologi", icon: Code },
    { value: "pemasaran", label: "Pemasaran", icon: TrendingUp },
    { value: "kesehatan", label: "Kesehatan", icon: Heart },
    { value: "keuangan", label: "Keuangan", icon: DollarSign },
    { value: "teknik", label: "Teknik", icon: Wrench },
  ];

  const cvTemplates = [
    {
      id: 1,
      title: "Backend Developer",
      category: "teknologi",
      atsScore: 95,
      image: "/api/placeholder/300/400",
      description: "Template untuk developer backend dengan fokus pada technical skills dan project portfolio.",
      tags: ["Python", "Node.js", "AWS", "PostgreSQL"]
    },
    {
      id: 2,
      title: "Digital Marketing Manager",
      category: "pemasaran", 
      atsScore: 92,
      image: "/api/placeholder/300/400",
      description: "CV yang dioptimalkan untuk posisi marketing dengan emphasis pada ROI dan campaign metrics.",
      tags: ["Google Ads", "Analytics", "Social Media", "SEO"]
    },
    {
      id: 3,
      title: "Financial Analyst", 
      category: "keuangan",
      atsScore: 89,
      image: "/api/placeholder/300/400",
      description: "Template khusus untuk analisis keuangan dengan fokus pada analytical skills.",
      tags: ["Excel", "Financial Modeling", "SQL", "Tableau"]
    },
    {
      id: 4,
      title: "UX/UI Designer",
      category: "teknologi",
      atsScore: 94,
      image: "/api/placeholder/300/400", 
      description: "CV creative untuk designer dengan portfolio showcase yang menarik.",
      tags: ["Figma", "Adobe Creative", "Prototyping", "User Research"]
    },
    {
      id: 5,
      title: "Project Manager",
      category: "teknologi",
      atsScore: 91,
      image: "/api/placeholder/300/400",
      description: "Template untuk PM dengan emphasis pada leadership dan project delivery.",
      tags: ["Agile", "Scrum", "Leadership", "Budget Management"]
    },
    {
      id: 6,
      title: "Data Scientist",
      category: "teknologi", 
      atsScore: 96,
      image: "/api/placeholder/300/400",
      description: "CV untuk data scientist dengan fokus pada machine learning dan analytics.",
      tags: ["Python", "Machine Learning", "TensorFlow", "Statistics"]
    }
  ];

  const filteredTemplates = cvTemplates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    const matchesScore = template.atsScore >= atsScoreRange[0];
    
    return matchesSearch && matchesCategory && matchesScore;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galeri <span className="text-gradient-primary">Template CV</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Temukan inspirasi dari CV profesional yang telah terbukti lolos ATS dengan skor tinggi.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Search */}
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Cari berdasarkan jabatan atau skill..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <Filter className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <SelectItem key={category.value} value={category.value}>
                          <div className="flex items-center gap-2">
                            <Icon className="w-4 h-4" />
                            {category.label}
                          </div>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>

                {/* ATS Score Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Skor ATS Min: {atsScoreRange[0]}+</label>
                  <Slider
                    value={atsScoreRange}
                    onValueChange={setAtsScoreRange}
                    max={100}
                    min={60}
                    step={5}
                    className="w-full"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Menampilkan {filteredTemplates.length} template dari {cvTemplates.length} total
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Terbaru
              </Button>
              <Button variant="outline" size="sm">
                Skor Tertinggi
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template, index) => (
              <Card key={template.id} className="card-glow overflow-hidden group animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* CV Preview */}
                <div className="relative h-64 bg-gradient-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
                  <div className="absolute inset-4 bg-white rounded-lg shadow-lg flex flex-col p-4">
                    <div className="h-3 bg-primary/20 rounded mb-2"></div>
                    <div className="h-2 bg-gray-200 rounded mb-1"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4 mb-3"></div>
                    <div className="space-y-1">
                      <div className="h-1.5 bg-accent/30 rounded"></div>
                      <div className="h-1.5 bg-accent/30 rounded w-4/5"></div>
                      <div className="h-1.5 bg-accent/30 rounded w-2/3"></div>
                    </div>
                  </div>
                  
                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <Download className="w-4 h-4 mr-1" />
                      Use Template
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {template.title}
                    </h3>
                    <div className="flex items-center gap-1 bg-success/10 rounded-full px-2 py-1">
                      <Star className="w-3 h-3 text-success fill-current" />
                      <span className="text-xs font-medium text-success">{template.atsScore}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {template.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {template.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">+{template.tags.length - 3}</span>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button className="w-full btn-hero-primary group/btn">
                    Gunakan Template Ini
                    <Download className="w-4 h-4 ml-2 group-hover/btn:translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tidak Ada Template Ditemukan</h3>
              <p className="text-muted-foreground mb-4">
                Coba ubah filter pencarian atau kata kunci Anda.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setAtsScoreRange([80]);
                }}
              >
                Reset Filter
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Examples;