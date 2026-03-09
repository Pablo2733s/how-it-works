import { Users, Bot, Play, AlertTriangle, TrendingUp, Activity } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { StatCard } from "@/components/StatCard";
import { StatusBadge } from "@/components/StatusBadge";
import { PageHeader } from "@/components/PageHeader";
import { clients, robots, executions, activityData, performanceData } from "@/lib/mock-data";

const recentExecutions = executions.slice(0, 5);

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null;
  return (
    <div className="glass-card rounded-lg px-3 py-2 text-xs">
      <p className="text-foreground font-medium mb-1">{label}</p>
      {payload.map((entry: any, i: number) => (
        <p key={i} style={{ color: entry.color }}>{entry.name}: {entry.value}</p>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  const activeRobots = robots.filter(r => r.status === "active").length;
  const todayExecutions = executions.length;
  const errorCount = robots.filter(r => r.status === "error").length;

  return (
    <AppLayout>
      <PageHeader title="Dashboard" description="Visão geral da plataforma Pixaflow" />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total de Clientes" value={clients.length} change="+2 este mês" changeType="positive" icon={Users} />
        <StatCard title="Robôs Ativos" value={activeRobots} change={`${robots.length} total`} changeType="neutral" icon={Bot} />
        <StatCard title="Execuções Hoje" value={todayExecutions} change="+12% vs ontem" changeType="positive" icon={Play} />
        <StatCard title="Erros" value={errorCount} change={errorCount > 0 ? "Atenção necessária" : "Tudo OK"} changeType={errorCount > 0 ? "negative" : "positive"} icon={AlertTriangle} iconColor={errorCount > 0 ? "bg-destructive/10" : undefined} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Atividade Semanal</h3>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(228 10% 18%)" />
              <XAxis dataKey="name" tick={{ fill: "hsl(215 12% 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "hsl(215 12% 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="executions" name="Execuções" fill="hsl(168, 80%, 48%)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="errors" name="Erros" fill="hsl(0, 72%, 56%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-sm">Taxa de Sucesso (%)</h3>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(228 10% 18%)" />
              <XAxis dataKey="name" tick={{ fill: "hsl(215 12% 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis domain={[90, 100]} tick={{ fill: "hsl(215 12% 50%)", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <defs>
                <linearGradient id="successGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(168, 80%, 48%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(168, 80%, 48%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="successRate" name="Sucesso" stroke="hsl(168, 80%, 48%)" fill="url(#successGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent Executions */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card rounded-xl p-5">
        <h3 className="font-semibold text-sm mb-4">Execuções Recentes</h3>
        <div className="space-y-3">
          {recentExecutions.map((exec) => (
            <div key={exec.id} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
              <div className="flex items-center gap-3">
                <StatusBadge status={exec.status} />
                <div>
                  <p className="text-sm font-medium">{exec.robotName}</p>
                  <p className="text-xs text-muted-foreground">{exec.clientName}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{exec.duration}</p>
                <p className="text-xs text-muted-foreground">{exec.startedAt}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AppLayout>
  );
}
