
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type SecuritySystemCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const SecuritySystemCard = ({
  title,
  description,
  icon,
  className
}: SecuritySystemCardProps) => {
  return (
    <Card className={cn("h-full transition-all hover:shadow-lg", className)}>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-primary/10 p-2 rounded-full">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm min-h-24">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default SecuritySystemCard;
