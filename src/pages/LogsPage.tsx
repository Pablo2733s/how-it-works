import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { logs } from "@/lib/mock-data";
import { Terminal } from "lucide-react";

export default function LogsPage() {
  return (
    <AppLayout>
      <PageHeader title="Logs" description="Registros de execução dos robôs" />

      <div className="glass-card rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-muted-foreground">pixaflow://logs</span>
        </div>
        <div className="divide-y divide-border/30">
          {logs.map((log, i) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.03 }}
              className="flex items-start gap-3 px-5 py-3 hover:bg-accent/20 transition-colors"
            >
              <span className="text-xs font-mono text-muted-foreground shrink-0 pt-0.5 w-36">{log.timestamp}</span>
              <StatusBadge status={log.level} />
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-primary mr-2">[{log.robotName}]</span>
                <span className="text-xs font-mono text-foreground/90">{log.message}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
