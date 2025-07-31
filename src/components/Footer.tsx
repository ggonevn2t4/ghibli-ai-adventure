import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-forest-green/20 to-earth-brown/30 py-16">
      {/* Magic Sky Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, hsl(var(--sky-blue)) 0%, transparent 25%),
            radial-gradient(circle at 80% 30%, hsl(var(--magic-purple)) 0%, transparent 25%),
            radial-gradient(circle at 40% 70%, hsl(var(--sunset-orange)) 0%, transparent 25%)
          `
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-ghibli-header font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-blue to-magic-purple">
              AI Mastery Journey
            </h3>
            <p className="font-ghibli-body text-muted-foreground leading-relaxed mb-6 max-w-md">
              Hành trình kỳ diệu biến mỗi giáo viên thành pháp sư AI, 
              mang ma thuật công nghệ vào từng bài giảng với tinh thần Studio Ghibli.
            </p>
            
            {/* Magic Newsletter */}
            <div className="space-y-3">
              <p className="font-ghibli-accent text-sm text-muted-foreground">
                ✨ Nhận tin tức phép thuật mới nhất:
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email của bạn..."
                  className="flex-1 px-4 py-2 rounded-full border border-earth-brown/30 bg-cloud-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sky-blue/50 font-ghibli-body"
                />
                <Button variant="magic" size="sm">
                  🧙‍♂️ Đăng Ký
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ghibli-header font-bold mb-4 text-foreground">
              🏰 Khám Phá
            </h4>
            <ul className="space-y-3 font-ghibli-body">
              <li>
                <a href="#" className="text-muted-foreground hover:text-sky-blue transition-colors duration-300 hover:underline">
                  Bản Đồ Hành Trình
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-forest-green transition-colors duration-300 hover:underline">
                  Rương Báu Vật
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-sunset-orange transition-colors duration-300 hover:underline">
                  Cộng Đồng Totoro
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-magic-purple transition-colors duration-300 hover:underline">
                  Chứng Chỉ Pháp Sư
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-ghibli-header font-bold mb-4 text-foreground">
              🔮 Hỗ Trợ
            </h4>
            <ul className="space-y-3 font-ghibli-body">
              <li>
                <a href="#" className="text-muted-foreground hover:text-sky-blue transition-colors duration-300 hover:underline">
                  Câu Hỏi Thường Gặp
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-forest-green transition-colors duration-300 hover:underline">
                  Liên Hệ Mentor
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-sunset-orange transition-colors duration-300 hover:underline">
                  Hướng Dẫn Sử Dụng
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-magic-purple transition-colors duration-300 hover:underline">
                  Chính Sách Hoàn Tiền
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div className="border-t border-earth-brown/20 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="font-ghibli-accent text-muted-foreground">Kết nối với chúng tôi:</span>
              <div className="flex gap-3">
                <Button variant="orb" size="icon" className="hover:animate-gentle-bounce">
                  📘
                </Button>
                <Button variant="orb" size="icon" className="hover:animate-gentle-bounce">
                  📱
                </Button>
                <Button variant="orb" size="icon" className="hover:animate-gentle-bounce">
                  📧
                </Button>
                <Button variant="orb" size="icon" className="hover:animate-gentle-bounce">
                  🎥
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <p className="font-ghibli-body text-muted-foreground text-sm">
                📞 Zalo/Phone: 0708684608
              </p>
              <p className="font-ghibli-body text-muted-foreground text-sm">
                📍 Landmark 81, Quận Bình Thạnh, TPHCM
              </p>
              <p className="font-ghibli-body text-muted-foreground text-sm">
                ✉️ hello@aimastery.ghibli
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-brown/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-ghibli-body text-muted-foreground text-sm">
                © 2024 AI Mastery Journey. Được tạo ra với 💝 và phép thuật Ghibli.
              </p>
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="font-ghibli-body text-muted-foreground hover:text-sky-blue transition-colors duration-300">
                Điều Khoản Ma Thuật
              </a>
              <a href="#" className="font-ghibli-body text-muted-foreground hover:text-magic-purple transition-colors duration-300">
                Bảo Mật Thông Tin
              </a>
            </div>
          </div>
        </div>

        {/* Magic Quote */}
        <div className="text-center mt-8 pt-6 border-t border-earth-brown/10">
          <p className="font-ghibli-accent text-magic-purple italic text-lg">
            "Giáo dục không phải là việc đổ đầy một cái thùng, mà là việc thắp sáng ngọn lửa." ✨
          </p>
          <p className="font-ghibli-body text-muted-foreground text-sm mt-2">
            - Với tình yêu từ thế giới Studio Ghibli -
          </p>
        </div>
      </div>

      {/* Floating Magic Elements */}
      <div className="absolute top-8 left-8 w-3 h-3 bg-sky-blue rounded-full animate-sparkle opacity-40"></div>
      <div className="absolute top-1/4 right-16 w-2 h-2 bg-magic-purple rounded-full animate-float opacity-30"></div>
      <div className="absolute bottom-16 left-1/4 w-4 h-4 bg-sunset-orange rounded-full animate-gentle-bounce opacity-25"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-forest-green rounded-full animate-sparkle opacity-35" style={{animationDelay: '2s'}}></div>
    </footer>
  );
};

export default Footer;