import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AppSidebar } from "./sidebar";
import DarkModeToggle from "../DarkModToggle";
import LanguageSwitcher from "../LanguageSwitcher";

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

export function DashboardHeader({
  onToggleSidebar,
  sidebarCollapsed,
}: Readonly<DashboardHeaderProps>) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className='h-14 border-b border-border bg-background flex items-center justify-between px-4'>
      <div className='flex items-center gap-2'>
        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' className='lg:hidden'>
              <Menu className='h-4 w-4' />
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='p-0 w-64'>
            <AppSidebar
              collapsed={false}
              onToggle={() => setMobileMenuOpen(false)}
            />
          </SheetContent>
        </Sheet>

        {/* Desktop Sidebar Toggle */}
        <Button
          variant='ghost'
          size='icon'
          onClick={onToggleSidebar}
          className='hidden'
        >
          <Menu className='h-4 w-4' />
        </Button>

        <div className='font-bold text-2xl px-4'>Dashboard</div>
      </div>
      <div className='flex items-center gap-4'>
        {/* Language Selector */}

        <DarkModeToggle />
        <LanguageSwitcher />

        {/* User Menu */}
        {/* <MyAccount /> */}
      </div>
    </header>
  );
}
