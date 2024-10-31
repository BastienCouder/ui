import { Breadcrumb, Breadcrumbs } from "@/registry/ui/react/breadcrumb";

export default function BreadcrumbDemo(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumbs orientation="vertical">
        <Breadcrumb href="#">Home</Breadcrumb>
        <Breadcrumb href="#">Components</Breadcrumb>
        <Breadcrumb>Breadcrumbs</Breadcrumb>
      </Breadcrumbs>
      <Breadcrumbs orientation="horizontal">
        <Breadcrumb href="#">Home</Breadcrumb>
        <Breadcrumb href="#">Components</Breadcrumb>
        <Breadcrumb>Breadcrumbs</Breadcrumb>
      </Breadcrumbs>
    </div>
  );
}
