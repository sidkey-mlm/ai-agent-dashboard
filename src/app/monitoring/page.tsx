import { Card } from "@/components/ui/card"

export default function MonitoringPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Monitoring</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">System Health</h3>
          <p className="text-3xl font-bold text-green-500">98%</p>
          <p className="text-sm text-muted-foreground">All systems operational</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Active Tasks</h3>
          <p className="text-3xl font-bold">24</p>
          <p className="text-sm text-muted-foreground">Tasks in progress</p>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-2">Response Time</h3>
          <p className="text-3xl font-bold">150ms</p>
          <p className="text-sm text-muted-foreground">Average response time</p>
        </Card>
      </div>
    </div>
  )
}
