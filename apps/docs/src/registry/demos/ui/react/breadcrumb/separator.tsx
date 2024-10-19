import {
  Breadcrumb,
  Breadcrumbs,
} from "@/registry/ui/react/breadcrumb";
import { X } from "@/lib/icons";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumbs separatorIcon={<X />}>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Components</Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
