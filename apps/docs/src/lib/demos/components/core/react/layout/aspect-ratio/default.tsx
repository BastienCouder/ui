import { AspectRatio } from "@/lib/components/core/default/react/layout/aspect-ratio";
import Image from "next/image";

export default function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="rounded-md object-cover"
      />
    </AspectRatio>
  );
}