import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Pencil } from "lucide-react";
import { TableLayout } from "@/components/CustomeComponents/TableLayout";

const users = [
  {
    name: "Amy John",
    type: "Employee",
    org: "Ikea",
    dept: "Engineering",
    quota: 25,
    used: 18.8,
  },
  {
    name: "Amy John",
    type: "Employee",
    org: "Ikea",
    dept: "Engineering",
    quota: 25,
    used: 18.8,
  },
  {
    name: "Michael Smith",
    type: "Employee",
    org: "Circle K",
    dept: "Marketing",
    quota: 20,
    used: 14.3,
  },
  {
    name: "David Brown",
    type: "Employee",
    org: "Google",
    dept: "Customer Support",
    quota: 15,
    used: 16.5,
  },
  {
    name: "Emily Davis",
    type: "Employee",
    org: "Tesla",
    dept: "Human Resources",
    quota: 22,
    used: 20.4,
  },
  {
    name: "Sophia Martinez",
    type: "Employee",
    org: "Netflix",
    dept: "Legal",
    quota: 28,
    used: 30.2,
  },
  {
    name: "Ryan White",
    type: "Employee",
    org: "Adobe",
    dept: "Operations",
    quota: 12,
    used: 28.7,
  },
  {
    name: "Emma Lewis",
    type: "Employee",
    org: "Nike",
    dept: "R&D",
    quota: 10,
    used: 24.9,
  },
  {
    name: "Mia Young",
    type: "Guest",
    org: "Unknown",
    dept: "-",
    quota: 50,
    used: 29.1,
  },
  {
    name: "Liam Allen",
    type: "Guest",
    org: "Facebook",
    dept: "Business Development",
    quota: 45,
    used: 33.0,
  },
  {
    name: "Noah Wright",
    type: "Guest",
    org: "LinkedIn",
    dept: "T&D",
    quota: 37,
    used: 27.8,
  },
];
const columns = [
  { key: "name", label: "User Name" },
  { key: "type", label: "User Type" },
  { key: "org", label: "Organisation" },
  { key: "dept", label: "Department" },
  { key: "quota", label: "Assign Quota" },
  { key: "used", label: "Used" },
  {
    key: "actions",
    label: "Actions",
    render: (row: any) => (
      <Button variant='ghost' size='icon'>
        <Pencil className='w-4 h-4' />
      </Button>
    ),
  },
];

export default function CostAndQuotaContent() {
  return (
    <div className='max-w-screen mx-auto px-4 py-6'>
      <Tabs defaultValue='quota'>
        <TabsList>
          <TabsTrigger value='quota'>Quota Management</TabsTrigger>
          <TabsTrigger value='analysis'>Cost Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value='quota'>
          {/* Filters */}
          <div className='flex flex-wrap items-center justify-between gap-2 mb-4'>
            <div className='flex items-center gap-2 flex-1'>
              <Input placeholder='Search' className='w-48' />
              <Select>
                <SelectTrigger className='w-40'>
                  <SelectValue placeholder='Organization' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All</SelectItem>
                  <SelectItem value='google'>Google</SelectItem>
                  <SelectItem value='tesla'>Tesla</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className='w-40'>
                  <SelectValue placeholder='Department' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All</SelectItem>
                  <SelectItem value='engineering'>Engineering</SelectItem>
                  <SelectItem value='marketing'>Marketing</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className='w-40'>
                  <SelectValue placeholder='User Type' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>All</SelectItem>
                  <SelectItem value='employee'>Employee</SelectItem>
                  <SelectItem value='guest'>Guest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button>+ Assign Quota</Button>
          </div>

          {/* Table */}
          <div className='overflow-x-auto'>
            <TableLayout data={users} columns={columns} />
          </div>

          {/* Footer */}
          <div className='flex justify-between items-center mt-3 text-xs text-muted-foreground'>
            <div className='flex items-center gap-1'>
              Show rows per page:
              <Select defaultValue='10'>
                <SelectTrigger className='w-14 h-7 text-xs'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='5'>5</SelectItem>
                  <SelectItem value='10'>10</SelectItem>
                  <SelectItem value='20'>20</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>1–10 of 240</div>
            <div className='flex gap-1'>
              <Button variant='ghost' size='sm'>
                {"<"}
              </Button>
              <Button variant='ghost' size='sm'>
                {">"}
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
