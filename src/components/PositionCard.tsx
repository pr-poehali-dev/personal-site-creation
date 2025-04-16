
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

export type Position = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  isCurrent?: boolean;
};

interface PositionCardProps {
  position: Position;
}

const PositionCard: React.FC<PositionCardProps> = ({ position }) => {
  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{position.title}</CardTitle>
            <CardDescription className="flex items-center mt-1">
              <Building2 className="h-4 w-4 mr-1" />
              {position.company}
            </CardDescription>
          </div>
          {position.isCurrent && (
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
              Текущая
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{position.period}</span>
        </div>
        <p className="mb-4">{position.description}</p>
        <div className="flex flex-wrap gap-2">
          {position.skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PositionCard;
