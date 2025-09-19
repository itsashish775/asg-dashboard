import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export default function UserManagementContent() {
  // Dummy Data
  const lineData = [
    { month: "Jan", s1: 400, s2: 240, s3: 300 },
    { month: "Feb", s1: 300, s2: 139, s3: 220 },
    { month: "Mar", s1: 200, s2: 980, s3: 100 },
    { month: "Apr", s1: 278, s2: 390, s3: 400 },
    { month: "May", s1: 189, s2: 480, s3: 300 },
    { month: "Jun", s1: 239, s2: 380, s3: 250 },
    { month: "Jul", s1: 349, s2: 430, s3: 210 },
  ];

  const barData = [
    { name: "Admin", credits: 4, consumed: 2 },
    { name: "Sales", credits: 6, consumed: 3 },
    { name: "Finance", credits: 5, consumed: 2 },
    { name: "HR", credits: 3, consumed: 1 },
    { name: "IT", credits: 7, consumed: 4 },
  ];

  const departments = [
    { name: "Engineering", users: 42, sessions: 120, consumption: "$15,000" },
    { name: "Marketing", users: 32, sessions: 80, consumption: "$7,800" },
    { name: "Finance", users: 28, sessions: 50, consumption: "$5,600" },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
    {
      name: "Customer Support",
      users: 20,
      sessions: 40,
      consumption: "$3,200",
    },
  ];

  return (
    <div className='max-w-screen mx-auto px-4 py-6'>
      {/* Welcome */}
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-foreground'>User Management</h1>
      </div>
    </div>
  );
}
