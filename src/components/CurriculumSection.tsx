import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import trainJourneyMap from "@/assets/train-journey-map.jpg";

const stations = [
  {
    title: "🚂 Ga Khởi Đầu",
    weeks: "Tuần 1-2",
    description: "Làm quen với các linh hồn AI - Chân dung đầu tiên của ChatGPT và Claude",
    icon: "🏠",
    color: "from-sky-blue to-forest-green",
    details: [
      "Hiểu bản chất của AI như Chihiro hiểu thế giới thần linh",
      "Tạo lập mối quan hệ đầu tiên với ChatGPT và Claude", 
      "Khám phá tính cách và sở thích của từng AI"
    ]
  },
  {
    title: "🏘️ Làng Giáo Án",
    weeks: "Tuần 3-4", 
    description: "Rèn luyện thuật soạn giáo án như Sophie may áo thần kỳ",
    icon: "📚",
    color: "from-forest-green to-sunset-orange",
    details: [
      "Học prompt engineering cho việc soạn giáo án",
      "Tạo ra các bài giảng tương tác và sinh động",
      "Phát triển kỹ năng cá nhân hóa nội dung cho từng học sinh"
    ]
  },
  {
    title: "🎭 Studio Sáng Tạo", 
    weeks: "Tuần 5-6",
    description: "Tạo ra những slide và video như phim hoạt hình Ghibli",
    icon: "🎨",
    color: "from-sunset-orange to-magic-purple",
    details: [
      "Sử dụng AI để tạo nội dung đa phương tiện",
      "Thiết kế slide presentation đẹp mắt và hấp dẫn",
      "Sản xuất video giảng dạy với sự hỗ trợ của AI"
    ]
  },
  {
    title: "🌟 Lâu Đài Đánh Giá",
    weeks: "Tuần 7-8",
    description: "Trở thành bậc thầy đánh giá học sinh như Chihiro chinh phục thế giới thần linh",
    icon: "👑", 
    color: "from-magic-purple to-sky-blue",
    details: [
      "Tạo ra hệ thống đánh giá công bằng và hiệu quả",
      "Sử dụng AI để phân tích kết quả học tập",
      "Phát triển kỹ năng phản hồi và cải thiện"
    ]
  }
];

const CurriculumSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-forest-green/10 to-earth-brown/20">
      {/* Background Map */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src={trainJourneyMap} 
          alt="Train Journey Map" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-ghibli-header font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-earth-brown via-forest-green to-sky-blue">
            🏰 Bản Đồ Hành Trình 🏰
          </h2>
          <p className="text-lg md:text-xl font-ghibli-body text-muted-foreground max-w-2xl mx-auto">
            Theo chuyến tàu ma thuật qua 4 ga tàu kỳ diệu trong hành trình 8 tuần
          </p>
        </div>

        {/* Train Journey */}
        <div className="max-w-6xl mx-auto">
          {/* Train Track */}
          <div className="relative">
            {/* Railway Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-earth-brown to-forest-green opacity-50"></div>
            
            {stations.map((station, index) => (
              <div 
                key={index}
                className={`relative mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center`}
              >
                {/* Station Building */}
                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} mb-8 lg:mb-0`}>
                  <Card 
                    className={`relative overflow-hidden bg-gradient-to-br ${station.color} text-cloud-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up`}
                    style={{animationDelay: `${index * 0.2}s`}}
                  >
                    <div className="p-8">
                      {/* Station Icon */}
                      <div className="text-5xl mb-4 animate-gentle-bounce">
                        {station.icon}
                      </div>
                      
                      {/* Station Info */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-ghibli-header font-bold mb-2">
                          {station.title}
                        </h3>
                        <p className="text-sm opacity-90 font-ghibli-accent mb-4">
                          {station.weeks}
                        </p>
                        <p className="font-ghibli-body leading-relaxed">
                          {station.description}
                        </p>
                      </div>
                      
                      {/* Station Details */}
                      <div className="space-y-2 mb-6">
                        {station.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <span className="text-cloud-white/80 mr-2">✨</span>
                            <span className="text-sm font-ghibli-body leading-relaxed opacity-90">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="orb" size="sm" className="bg-cloud-white/20 text-cloud-white border-cloud-white/30 hover:bg-cloud-white/30">
                        Khám Phá Ga Này 🚂
                      </Button>
                    </div>
                    
                    {/* Magic Sparkles */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-cloud-white rounded-full animate-sparkle"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-cloud-white rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
                  </Card>
                </div>

                {/* Train Station Hub */}
                <div className="flex-shrink-0 relative z-20">
                  <div className="w-16 h-16 bg-gradient-to-br from-sunset-orange to-magic-purple rounded-full flex items-center justify-center shadow-lg border-4 border-cloud-white animate-magic-glow">
                    <span className="text-2xl animate-gentle-bounce">🚉</span>
                  </div>
                  
                  {/* Connection Lines */}
                  {index < stations.length - 1 && (
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-earth-brown opacity-50"></div>
                  )}
                </div>

                {/* Empty space for alternate layout */}
                <div className="lg:w-5/12 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '1s'}}>
          <Button variant="floating" size="lg">
            🎫 Mua Vé Tàu Ma Thuật 🎫
          </Button>
        </div>
      </div>

      {/* Floating Train Elements */}
      <div className="absolute top-32 right-20 w-8 h-8 text-earth-brown opacity-30 animate-float">🚂</div>
      <div className="absolute bottom-40 left-16 w-6 h-6 text-forest-green opacity-25 animate-gentle-bounce">🌲</div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 text-sunset-orange opacity-20 animate-float" style={{animationDelay: '3s'}}>☁️</div>
    </section>
  );
};

export default CurriculumSection;