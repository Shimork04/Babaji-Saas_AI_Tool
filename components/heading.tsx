import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return( 
    
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">

            {/* //holding the background */}
            <div className={cn("p-2 w-fit rounded:md", bgColor)}>
                <Icon className={cn("w-9 h-9", iconColor)}/>
            </div>

            {/* //holding the Icon */}
            <div>
                <h3 className="text-3xl font-bold">
                    {title}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>


        </div>
        
    

  );
};
