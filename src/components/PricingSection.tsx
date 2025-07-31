import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
  {
    title: "Cuộc Phiêu Lưu Khởi Đầu",
    price: "990,000đ",
    door: "🚪",
    doorStyle: "Cửa Gỗ Đơn Giản",
    description: "Gỗ tự nhiên, handle đồng - Dành cho những người mới bắt đầu hành trình",
    color: "from-earth-brown to-forest-green",
    features: [
      "✨ Truy cập 4 tuần đầu tiên",
      "🌱 Học Prompt cơ bản với ChatGPT",
      "📚 Tài liệu học tập đầy đủ",
      "💬 Hỗ trợ cộng đồng",
      "🎓 Chứng chỉ hoàn thành cơ bản"
    ],
    cta: "Bắt Đầu Hành Trình",
    popular: false
  },
  {
    title: "Hành Trình Anh Hùng",
    price: "1,990,000đ", 
    door: "🚪",
    doorStyle: "Cửa Vàng Rồng",
    description: "Khung vàng, có chạm khắc rồng - Con đường phổ biến nhất của các giáo viên",
    color: "from-sunset-orange to-magic-purple",
    features: [
      "🏰 Truy cập toàn bộ 8 tuần",
      "🧙‍♂️ Mentor cá nhân 1-1",
      "🎨 Truy cập tất cả công cụ AI",
      "🏮 Cộng đồng VIP Totoro",
      "🎭 Workshop thực hành trực tiếp",
      "📜 Chứng chỉ Pháp Sư Giáo Dục",
      "🔄 Cập nhật nội dung trọn đời"
    ],
    cta: "Trở Thành Anh Hùng",
    popular: true
  },
  {
    title: "Trở Thành Pháp Sư Tối Thượng",
    price: "3,990,000đ",
    door: "🚪", 
    doorStyle: "Cửa Thần Tiên",
    description: "Kim cương lấp lánh, aura ma thuật - Dành cho những ai muốn thành thạo tuyệt đối",
    color: "from-magic-purple to-sky-blue",
    features: [
      "👑 Tất cả trong gói Anh Hùng",
      "🌟 Coaching 1-1 với Master AI",
      "🔮 Truy cập Beta features mới nhất",
      "🎪 Workshop riêng biệt với chuyên gia",
      "📈 Phân tích chi tiết tiến độ cá nhân",
      "🏆 Chứng chỉ Pháp Sư Tối Thượng",
      "💎 Cộng đồng Elite độc quyền",
      "🚀 Hỗ trợ triển khai tại trường"
    ],
    cta: "Thành Pháp Sư Tối Thượng",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-magic-purple/10 via-forest-green/10 to-sky-blue/10">
      {/* Mystical Forest Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(ellipse at top, hsl(var(--forest-green)) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, hsl(var(--magic-purple)) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, hsl(var(--sky-blue)) 0%, transparent 50%)
          `
        }}></div>
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-sunset-orange/30 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-sky-blue/30 to-transparent transform -rotate-12 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-ghibli-header font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-magic-purple via-sunset-orange to-sky-blue">
            💰 Ba Cánh Cửa Định Mệnh 💰
          </h2>
          <p className="text-lg md:text-xl font-ghibli-body text-muted-foreground max-w-2xl mx-auto">
            Chọn cánh cửa phù hợp để bước vào thế giới AI giáo dục kỳ diệu
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className="relative animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-gradient-to-r from-sunset-orange to-magic-purple text-cloud-white px-4 py-2 animate-magic-glow">
                    ✨ PHỔ BIẾN NHẤT ✨
                  </Badge>
                </div>
              )}

              <Card className={`relative overflow-hidden bg-gradient-to-br ${plan.color} text-cloud-white shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 group h-full`}>
                {/* Door Frame Effect */}
                <div className="absolute inset-0 border-4 border-cloud-white/20 rounded-lg"></div>
                <div className="absolute inset-2 border-2 border-cloud-white/10 rounded-lg"></div>
                
                {/* Magic Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cloud-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Door Icon & Style */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3 animate-gentle-bounce group-hover:scale-110 transition-transform duration-300">
                      {plan.door}
                    </div>
                    <h4 className="text-sm font-ghibli-accent text-cloud-white/80 mb-2">
                      {plan.doorStyle}
                    </h4>
                  </div>

                  {/* Plan Title */}
                  <h3 className="text-2xl font-ghibli-header font-bold text-center mb-4">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-4xl font-ghibli-header font-bold">
                      {plan.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-center text-cloud-white/90 font-ghibli-body text-sm leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="flex items-start text-cloud-white/90 font-ghibli-body text-sm"
                        >
                          <span className="mr-3 mt-0.5 flex-shrink-0">
                            {feature.split(' ')[0]}
                          </span>
                          <span>
                            {feature.split(' ').slice(1).join(' ')}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center">
                    <Button 
                      variant={plan.popular ? "hero" : "orb"}
                      size="lg"
                      className={`w-full ${plan.popular ? 'animate-magic-glow' : ''} bg-cloud-white/20 text-cloud-white border-cloud-white/30 hover:bg-cloud-white/30`}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>

                {/* Magic Sparkles */}
                <div className="absolute top-6 right-6 w-2 h-2 bg-cloud-white rounded-full animate-sparkle"></div>
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-cloud-white rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-cloud-white rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>

                {/* Door Handle */}
                <div className={`absolute ${index % 2 === 0 ? 'right-8' : 'left-8'} top-1/2 transform -translate-y-1/2 w-3 h-8 bg-gradient-to-b from-sunset-orange to-earth-brown rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-300`}></div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg font-ghibli-accent text-muted-foreground mb-6">
              "Mỗi cánh cửa đều dẫn đến một cuộc phiêu lưu khác nhau. Hãy chọn con đường phù hợp với trái tim mình!"
            </p>
            <p className="text-sm font-ghibli-body text-muted-foreground/80">
              ✨ Đảm bảo hoàn tiền 100% trong 30 ngày đầu tiên ✨
            </p>
          </div>
        </div>
      </div>

      {/* Floating Forest Elements */}
      <div className="absolute top-32 left-16 w-6 h-6 text-forest-green opacity-20 animate-float">🌲</div>
      <div className="absolute top-1/4 right-20 w-4 h-4 text-sunset-orange opacity-15 animate-gentle-bounce">🦋</div>
      <div className="absolute bottom-40 left-1/4 w-5 h-5 text-magic-purple opacity-25 animate-sparkle">🔑</div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 text-sky-blue opacity-20 animate-float" style={{animationDelay: '3s'}}>✨</div>
    </section>
  );
};

export default PricingSection;