import { Button } from "@/registry/ui/react/button";
import { Upload } from "@/lib/icons";

export default function ButtonDemo() {
  return (
    <div className="flex items-center gap-2">
      <Button prefix={<Upload />}>Upload</Button>
      <Button suffix={<Upload />}>Upload</Button>
    </div>
  );
}
