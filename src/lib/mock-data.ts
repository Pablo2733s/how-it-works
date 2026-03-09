// Mock data for Pixaflow platform

export interface Client {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "pending";
  createdAt: string;
  robotCount: number;
}

export interface Robot {
  id: string;
  name: string;
  clientId: string;
  clientName: string;
  automationType: string;
  status: "active" | "paused" | "error";
  lastExecution: string;
  executionCount: number;
}

export interface Execution {
  id: string;
  robotId: string;
  robotName: string;
  clientName: string;
  status: "success" | "error" | "running";
  startedAt: string;
  duration: string;
  result: string;
}

export interface LogEntry {
  id: string;
  robotId: string;
  robotName: string;
  level: "info" | "warning" | "error";
  message: string;
  timestamp: string;
}

export const clients: Client[] = [
  { id: "1", name: "Carlos Silva", company: "TechFlow Ltda", email: "carlos@techflow.com", phone: "(11) 99999-0001", status: "active", createdAt: "2025-01-15", robotCount: 3 },
  { id: "2", name: "Ana Souza", company: "DataSync SA", email: "ana@datasync.com", phone: "(21) 98888-0002", status: "active", createdAt: "2025-02-20", robotCount: 5 },
  { id: "3", name: "Rafael Costa", company: "AutoBot Inc", email: "rafael@autobot.io", phone: "(31) 97777-0003", status: "pending", createdAt: "2025-03-01", robotCount: 1 },
  { id: "4", name: "Juliana Lima", company: "SmartOps", email: "juliana@smartops.com", phone: "(41) 96666-0004", status: "active", createdAt: "2024-11-10", robotCount: 4 },
  { id: "5", name: "Pedro Mendes", company: "CloudRun", email: "pedro@cloudrun.dev", phone: "(51) 95555-0005", status: "inactive", createdAt: "2024-09-05", robotCount: 2 },
  { id: "6", name: "Mariana Ferreira", company: "NexGen Labs", email: "mariana@nexgen.ai", phone: "(61) 94444-0006", status: "active", createdAt: "2025-01-28", robotCount: 6 },
];

export const robots: Robot[] = [
  { id: "r1", name: "Scraper Financeiro", clientId: "1", clientName: "TechFlow Ltda", automationType: "Web Scraping", status: "active", lastExecution: "2026-03-09 14:30", executionCount: 342 },
  { id: "r2", name: "Bot de E-mail Marketing", clientId: "2", clientName: "DataSync SA", automationType: "Email Automation", status: "active", lastExecution: "2026-03-09 13:00", executionCount: 1205 },
  { id: "r3", name: "Monitor de Preços", clientId: "1", clientName: "TechFlow Ltda", automationType: "Price Monitoring", status: "paused", lastExecution: "2026-03-08 22:00", executionCount: 89 },
  { id: "r4", name: "Gerador de Relatórios", clientId: "4", clientName: "SmartOps", automationType: "Report Generation", status: "active", lastExecution: "2026-03-09 08:00", executionCount: 567 },
  { id: "r5", name: "Bot WhatsApp", clientId: "2", clientName: "DataSync SA", automationType: "Messaging", status: "error", lastExecution: "2026-03-09 10:15", executionCount: 2340 },
  { id: "r6", name: "Sync CRM", clientId: "6", clientName: "NexGen Labs", automationType: "Data Sync", status: "active", lastExecution: "2026-03-09 15:00", executionCount: 890 },
  { id: "r7", name: "Lead Collector", clientId: "6", clientName: "NexGen Labs", automationType: "Lead Generation", status: "active", lastExecution: "2026-03-09 14:45", executionCount: 456 },
  { id: "r8", name: "Backup Automático", clientId: "4", clientName: "SmartOps", automationType: "Backup", status: "active", lastExecution: "2026-03-09 03:00", executionCount: 730 },
];

