import { Dashboard } from "@/components/dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        template: '%s | Admin Panel',
        default: 'Admin Panel',
    },
    description: 'Admin panel for content management.',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Dashboard>{children}</Dashboard>;
}
