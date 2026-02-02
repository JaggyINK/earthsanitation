'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'

interface ChartProps {
  data: { name: string; value: number; value2?: number }[]
  type?: 'bar' | 'line'
  title: string
  color?: string
  color2?: string
}

export default function AnalyticsChart({ data, type = 'bar', title, color = '#1B4332', color2 = '#8B6914' }: ChartProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="font-heading font-bold text-gray-900 mb-4">{title}</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'bar' ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Tooltip />
              <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} name="Visites" />
              {data[0]?.value2 !== undefined && (
                <Bar dataKey="value2" fill={color2} radius={[4, 4, 0, 0]} name="Clics tél." />
              )}
            </BarChart>
          ) : (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#6b7280' }} />
              <YAxis tick={{ fontSize: 12, fill: '#6b7280' }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={{ r: 4 }} name="Visites" />
              {data[0]?.value2 !== undefined && (
                <Line type="monotone" dataKey="value2" stroke={color2} strokeWidth={2} dot={{ r: 4 }} name="Leads" />
              )}
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
