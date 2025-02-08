import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="container mx-auto p-6">
      <Skeleton className="h-9 w-[180px] mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-6 w-[140px] mb-2" />
            <Skeleton className="h-9 w-[80px] mb-1" />
            <Skeleton className="h-4 w-[120px]" />
          </Card>
        ))}
      </div>
    </div>
  )
}
