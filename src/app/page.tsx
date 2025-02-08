import { StatsCard } from "@/components/dashboard/stats-card";
import { Activity, Brain, MessageSquare, Zap } from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="container mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-3xl font-bold mb-8">AI Agent Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Active Agents"
          value="12"
          description="Currently running agents"
          icon={<Activity className="h-4 w-4" />}
        />
        <StatsCard
          title="Total Interactions"
          value="1,234"
          description="Messages processed today"
          icon={<MessageSquare className="h-4 w-4" />}
        />
        <StatsCard
          title="Average Response Time"
          value="1.2s"
          description="Last 24 hours"
          icon={<Zap className="h-4 w-4" />}
        />
        <StatsCard
          title="Model Usage"
          value="85%"
          description="GPT-4 utilization"
          icon={<Brain className="h-4 w-4" />}
        />
      </div>
    </main>
  );
}
