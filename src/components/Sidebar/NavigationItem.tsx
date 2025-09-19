import {
  Cog,
  DollarSign,
  FolderPlus,
  LayoutDashboard,
  Library,
  MessageSquareWarning,
  Plus,
  Search,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DemoPage from "../Dialogs/SearchDialog";
import DialogSkeleton from "../Dialogs";
import MyCustomForm from "../Dialogs/SearchDialog";
import { replace, useNavigate } from "react-router-dom";

interface NavigationItemProps {
  collapsed: boolean;
  onToggle: () => void;
}

const NavigationItem = ({ collapsed, onToggle }: NavigationItemProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const [openNewSearchDialog, setOpenNewSearchDialog] =
    useState<boolean>(false);

  // Example click handlers
  const handleNewChat = () => {
    console.log("New Chat clicked");
    setOpenNewSearchDialog(true);
    // onToggle();
    // open dialog, route change, or state update here
  };

  const handleSearch = () => {
    console.log("Search clicked");
    // onToggle();
  };

  const handleLibrary = () => {
    console.log("Library clicked");
  };

  const handleCreateFolder = () => {
    console.log("Create Folder clicked");
  };

  const navigationItems = [
    {
      title: t("sidebar.dashboard"),
      icon: LayoutDashboard,
      action: true,
      onClick: () => {
        navigate(`/${i18n.language}/dashboard`);
      },
    },
    {
      title: t("sidebar.costCota"),
      icon: DollarSign,
      onClick: () =>
        navigate(`/${i18n.language}/cost-and-quota`),
    },
    {
      title: t("sidebar.userManagement"),
      icon: Users,
      onClick: () => navigate(`/${i18n.language}/user-management`),
    },
    {
      title: t("sidebar.roleManagement"),
      icon: Cog,
      onClick: () => navigate(`/${i18n.language}/role-management`),
    },
    {
      title: t("sidebar.userFeedback"),
      icon: MessageSquareWarning,
      onClick: () => navigate(`/${i18n.language}/user-feedback`),
    },
  ];

  return (
    <div className='space-y-1'>
      {navigationItems.map((item) => (
        <Button
          key={item.title}
          variant={item.action ? "default" : "ghost"}
          className={`w-full ${
            collapsed ? "justify-center px-2" : "justify-start"
          } h-10`}
          title={collapsed ? item.title : undefined}
          dir={dir}
          onClick={item.onClick}
        >
          <item.icon className='h-4 w-4' />
          {!collapsed && <span className='ml-2'>{item.title}</span>}
        </Button>
      ))}
      <div className=''>
        <DialogSkeleton
          open={openNewSearchDialog}
          onOpenChange={setOpenNewSearchDialog}
        >
          <MyCustomForm />
        </DialogSkeleton>
      </div>
    </div>
  );
};

export default NavigationItem;
