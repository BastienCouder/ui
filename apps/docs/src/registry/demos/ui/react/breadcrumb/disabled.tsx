import { Breadcrumb, Breadcrumbs } from "@/registry/ui/react/breadcrumb";

export default function BreadcrumbDemo(): JSX.Element {
  return (
    <Breadcrumbs>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Components</Breadcrumb>
      <Breadcrumb disabled>Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
