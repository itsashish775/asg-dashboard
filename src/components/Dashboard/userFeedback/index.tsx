import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { TableLayout } from "@/components/CustomeComponents/TableLayout";

// Dummy static data
const data = [
  {
    name: "Amy John",
    org: "Ikea",
    dept: "Engineering",
    model: "Open AI",
    response: "Negative",
    comment: "Very accurate responses for code s...",
    date: "15/02/2025",
    guest: false,
  },
  {
    name: "Michael Smith",
    org: "Circle K",
    dept: "Marketing",
    model: "Open AI",
    response: "Negative",
    comment: "Helpful tips for improving user e...",
    date: "17/02/2025",
    guest: false,
  },
  {
    name: "Sophia Martinez",
    org: "Tesla",
    dept: "Product",
    model: "Claude",
    response: "Positive",
    comment: "Innovative approaches to prototyp...",
    date: "21/02/2025",
    guest: false,
  },
  {
    name: "Ryan White",
    org: "Netflix",
    dept: "Legal",
    model: "Claude",
    response: "Positive",
    comment: "Timely updates on design trends.",
    date: "23/02/2025",
    guest: true,
  },
  {
    name: "Isabella Scott",
    org: "Salesforce",
    dept: "IT Support",
    model: "Gemini",
    response: "Negative",
    comment: "Engaging discussions on accessibi...",
    date: "07/03/2025",
    guest: true,
  },
  {
    name: "Grace Taylor",
    org: "Twitter",
    dept: "Supply Chain",
    model: "Perplexity",
    response: "Positive",
    comment: "Insightful case studies from indu...",
    date: "13/03/2025",
    guest: false,
  },
];

export default function UserFeedbackContent() {
  const [search, setSearch] = useState("");

  const filtered = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.org.toLowerCase().includes(search.toLowerCase()) ||
      item.dept.toLowerCase().includes(search.toLowerCase())
  );
  const columns = [
    {
      key: "name",
      label: "User Name",
      render: (row: any) => (
        <>
          {row.name}
          {row.guest && (
            <Badge className='ml-2 bg-muted text-xs'>Guest User</Badge>
          )}
        </>
      ),
    },
    { key: "org", label: "Organisation Name" },
    { key: "dept", label: "Department" },
    {
      key: "model",
      label: "AI Model",
      render: (row: any) => (
        <Badge
          className={cn(
            "px-2",
            row.model === "Open AI" && "bg-green-900 text-green-300",
            row.model === "Claude" && "bg-orange-900 text-orange-300",
            row.model === "Gemini" && "bg-blue-900 text-blue-300",
            row.model === "Perplexity" && "bg-cyan-900 text-cyan-300"
          )}
        >
          {row.model}
        </Badge>
      ),
    },
    {
      key: "response",
      label: "Response",
      render: (row: any) => (
        <span
          className={cn(
            "font-semibold",
            row.response === "Positive" ? "text-green-400" : "text-red-400"
          )}
        >
          {row.response}
        </span>
      ),
    },
    { key: "comment", label: "Comment" },
    { key: "date", label: "Date" },
  ];

  return (
    <div className='space-y-4 p-6'>
      {/* Search + Filters */}
      <div className='flex items-center gap-4'>
        <Input
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='max-w-xs'
        />
        <Select>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='Department' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='eng'>Engineering</SelectItem>
            <SelectItem value='mkt'>Marketing</SelectItem>
            <SelectItem value='it'>IT Support</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-[150px]'>
            <SelectValue placeholder='AI Model' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='openai'>Open AI</SelectItem>
            <SelectItem value='claude'>Claude</SelectItem>
            <SelectItem value='gemini'>Gemini</SelectItem>
            <SelectItem value='perplexity'>Perplexity</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <TableLayout columns={columns} data={data} />
    </div>
  );
}
