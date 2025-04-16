
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, ArrowUpRight, Shield, Zap, Award } from "lucide-react";

export type Position = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isCurrent?: boolean;
  rank?: number;
};

interface PositionCardProps {
  position: Position;
}

const PositionCard: React.FC<PositionCardProps> = ({ position }) => {
  return (
    <Card className="gta-card relative overflow-hidden hover:shadow-[0_0_8px_rgba(0,255,170,0.3)] transition-all duration-300">
      {position.isCurrent && (
        <div className="absolute right-0 top-0 bg-primary text-primary-foreground text-xs py-1 px-3 font-bold">
          АКТИВНАЯ СЛУЖБА
        </div>
      )}
      
      <div className="gta-header flex items-center">
        <Shield className="h-5 w-5 mr-2 text-primary" />
        <span>{position.title.toUpperCase()}</span>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <Building2 className="h-5 w-5 mr-2 text-primary" />
            <span className="font-semibold">{position.company}</span>
          </div>
          
          {position.rank && (
            <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-sm flex items-center">
              <Award className="h-4 w-4 mr-1" />
              УРОВЕНЬ: {position.rank}
            </div>
          )}
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4 border-b border-primary/20 pb-3">
          <Calendar className="h-4 w-4 mr-2 text-primary/70" />
          <span>{position.period}</span>
        </div>
        
        {position.description && (
          <p className="mb-5 text-sm leading-relaxed">{position.description}</p>
        )}
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="text-sm font-bold uppercase tracking-wide flex items-center mb-2">
            <Zap className="h-4 w-4 text-primary mr-2" />
            Специализация
          </div>
          
          <div className="flex flex-wrap gap-2">
            {position.skills.map((skill, index) => (
              <span 
                key={index} 
                className="gta-badge"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-end">
          <button className="gta-button flex items-center gap-2 text-sm">
            ПОДРОБНЕЕ О СЛУЖБЕ
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PositionCard;
