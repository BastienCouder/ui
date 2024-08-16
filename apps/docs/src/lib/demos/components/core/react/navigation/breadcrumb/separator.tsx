import { Breadcrumb, Breadcrumbs } from "@/lib/components/core/default/react/navigation/breadcrumb";
import { X } from "lucide-react";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumbs separatorIcon={<X/>}>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Components</Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
