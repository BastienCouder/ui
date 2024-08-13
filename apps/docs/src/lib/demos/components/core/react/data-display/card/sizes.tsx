import { Card, CardContent, CardHeader, CardTitle } from "@/lib/components/core/default/react/data-display/card";

const sizes = [
    "sm",
    "md",
    "lg"
] as const;

export default function Demo() {
    return (
        <div className="grid grid-cols-2 gap-2">
            {sizes.map((size) => (
                <Card key={size} size={size}>
                    <CardHeader>
                        <CardTitle>{size}</CardTitle>
                    </CardHeader>
                </Card >
            ))}
        </div>
    );
}
