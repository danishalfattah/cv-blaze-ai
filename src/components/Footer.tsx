import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">CV</span>
              </div>
              <span className="text-2xl font-bold">CVJitu</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Platform terdepan untuk membuat CV yang dioptimalkan ATS dan simulasi wawancara AI. 
              Bantu raih karir impian Anda.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produk</h4>
            <ul className="space-y-3">
              {[
                "Pembuat CV",
                "Template CV",
                "Analisis ATS", 
                "Simulasi Wawancara",
                "Tips Karir"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {[
                "Tentang Kami",
                "Karir",
                "Blog",
                "Press Kit",
                "Partner"
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-white/80">hello@cvjitu.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-white/80">+62 21 1234 5678</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-white/80">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat, 10220
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60">
              © {currentYear} CVJitu. Semua hak cipta dilindungi.
            </p>
            <div className="flex gap-6">
              {[
                "Kebijakan Privasi",
                "Syarat & Ketentuan", 
                "Bantuan"
              ].map((item, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-white/60 hover:text-white transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;