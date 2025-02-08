import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function LoadingMonitoring() {
  return (
    <div className="container mx-auto p-6">
      <Skeleton className="h-9 w-48 mb-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-6">
            <Skeleton className="h-6 w-32 mb-2" />
            <Skeleton className="h-10 w-20 mb-1" />
            <Skeleton className="h-4 w-40" />
          </Card>
        ))}
      </div>
    </div>
  )
}
