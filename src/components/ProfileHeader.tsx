
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const ProfileHeader = () => {
  return (
    <Card className="border-none shadow-sm mb-6">
      <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
        <Avatar className="w-24 h-24 md:w-32 md:h-32">
          <AvatarImage src="/placeholder.svg" alt="Фото профиля" />
          <AvatarFallback className="text-2xl">ЛК</AvatarFallback>
        </Avatar>
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Иванов Иван Иванович</h1>
          <p className="text-muted-foreground mt-1">Профессиональное портфолио</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              Опыт работы: 5+ лет
            </span>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              Москва, Россия
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
