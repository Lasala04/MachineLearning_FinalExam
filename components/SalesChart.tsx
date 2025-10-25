'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 45000 },
  { month: 'Feb', sales: 48000 },
  { month: 'Mar', sales: 50000 },
  { month: 'Apr', sales: 49000 },
  { month: 'May', sales: 52000 },
  { month: 'Jun', sales: 54000 },
  { month: 'Jul', sales: 56000 },
  { month: 'Aug', sales: 58000 },
  { month: 'Sep', sales: 60000 },
  { month: 'Oct', sales: 62000 },
  { month: 'Nov', sales: 65000 },
  { month: 'Dec', sales: 68000 },
];

export default function SalesChart() {
  return (
    <div className="w-full h-80 bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Sales Trend Over Time</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#667eea" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}