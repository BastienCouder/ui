import {
  Breadcrumb,
  Breadcrumbs,
} from "@/registry/ui/react/breadcrumb";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Components</Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
