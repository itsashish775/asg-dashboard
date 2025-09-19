import { MessageSquare, MessageSquareWarning, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface RecentItemProps {
  collapsed: boolean;
  onToggle: () => void;
}
const RecentItem = ({ collapsed, onToggle }: RecentItemProps) => {
  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const recentItems = [
    {
      title: t("sidebar.systemConfiguration"),
      icon: Settings,
      action: false,
      onClick: () => {},
    },
  ];
  return (
    <>
      {!collapsed && (
        <div className='mt-6' dir={dir}>
          <h3 className='text-muted-foreground text-xs  tracking-wide mb-2 px-2'>
            {t("sidebar.configuration")}
          </h3>
          <div className='space-y-1'>
            {recentItems.map((item, index) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default RecentItem;
