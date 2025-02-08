import { Card } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Active Agents</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground">4 agents running tasks</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Tasks Completed</h3>
          <p className="text-3xl font-bold">128</p>
          <p className="text-sm text-muted-foreground">Last 24 hours</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">System Status</h3>
          <p className="text-3xl font-bold text-green-500">Healthy</p>
          <p className="text-sm text-muted-foreground">All systems operational</p>
        </Card>
      </div>
    </div>
  )
}
