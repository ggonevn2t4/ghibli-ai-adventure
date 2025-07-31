import { Button } from "@/components/ui/button";
import floatingCastle from "@/assets/floating-castle.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-sky-blue/20 via-cloud-white to-sunset-orange/20">
      {/* Animated Background Clouds */}
      <div className="absolute inset-0">
        <div className="animate-cloud-drift opacity-30">
          <div className="absolute top-20 left-0 w-32 h-20 bg-cloud-white/60 rounded-full blur-xl"></div>
          <div className="absolute top-40 left-0 w-24 h-16 bg-cloud-white/40 rounded-full blur-lg"></div>
        </div>
        <div className="animate-cloud-drift opacity-20" style={{
        animationDelay: '10s'
      }}>
          <div className="absolute top-60 left-0 w-40 h-24 bg-cloud-white/50 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Floating Castle Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src={floatingCastle} alt="Floating Castle" className="w-full h-full object-cover opacity-80 animate-float" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Sparkle Effects */}
          <div className="absolute top-10 left-10 w-4 h-4 bg-magic-purple rounded-full animate-sparkle"></div>
          <div className="absolute top-32 right-16 w-3 h-3 bg-sunset-orange rounded-full animate-sparkle" style={{
          animationDelay: '0.5s'
        }}></div>
          <div className="absolute bottom-32 left-20 w-2 h-2 bg-sky-blue rounded-full animate-sparkle" style={{
          animationDelay: '1s'
        }}></div>
          
          {/* Main Heading */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-ghibli-header font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-blue via-magic-purple to-sunset-orange">
              AI Mastery Journey
            </h1>
            <p className="text-xl md:text-2xl font-ghibli-accent text-forest-green mb-2">
              🌟 Hành Trình Phép Thuật Giảng Dạy 🌟
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            <p className="text-lg md:text-xl font-ghibli-body text-gray-700 mb-4 leading-relaxed">
              Khám phá thế giới kỳ diệu của AI trong giáo dục
            </p>
            <p className="text-base md:text-lg font-ghibli-body text-slate-800">
              Cùng chúng tôi biến mỗi bài giảng thành một cuộc phiêu lưu đầy cảm hứng
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="hero" size="xl" className="group relative overflow-hidden">
              <span className="relative z-10">✨ Bắt Đầu Cuộc Phiêu Lưu ✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-magic-purple/20 to-sunset-orange/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-magic-purple to-sky-blue rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gradient-to-br from-sunset-orange to-forest-green rounded-full animate-gentle-bounce opacity-50"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-gradient-to-br from-sky-blue to-magic-purple rounded-full animate-float opacity-40" style={{
          animationDelay: '1s'
        }}></div>
        </div>
      </div>

      {/* Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 text-cloud-white">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>;
};
export default HeroSection;