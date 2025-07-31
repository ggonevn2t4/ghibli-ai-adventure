import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const toolCategories = [
  {
    title: "🧙‍♂️ Phép Thuật Trò Chuyện",
    tools: [
      {
        name: "ChatGPT",
        ghibliName: "Calcifer Trò Chuyện",
        description: "Lửa biết nói như trong Howl's Moving Castle",
        icon: "🔥",
        color: "from-sunset-orange to-magic-purple"
      },
      {
        name: "Claude",
        ghibliName: "Haku Thông Thái", 
        description: "Rồng trí tuệ như Haku trong Spirited Away",
        icon: "🐉",
        color: "from-sky-blue to-forest-green"
      }
    ]
  },
  {
    title: "🎨 Ma Thuật Sáng Tạo",
    tools: [
      {
        name: "Canva AI",
        ghibliName: "Màu Sắc Bay",
        description: "Palette ma thuật như trong Kiki's Delivery Service",
        icon: "🎨",
        color: "from-magic-purple to-sunset-orange"
      },
      {
        name: "Gamma",
        ghibliName: "Slide Thần Tiên",
        description: "Tạo presentation như sách ma thuật",
        icon: "📊",
        color: "from-forest-green to-sky-blue"
      }
    ]
  },
  {
    title: "📊 Công Cụ Thần Kỳ",
    tools: [
      {
        name: "Grammarly",
        ghibliName: "Cây Bút Ma Thuật",
        description: "Viết văn như Arrietty khéo léo",
        icon: "✒️",
        color: "from-sky-blue to-magic-purple"
      },
      {
        name: "Kahoot",
        ghibliName: "Trò Chơi Totoro",
        description: "Học vui vẻ như chơi với Totoro",
        icon: "🎮",
        color: "from-sunset-orange to-forest-green"
      }
    ]
  }
];

const ToolsSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-earth-brown/20 to-magic-purple/10">
      {/* Magical Workshop Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, hsl(var(--magic-purple)) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, hsl(var(--sunset-orange)) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, hsl(var(--sky-blue)) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-ghibli-header font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-magic-purple via-sunset-orange to-sky-blue">
            🛠️ Rương Báu Vật Ma Thuật 🛠️
          </h2>
          <p className="text-lg md:text-xl font-ghibli-body text-muted-foreground max-w-2xl mx-auto">
            Khám phá kho tàng công cụ AI được đặt tên theo thế giới Ghibli
          </p>
        </div>

        {/* Tools Categories */}
        <div className="space-y-16 max-w-6xl mx-auto">
          {toolCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="animate-slide-up"
              style={{animationDelay: `${categoryIndex * 0.2}s`}}
            >
              {/* Category Title */}
              <h3 className="text-2xl md:text-3xl font-ghibli-header font-bold text-center mb-8 text-foreground">
                {category.title}
              </h3>
              
              {/* Tools Shelf */}
              <div className="relative">
                {/* Wooden Shelf */}
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-earth-brown/60 to-earth-brown/80 rounded-lg shadow-lg"></div>
                
                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="group relative animate-slide-up"
                      style={{animationDelay: `${(categoryIndex * 0.2) + (toolIndex * 0.1)}s`}}
                    >
                      <Card className="relative overflow-hidden bg-gradient-to-br from-cloud-white/90 to-cloud-white/70 backdrop-blur-sm border border-cloud-white/80 hover:shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-3">
                        {/* Magic Glow Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                        
                        {/* Magic Jar/Container Visual */}
                        <div className="relative z-10 p-8">
                          {/* Tool Icon in Glass Jar */}
                          <div className="relative mb-6">
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-cloud-white/60 to-sky-blue/30 rounded-full border-2 border-cloud-white/50 flex items-center justify-center backdrop-blur-sm group-hover:animate-magic-glow">
                              <span className="text-3xl animate-gentle-bounce group-hover:scale-110 transition-transform duration-300">
                                {tool.icon}
                              </span>
                            </div>
                            
                            {/* Magic Sparkles around jar */}
                            <div className="absolute -top-2 -right-2 w-2 h-2 bg-magic-purple rounded-full animate-sparkle opacity-60"></div>
                            <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-sunset-orange rounded-full animate-sparkle opacity-40" style={{animationDelay: '0.5s'}}></div>
                          </div>
                          
                          {/* Tool Names */}
                          <div className="text-center mb-4">
                            <h4 className="text-lg font-ghibli-header font-bold text-foreground mb-1">
                              {tool.ghibliName}
                            </h4>
                            <p className="text-sm font-ghibli-body text-muted-foreground opacity-75">
                              ({tool.name})
                            </p>
                          </div>
                          
                          {/* Description */}
                          <p className="text-sm font-ghibli-body text-muted-foreground text-center leading-relaxed mb-6">
                            {tool.description}
                          </p>
                          
                          {/* Magic Use Button */}
                          <div className="text-center">
                            <Button 
                              variant="orb" 
                              size="sm"
                              className="group-hover:animate-magic-glow"
                            >
                              Sử Dụng ✨
                            </Button>
                          </div>
                        </div>

                        {/* Floating Magic Particles */}
                        <div className="absolute top-4 right-4 w-1 h-1 bg-sky-blue rounded-full animate-float opacity-50"></div>
                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-magic-purple rounded-full animate-sparkle opacity-30"></div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Master Toolkit CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '1s'}}>
          <div className="mb-6">
            <p className="text-lg font-ghibli-accent text-muted-foreground mb-4">
              "Với rương báu vật này, bạn sẽ trở thành pháp sư giáo dục thật sự!"
            </p>
          </div>
          <Button variant="magic" size="lg">
            🗝️ Mở Khóa Tất Cả Báu Vật 🗝️
          </Button>
        </div>
      </div>

      {/* Floating Workshop Elements */}
      <div className="absolute top-20 left-16 w-6 h-6 text-earth-brown opacity-20 animate-float">⚱️</div>
      <div className="absolute top-1/3 right-20 w-4 h-4 text-magic-purple opacity-15 animate-gentle-bounce">🔮</div>
      <div className="absolute bottom-32 left-1/4 w-5 h-5 text-sunset-orange opacity-25 animate-sparkle">⭐</div>
      <div className="absolute bottom-1/4 right-1/3 w-3 h-3 text-sky-blue opacity-20 animate-float" style={{animationDelay: '2s'}}>✨</div>
    </section>
  );
};

export default ToolsSection;