// import React from "react";
// import {
//   FileText,
//   Sparkles,
//   Tag,
//   Search,
//   GitCompare,
//   Video,
//   Wand2,
//   Image,
//   BarChart3,
//   Plus,
//   Mic,
//   SendHorizontal,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { ScrollArea } from "../ui/scroll-area";
// import { Input } from "../ui/input";
// import { useTranslation } from "react-i18next";
// import DemoPage from "../Dialogs/SearchDialog";

// const features = [
//   {
//     title: "Content Summarization",
//     description: "Summarize your content faster",
//     icon: FileText,
//     color: "bg-blue-500/10 text-blue-500",
//   },
//   {
//     title: "Content Generation",
//     description: "Auto-generate GPT-4o",
//     icon: Sparkles,
//     color: "bg-green-500/10 text-green-500",
//   },
//   {
//     title: "Document Tagging",
//     description: "Understand GPT-4 Turbo",
//     icon: Tag,
//     color: "bg-purple-500/10 text-purple-500",
//   },
//   {
//     title: "Search",
//     description: "Internet with ChatGPT",
//     icon: Search,
//     color: "bg-orange-500/10 text-orange-500",
//   },
//   {
//     title: "Evaluation & Compare",
//     description: "Compare Documents",
//     icon: GitCompare,
//     color: "bg-indigo-500/10 text-indigo-500",
//   },
//   {
//     title: "Video Generation",
//     description: "Auto-generate GPT-4",
//     icon: Video,
//     color: "bg-red-500/10 text-red-500",
//   },
//   {
//     title: "Wave Generation",
//     description: "Generate with creative waves",
//     icon: Wand2,
//     color: "bg-cyan-500/10 text-cyan-500",
//   },
//   {
//     title: "Image Generation",
//     description: "Bussiness.cloud with AI",
//     icon: Image,
//     color: "bg-pink-500/10 text-pink-500",
//   },
//   {
//     title: "Data Analytics & Insights",
//     description: "Understand GPT-4 Turbo",
//     icon: BarChart3,
//     color: "bg-amber-500/10 text-amber-500",
//   },
// ];

// export function DashboardContent() {
//   const [message, setMessage] = React.useState("");
//   const { t, i18n } = useTranslation();
//   const currentLocale = i18n.language;
//   const dir = currentLocale === "ar" ? "rtl" : "ltr";
//   return (
//     <div className='max-w-screen w-full mx-auto' dir={dir}>
//       {/* Welcome Message */}
//       <ScrollArea className=' h-[calc(100vh-200px)]'>
//         <div className='text-center mb-12'>
//           <h1 className='text-3xl font-bold text-foreground mb-2'>
//             Hello, Ananya
//           </h1>
//         </div>

//         {/* Features Grid */}
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12'>
//           {features.map((feature) => (
//             <Card
//               key={feature.title}
//               className='p-4 hover:shadow-lg transition-shadow cursor-pointer group bg-card border-border'
//               dir={dir}
//             >
//               <div className='flex items-start gap-3'>
//                 <div
//                   className={`p-2 rounded-lg ${feature.color} group-hover:scale-110 transition-transform`}
//                 >
//                   <feature.icon className='h-5 w-5' />
//                 </div>
//                 <div className='flex-1 min-w-0'>
//                   <h3 className='font-medium text-card-foreground mb-1'>
//                     {feature.title}
//                   </h3>
//                   <p className='text-sm text-muted-foreground'>
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </ScrollArea>

//       {/* Chat Input */}
//       <div
//         className='p-4 border-t border-border'
//         // dir={currentLocale === "ar" ? "rtl" : "ltr"}
//       >
//         <div className='max-w-4xl mx-auto'>
//           <div className='flex items-center gap-2 bg-sidebar rounded-lg border border-border p-2'>
//             <Button size='sm' variant='default'>
//               <Plus className='w-4 h-4' />
//             </Button>
//             <Input
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder={"placeholder"}
//               className='flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
//             />
//             <Button size='sm' variant='default'>
//               <Mic className='w-4 h-4' />
//             </Button>
//             <Button size='sm' variant={"default"}>
//               <SendHorizontal className='w-4 h-5' />
//             </Button>
//           </div>

//           {/* <div className='text-center mt-2'>
//           <p className='text-xs text-muted-foreground'>
//             {t("footer")}{" "}
//             <span className='text-secondary ml-1'>{t("privacy")}</span>
//           </p>
//         </div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

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
import { TableLayout } from "../CustomeComponents/TableLayout";
import { data } from "react-router-dom";

export default function DashboardContent() {
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

  const columns = [
    { key: "name", label: "Department" },
    { key: "users", label: "Users" },
    { key: "sessions", label: "Sessions" },
    {
      key: "consumption",
      label: "Consumption",
      render: (row: any) => (
        <span className='font-semibold text-blue-500'>{row.consumption}</span>
      ),
    },
  ];
  return (
    <div className='max-w-screen mx-auto px-4 py-6'>
      {/* Welcome */}
      <ScrollArea className='h-[calc(100vh-160px)]'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-foreground'>
            Welcome Ananya!
          </h1>
        </div>

        {/* Top Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
          <Card className='bg-card border-border'>
            <CardHeader>
              <CardTitle>Total Credits Consumed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>$72.4M</p>
            </CardContent>
          </Card>

          <Card className='bg-card border-border'>
            <CardHeader>
              <CardTitle>Total Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>$384.9K</p>
            </CardContent>
          </Card>

          <Card className='bg-card border-border'>
            <CardHeader>
              <CardTitle>Total Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>3,524</p>
            </CardContent>
          </Card>

          <Card className='bg-card border-border'>
            <CardHeader>
              <CardTitle>User Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>87% Positive</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Users By Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-64'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='month' />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type='monotone'
                      dataKey='s1'
                      stroke='#3b82f6'
                      strokeWidth={2}
                    />
                    <Line
                      type='monotone'
                      dataKey='s2'
                      stroke='#10b981'
                      strokeWidth={2}
                    />
                    <Line
                      type='monotone'
                      dataKey='s3'
                      stroke='#f59e0b'
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Credit Allocation & Consumption</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='h-64'>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart data={barData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey='credits' fill='#3b82f6' />
                    <Bar dataKey='consumed' fill='#10b981' />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Table */}
        <Card>
          <CardHeader>
            <CardTitle>Company & Department Access Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='overflow-x-auto'>
              <TableLayout data={departments} columns={columns}/>
            </div>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}
