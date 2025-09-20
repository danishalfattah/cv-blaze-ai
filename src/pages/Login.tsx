import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const benefits = [
    "Akses tanpa batas ke semua template CV",
    "Analisis ATS mendalam dan detail",
    "Simulasi wawancara AI unlimited",
    "Export CV ke berbagai format",
    "Dukungan prioritas 24/7"
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-6">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }}></div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Benefits */}
        <div className="text-white space-y-8">
          <div>
            <Link to="/" className="inline-flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CV</span>
              </div>
              <span className="text-2xl font-bold">CVJitu</span>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Selamat Datang Kembali!
            </h1>
            <p className="text-xl text-white/90">
              Masuk ke akun Anda dan lanjutkan perjalanan karir yang luar biasa.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Dengan masuk, Anda mendapatkan:</h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-white/80">Profesional telah berhasil meningkatkan karir mereka</div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full">
          <Card className="card-glow p-8 max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">Login</h2>
              <p className="text-muted-foreground">
                Masuk ke akun CVJitu Anda
              </p>
            </div>

            <form className="space-y-6">
              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Lupa password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <Button type="submit" className="w-full btn-hero-primary group">
                Masuk ke Akun
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Divider */}
              <div className="relative">
                <Separator />
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card px-4 text-sm text-muted-foreground">
                  atau
                </span>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-red-500 rounded"></span>
                  Google
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gray-800 rounded"></span>
                  GitHub
                </Button>
              </div>

              {/* Register Link */}
              <div className="text-center pt-4">
                <p className="text-muted-foreground">
                  Belum punya akun?{" "}
                  <Link to="/register" className="text-primary font-medium hover:underline">
                    Daftar gratis
                  </Link>
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;