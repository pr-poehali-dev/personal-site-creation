
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, FileText, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <Card className="gta-card mt-6">
      <div className="gta-header">
        <span>КОНТАКТНАЯ ИНФОРМАЦИЯ</span>
      </div>
      
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a 
            href="mailto:example@mail.ru"
            className="flex items-center gap-3 bg-secondary/50 p-3 border border-primary/20 hover:border-primary/70 transition-colors"
          >
            <div className="bg-primary/20 p-2 rounded-sm">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">EMAIL</div>
              <div className="font-bold">example@mail.ru</div>
            </div>
            <ExternalLink className="h-4 w-4 text-primary/70 ml-auto" />
          </a>
          
          <a 
            href="tel:+79991234567"
            className="flex items-center gap-3 bg-secondary/50 p-3 border border-primary/20 hover:border-primary/70 transition-colors"
          >
            <div className="bg-primary/20 p-2 rounded-sm">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">ТЕЛЕФОН</div>
              <div className="font-bold">+7 (999) 123-45-67</div>
            </div>
            <ExternalLink className="h-4 w-4 text-primary/70 ml-auto" />
          </a>
          
          <a 
            href="https://linkedin.com/in/profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-secondary/50 p-3 border border-primary/20 hover:border-primary/70 transition-colors"
          >
            <div className="bg-primary/20 p-2 rounded-sm">
              <Linkedin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">LINKEDIN</div>
              <div className="font-bold">linkedin.com/in/profile</div>
            </div>
            <ExternalLink className="h-4 w-4 text-primary/70 ml-auto" />
          </a>
          
          <a 
            href="#" 
            className="flex items-center gap-3 bg-secondary/50 p-3 border border-primary/20 hover:border-primary/70 transition-colors"
          >
            <div className="bg-primary/20 p-2 rounded-sm">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">РЕЗЮМЕ</div>
              <div className="font-bold">Скачать PDF</div>
            </div>
            <ExternalLink className="h-4 w-4 text-primary/70 ml-auto" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