export const executions: Execution[] = [
  { id: "e1", robotId: "r1", robotName: "Scraper Financeiro", clientName: "TechFlow Ltda", status: "success", startedAt: "2026-03-09 14:30", duration: "2m 15s", result: "128 registros coletados" },
  { id: "e2", robotId: "r2", robotName: "Bot de E-mail Marketing", clientName: "DataSync SA", status: "success", startedAt: "2026-03-09 13:00", duration: "45s", result: "350 emails enviados" },
  { id: "e3", robotId: "r5", robotName: "Bot WhatsApp", clientName: "DataSync SA", status: "error", startedAt: "2026-03-09 10:15", duration: "12s", result: "Timeout na conexão" },
  { id: "e4", robotId: "r4", robotName: "Gerador de Relatórios", clientName: "SmartOps", status: "success", startedAt: "2026-03-09 08:00", duration: "5m 30s", result: "12 relatórios gerados" },
  { id: "e5", robotId: "r6", robotName: "Sync CRM", clientName: "NexGen Labs", status: "running", startedAt: "2026-03-09 15:00", duration: "em andamento", result: "Sincronizando..." },
  { id: "e6", robotId: "r8", robotName: "Backup Automático", clientName: "SmartOps", status: "success", startedAt: "2026-03-09 03:00", duration: "8m 12s", result: "Backup completo - 2.4GB" },
  { id: "e7", robotId: "r7", robotName: "Lead Collector", clientName: "NexGen Labs", status: "success", startedAt: "2026-03-09 14:45", duration: "1m 58s", result: "47 leads capturados" },
];

export const logs: LogEntry[] = [
  { id: "l1", robotId: "r1", robotName: "Scraper Financeiro", level: "info", message: "Execução iniciada - coletando dados de 5 fontes", timestamp: "2026-03-09 14:30:00" },
  { id: "l2", robotId: "r1", robotName: "Scraper Financeiro", level: "info", message: "128 registros processados com sucesso", timestamp: "2026-03-09 14:32:15" },
  { id: "l3", robotId: "r5", robotName: "Bot WhatsApp", level: "error", message: "Erro: Timeout ao conectar com a API do WhatsApp após 12s", timestamp: "2026-03-09 10:15:12" },
  { id: "l4", robotId: "r5", robotName: "Bot WhatsApp", level: "warning", message: "Tentativa de reconexão 3/3 falhou", timestamp: "2026-03-09 10:15:10" },
  { id: "l5", robotId: "r2", robotName: "Bot de E-mail Marketing", level: "info", message: "Campanha 'Março 2026' enviada para 350 contatos", timestamp: "2026-03-09 13:00:45" },
  { id: "l6", robotId: "r4", robotName: "Gerador de Relatórios", level: "info", message: "12 relatórios PDF gerados e armazenados", timestamp: "2026-03-09 08:05:30" },
  { id: "l7", robotId: "r6", robotName: "Sync CRM", level: "warning", message: "3 registros duplicados ignorados durante sincronização", timestamp: "2026-03-09 15:02:00" },
  { id: "l8", robotId: "r8", robotName: "Backup Automático", level: "info", message: "Backup incremental concluído: 2.4GB transferidos", timestamp: "2026-03-09 03:08:12" },
];

// Chart data for dashboard
export const activityData = [
  { name: "Seg", executions: 45, errors: 2 },
  { name: "Ter", executions: 52, errors: 1 },
  { name: "Qua", executions: 48, errors: 3 },
  { name: "Qui", executions: 61, errors: 0 },
  { name: "Sex", executions: 55, errors: 2 },
  { name: "Sáb", executions: 32, errors: 1 },
  { name: "Dom", executions: 28, errors: 0 },
];

export const performanceData = [
  { name: "Jan", successRate: 96 },
  { name: "Fev", successRate: 94 },
  { name: "Mar", successRate: 98 },
  { name: "Abr", successRate: 97 },
  { name: "Mai", successRate: 95 },
  { name: "Jun", successRate: 99 },
];
