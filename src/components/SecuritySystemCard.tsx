
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface SecuritySystemItemProps {
  icon: React.ReactNode;
  text: string;
}

interface SecuritySystemCardProps {
  title: string;
  description: string;
  items: SecuritySystemItemProps[];
  href: string;
}

const SecuritySystemCard = ({ title, description, items, href }: SecuritySystemCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-0.5">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to={href} className="flex items-center justify-center gap-1">
            Подробнее <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SecuritySystemCard;
