import { cn } from "@/lib/utils";

type Status = "active" | "inactive" | "pending" | "paused" | "error" | "success" | "running" | "info" | "warning";

const statusConfig: Record<Status, { label: string; className: string }> = {
  active: { label: "Ativo", className: "bg-success/15 text-success border-success/20" },
  inactive: { label: "Inativo", className: "bg-muted text-muted-foreground border-border" },
  pending: { label: "Pendente", className: "bg-warning/15 text-warning border-warning/20" },
  paused: { label: "Pausado", className: "bg-warning/15 text-warning border-warning/20" },
  error: { label: "Erro", className: "bg-destructive/15 text-destructive border-destructive/20" },
  success: { label: "Sucesso", className: "bg-success/15 text-success border-success/20" },
  running: { label: "Em execução", className: "bg-info/15 text-info border-info/20" },
  info: { label: "Info", className: "bg-info/15 text-info border-info/20" },
  warning: { label: "Aviso", className: "bg-warning/15 text-warning border-warning/20" },
};

interface StatusBadgeProps {
  status: Status;
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",
      config.className,
    )}>
      <span className={cn(
        "w-1.5 h-1.5 rounded-full",
        status === "running" && "animate-pulse-glow",
        status === "active" ? "bg-success" :
        status === "error" ? "bg-destructive" :
        status === "running" ? "bg-info" :
        status === "paused" || status === "pending" || status === "warning" ? "bg-warning" :
        "bg-muted-foreground"
      )} />
      {label || config.label}
    </span>
  );
}
