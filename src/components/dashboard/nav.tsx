import Link from "next/link";
import { Activity, BarChart2, Settings, Users } from "lucide-react";
import { SignOutButton } from "@/components/auth/sign-out-button";

const navigation = [
  { name: "Overview", href: "/", icon: BarChart2 },
  { name: "Agents", href: "/agents", icon: Users },
  { name: "Monitoring", href: "/monitoring", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function DashboardNav() {
  return (
    <nav className="flex justify-between items-center px-4 py-3 border-b">
      <div className="flex space-x-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="h-4 w-4" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
      <SignOutButton />
    </nav>
  );
}
