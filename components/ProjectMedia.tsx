import Image from "next/image";
import SketchArt from "./SketchArt";

type Props = {
  src?: string;
  alt: string;
  variant: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ProjectMedia({ src, alt, variant, className = "", sizes, priority }: Props) {
  if (src) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 50vw, 100vw"}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }
  return <SketchArt variant={variant} className={className} />;
}
