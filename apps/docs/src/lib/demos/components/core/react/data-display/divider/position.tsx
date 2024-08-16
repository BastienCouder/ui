import { Divider } from "@/lib/components/core/default/react/data-display/divider";

export default function DemoDivider() {
  return (
    <div className="w-full mx-4">
      <Divider className="gap-4">Gap 4</Divider>
      <Divider position="after">After</Divider>
      <Divider position="before">Before</Divider>
    </div>
  );
}