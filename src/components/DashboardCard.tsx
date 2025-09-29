import { Card, CardContent, CardHeader } from '@/components/ui/card'

export function DashboardCard({
  title,
  value,
  description,
  icon,
}: {
  title: string
  value: string
  description?: string
  icon?: React.ReactNode
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {icon && <span className="text-lg">{icon}</span>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}