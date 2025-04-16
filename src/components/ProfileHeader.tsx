
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Landmark } from "lucide-react";

const ProfileHeader = () => {
  return (
    <Card className="gta-card mb-6">
      <div className="gta-header flex justify-between items-center">
        <span>ПРОФИЛЬ ПЕРСОНАЖА</span>
        <span className="text-primary text-sm">ID: #19674</span>
      </div>
      <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary/70 bg-secondary">
            <AvatarImage src="/placeholder.svg" alt="Фото профиля" />
            <AvatarFallback className="text-2xl bg-secondary text-primary">ЛК</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-accent text-white text-xs py-0.5 px-2 font-bold uppercase">
            Уровень 50
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-2xl md:text-3xl font-bold text-primary tracking-wide">Иванов Иван Иванович</h1>
          <p className="text-muted-foreground mt-1">Профессиональное портфолио</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
            <div className="flex items-center gap-2 bg-secondary/50 p-2 rounded-sm border border-primary/30">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">РЕПУТАЦИЯ</div>
                <div className="font-bold">98/100</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-secondary/50 p-2 rounded-sm border border-primary/30">
              <Award className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">ОПЫТ</div>
                <div className="font-bold">5+ лет</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-secondary/50 p-2 rounded-sm border border-primary/30">
              <Landmark className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">ЛОКАЦИЯ</div>
                <div className="font-bold">Москва</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
