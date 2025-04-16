
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Calendar, ArrowUpRight } from "lucide-react";

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
          АКТИВНА
        </div>
      )}
      
      <div className="gta-header">
        <span>{position.title.toUpperCase()}</span>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-sm">
            <Building2 className="h-4 w-4 mr-1 text-primary" />
            <span className="font-semibold">{position.company}</span>
          </div>
          
          {position.rank && (
            <div className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
              РАНГ: {position.rank}
            </div>
          )}
        </div>
        
        <div className="flex items-center text-xs text-muted-foreground mb-3 border-b border-primary/20 pb-2">
          <Calendar className="h-4 w-4 mr-1 text-primary/70" />
          <span>{position.period}</span>
        </div>
        
        <p className="mb-4 text-sm">{position.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {position.skills.map((skill, index) => (
            <span 
              key={index} 
              className="gta-badge"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors mt-2 group">
          ПОДРОБНЕЕ 
          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </CardContent>
    </Card>
  );
};

export default PositionCard;
