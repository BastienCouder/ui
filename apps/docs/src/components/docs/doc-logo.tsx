import { cn } from "@/lib/utils";
import { VueLogo } from "@/assets/images/brands/vuejs";
import { AngularLogo } from "@/assets/images/brands/angular";
import { ReactLogo } from "@/assets/images/brands/react";

export interface DocsLogoProps {
  name: string[];
  className?: string;
}

export const DocsLogo = ({ name, className }: DocsLogoProps) => {
  const logo = name[1];

  const renderLogo = () => {
    switch (logo) {
      case "vue":
        return <VueLogo className={cn("w-10 h-10", className)} />;
      case "angular":
        return <AngularLogo className={cn("w-10 h-10", className)} />;
      case "react":
        return <ReactLogo className={cn("w-10 h-10", className)} />;
      default:
        return null;
    }
  };

  return <>{renderLogo()}</>;
};
