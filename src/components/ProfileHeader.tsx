
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, Phone, MapPin, Award, UserCircle, Calendar } from "lucide-react";

const ProfileHeader = () => {
  return (
    <Card className="gta-card mb-6">
      <div className="gta-header">
        <UserCircle className="h-5 w-5 mr-2" />
        <span>ЛИЧНЫЕ ДАННЫЕ</span>
      </div>
      
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-40 h-40 relative rounded-sm overflow-hidden border-2 border-primary/50">
            <img
              src="/placeholder.svg"
              alt="Профиль"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-center py-1">
              <span className="text-xs font-bold text-primary-foreground">ID: 2778-AX</span>
            </div>
          </div>
          
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight mb-1">Андрей Твиксов</h1>
              
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="border-primary/50 text-primary px-2 py-0.5 uppercase font-bold">
                  Статус: Активный
                </Badge>
                <Badge variant="outline" className="border-primary/50 text-primary px-2 py-0.5 uppercase font-bold flex items-center gap-1">
                  <Shield className="h-3 w-3" /> Уровень: 7
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>twixov@fsvng.gov.ru</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+7 (495) 667-89-01</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>г. Москва, ул. Красноказарменная, 9А</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>13.02.2025</span>
                </div>
              </div>
            </div>
            
            <div className="bg-primary/10 p-3 border border-primary/30 rounded-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="font-bold uppercase text-sm">Высший допуск</span>
              </div>
              
              <span className="text-xs bg-primary/20 px-2 py-1 font-mono">
                A-78XX-9021
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileHeader;
