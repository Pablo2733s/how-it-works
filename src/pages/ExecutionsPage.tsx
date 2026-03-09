import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { executions } from "@/lib/mock-data";
import { Clock, CheckCircle2, XCircle, Loader2 } from "lucide-react";

const statusIcon = {
  success: <CheckCircle2 className="w-4 h-4 text-success" />,
  error: <XCircle className="w-4 h-4 text-destructive" />,
  running: <Loader2 className="w-4 h-4 text-info animate-spin" />,
};

export default function ExecutionsPage() {
  return (
    <AppLayout>
      <PageHeader title="Execuções" description="Histórico de execuções dos robôs" />

      <div className="space-y-3">
        {executions.map((exec, i) => (
          <motion.div
            key={exec.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-xl p-4 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
              {statusIcon[exec.status]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-semibold truncate">{exec.robotName}</p>
                <StatusBadge status={exec.status} />
              </div>
              <p className="text-xs text-muted-foreground">{exec.clientName} • {exec.result}</p>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {exec.duration}
              </div>
              <p className="text-xs text-muted-foreground mt-0.5">{exec.startedAt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AppLayout>
  );
}
