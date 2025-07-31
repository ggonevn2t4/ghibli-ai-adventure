import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import magicOrbsField from "@/assets/magic-orbs-field.jpg";

const features = [
  {
    icon: "🌱",
    title: "Prompt Phép Thuật",
    description: "Học cách nói chuyện với AI như Howl gọi lửa",
    color: "from-forest-green to-sky-blue"
  },
  {
    icon: "🏮",
    title: "Cộng Đồng Totoro",
    description: "1000+ giáo viên cùng chia sẻ như làng Totoro",
    color: "from-sunset-orange to-magic-purple"
  },
  {
    icon: "📜",
    title: "Chứng Chỉ Rồng",
    description: "Nhận bằng chứng nhận từ Hội Pháp Sư Giáo Dục",
    color: "from-magic-purple to-sky-blue"
  },
  {
    icon: "⏰",
    title: "Thời Gian Linh Hoạt",
    description: "Học như Sophie - theo nhịp thời gian riêng",
    color: "from-sky-blue to-forest-green"
  },
  {
    icon: "🧙‍♂️",
    title: "Mentor Calcifer",
    description: "Được dẫn dắt bởi những thầy phù thủy AI",
    color: "from-forest-green to-sunset-orange"
  },
  {
    icon: "🌟",
    title: "Cập Nhật Ma Thuật",
    description: "Luôn có phép thuật mới từ thế giới AI",
    color: "from-sunset-orange to-magic-purple"
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-cloud-white to-forest-green/10">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={magicOrbsField} 
          alt="Magic Orbs Field" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-ghibli-header font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-forest-green via-sky-blue to-magic-purple">
            🌸 Khu Vườn Ma Thuật 🌸
          </h2>
          <p className="text-lg md:text-xl font-ghibli-body text-muted-foreground max-w-2xl mx-auto">
            Khám phá những quả cầu ma thuật chứa đựng sức mạnh của AI
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <Card className="relative overflow-hidden bg-gradient-to-br from-cloud-white/80 to-sky-blue/20 backdrop-blur-sm border-cloud-white/50 hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Magic Orb Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-magic-purple rounded-full animate-sparkle opacity-60"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-sunset-orange rounded-full animate-sparkle opacity-40" style={{animationDelay: '0.5s'}}></div>
                
                <div className="relative z-10 p-8 text-center">
                  {/* Icon */}
                  <div className="text-6xl mb-4 animate-gentle-bounce group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-ghibli-header font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground font-ghibli-body leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Magic Button */}
                  <Button 
                    variant="orb" 
                    size="sm"
                    className="group-hover:animate-magic-glow"
                  >
                    Khám Phá ✨
                  </Button>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent via-cloud-white/5 to-sky-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <Button variant="magic" size="lg">
            🔮 Xem Tất Cả Phép Thuật 🔮
          </Button>
        </div>
      </div>

      {/* Floating Magic Elements */}
      <div className="absolute top-20 left-20 w-6 h-6 bg-gradient-to-br from-magic-purple to-sky-blue rounded-full animate-float opacity-30"></div>
      <div className="absolute top-40 right-32 w-4 h-4 bg-gradient-to-br from-sunset-orange to-forest-green rounded-full animate-gentle-bounce opacity-25"></div>
      <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-br from-sky-blue to-magic-purple rounded-full animate-float opacity-20" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default FeaturesSection;