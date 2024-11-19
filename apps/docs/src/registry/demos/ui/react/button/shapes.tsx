import { Button } from "@/registry/ui/react/button";
import { Upload } from "@/lib/icons";

export default function ButtonDemo(): JSX.Element {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button size="sm" shape="square" aria-label="upload">
        <Upload />
      </Button>
      <Button size="md" shape="square" aria-label="upload">
        <Upload />
      </Button>
      <Button size="lg" shape="square" aria-label="upload">
        <Upload />
      </Button>
      <Button size="sm" shape="circle" aria-label="upload">
        <Upload />
      </Button>
      <Button size="md" shape="circle" aria-label="upload">
        <Upload />
      </Button>
      <Button size="lg" shape="circle" aria-label="upload">
        <Upload />
      </Button>
    </div>
  );
}
