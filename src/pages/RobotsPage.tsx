import { useState } from "react";
import { Search, Bot, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { robots as mockRobots } from "@/lib/mock-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RobotsPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockRobots.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.clientName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AppLayout>
      <PageHeader title="Robôs" description="Gerencie os robôs de automação">
        <Button size="sm" className="gap-2">
          <Plus className="w-4 h-4" /> Novo Robô
        </Button>
      </PageHeader>

      <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar robôs..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="paused">Pausados</SelectItem>
            <SelectItem value="error">Com Erro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((robot, i) => (
          <motion.div
            key={robot.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="stat-card space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{robot.name}</h3>
                  <p className="text-xs text-muted-foreground">{robot.clientName}</p>
                </div>
              </div>
              <StatusBadge status={robot.status} />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-muted-foreground mb-0.5">Tipo</p>
                <p className="font-medium">{robot.automationType}</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-0.5">Execuções</p>
                <p className="font-medium font-mono">{robot.executionCount.toLocaleString()}</p>
              </div>
            </div>

            <div className="pt-2 border-t border-border/50 text-xs text-muted-foreground">
              Última execução: {robot.lastExecution}
            </div>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-muted-foreground text-sm">Nenhum robô encontrado.</div>
      )}
    </AppLayout>
  );
}
