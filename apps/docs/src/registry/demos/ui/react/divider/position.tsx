import { Divider } from "@/registry/ui/react/divider";

export default function DividerDemo() {
  return (
    <div className="w-full mx-4">
      <Divider className="gap-4">Gap 4</Divider>
      <Divider position="after">After</Divider>
      <Divider position="before">Before</Divider>
    </div>
  );
}
