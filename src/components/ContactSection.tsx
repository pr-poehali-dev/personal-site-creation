
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">Контактная информация</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start gap-2">
            <Mail className="h-4 w-4" />
            example@mail.ru
          </Button>
          
          <Button variant="outline" className="justify-start gap-2">
            <Phone className="h-4 w-4" />
            +7 (999) 123-45-67
          </Button>
          
          <Button variant="outline" className="justify-start gap-2">
            <Linkedin className="h-4 w-4" />
            linkedin.com/in/profile
          </Button>
          
          <Button variant="outline" className="justify-start gap-2">
            <FileText className="h-4 w-4" />
            Скачать резюме
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
