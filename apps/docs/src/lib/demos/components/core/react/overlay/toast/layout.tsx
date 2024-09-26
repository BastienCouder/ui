import { Toaster } from "@/lib/components/core/default/react/overlay/toaster";

import { ReactNode } from "react";

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <main>{children}</main>
                <Toaster />
            </body>
        </html>
    )
}
