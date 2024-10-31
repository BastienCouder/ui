import { Breadcrumb, Breadcrumbs } from "@/registry/ui/react/breadcrumb";

export default function BreadcrumbDemo(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs size="sm">
        <Breadcrumb href="#">Home</Breadcrumb>
        <Breadcrumb href="#">Components</Breadcrumb>
        <Breadcrumb>Breadcrumbs</Breadcrumb>
      </Breadcrumbs>
      <Breadcrumbs size="md">
        <Breadcrumb href="#">Home</Breadcrumb>
        <Breadcrumb href="#">Components</Breadcrumb>
        <Breadcrumb>Breadcrumbs</Breadcrumb>
      </Breadcrumbs>
      <Breadcrumbs size="lg">
        <Breadcrumb href="#">Home</Breadcrumb>
        <Breadcrumb href="#">Components</Breadcrumb>
        <Breadcrumb>Breadcrumbs</Breadcrumb>
      </Breadcrumbs>
    </div>
  );
}
