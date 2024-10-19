import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumbs,
} from "@/registry/ui/react/breadcrumb";

export default function BreadcrumbDemo() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>Breadcrumbs</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  );
}
