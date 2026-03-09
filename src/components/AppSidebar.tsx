import { LayoutDashboard, Users, Bot, Play, ScrollText, Settings, Zap } from "lucide-react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Clientes", url: "/clients", icon: Users },
  { title: "Robôs", url: "/robots", icon: Bot },
  { title: "Execuções", url: "/executions", icon: Play },
  { title: "Logs", url: "/logs", icon: ScrollText },
  { title: "Configurações", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 min-h-screen bg-sidebar border-r border-sidebar-border flex flex-col shrink-0">
      {/* Logo */}
      <div className="h-16 flex items-center gap-2.5 px-6 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center glow-primary">
          <Zap className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold tracking-tight gradient-text">Pixaflow</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.url;
          return (
            <RouterNavLink
              key={item.url}
              to={item.url}
              className={cn("sidebar-link", isActive && "sidebar-link-active")}
            >
              <item.icon className="w-[18px] h-[18px]" />
              <span>{item.title}</span>
            </RouterNavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 py-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
            AD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate">Admin</p>
            <p className="text-xs text-muted-foreground truncate">admin@pixaflow.io</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
