import {
  BreadcrumbItem,
  BreadcrumbLink,
  Breadcrumbs,
} from "@/lib/components/core/default/react/navigation/breadcrumb";

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
