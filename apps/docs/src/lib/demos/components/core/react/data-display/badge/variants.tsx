import { Badge } from "@/lib/components/core/default/react/data-display/badge";

export default function Demo() {
  return (
    <div className="flex flex-col items-start gap-2">
      <Flex>
        <Badge variant="neutral">Neutral</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="primary">Primary</Badge>
      </Flex>
      <Flex>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="accent">Accent</Badge>
      </Flex>
    </div>
  );
}

const Flex = (props: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className="flex items-center gap-2" />
);