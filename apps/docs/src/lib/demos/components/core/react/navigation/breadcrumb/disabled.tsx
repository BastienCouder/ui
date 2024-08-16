import { Breadcrumb, Breadcrumbs } from "@/lib/components/core/default/react/navigation/breadcrumb";

export default function BreadcrumbDemo() {
    return (
        <Breadcrumbs>
            <Breadcrumb href="#">Home</Breadcrumb>
            <Breadcrumb href="#">Components</Breadcrumb>
            <Breadcrumb disabled>Breadcrumbs</Breadcrumb>
        </Breadcrumbs>
    );
}
