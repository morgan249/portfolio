import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Panel',
  description: 'Admin panel for DevFolio content management.',
};

export default function AdminPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <CardTitle className="text-3xl font-headline">Admin Panel</CardTitle>
                <CardDescription className="text-lg">Content management features are coming soon.</CardDescription>
            </CardHeader>
        </Card>
      </div>
    </div>
  );
}
