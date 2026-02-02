import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  subtitle?: string
  trend?: { value: number; label: string }
  color?: 'forest' | 'sage' | 'gold' | 'red'
}

export default function StatCard({ title, value, subtitle, trend, color = 'forest' }: StatCardProps) {
  const colors = {
    forest: 'border-l-forest',
    sage: 'border-l-sage',
    gold: 'border-l-gold',
    red: 'border-l-red-500',
  }

  return (
    <div className={cn('bg-white rounded-xl shadow-sm p-5 border-l-4', colors[color])}>
      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <p className="text-3xl font-heading font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
      {trend && (
        <p className={cn('text-xs mt-2 font-medium', trend.value >= 0 ? 'text-green-600' : 'text-red-500')}>
          {trend.value >= 0 ? '↑' : '↓'} {Math.abs(trend.value)}% {trend.label}
        </p>
      )}
    </div>
  )
}
