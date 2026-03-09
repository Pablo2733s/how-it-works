import { useState } from "react";
import { Plus, Search, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { clients as mockClients, Client } from "@/lib/mock-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>(mockClients);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const filtered = clients.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") as string,
      company: form.get("company") as string,
      email: form.get("email") as string,
      phone: form.get("phone") as string,
      status: (form.get("status") as Client["status"]) || "active",
    };

    if (editingClient) {
      setClients(prev => prev.map(c => c.id === editingClient.id ? { ...c, ...data } : c));
      toast.success("Cliente atualizado com sucesso");
    } else {
      const newClient: Client = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date().toISOString().split("T")[0],
        robotCount: 0,
      };
      setClients(prev => [...prev, newClient]);
      toast.success("Cliente adicionado com sucesso");
    }
    setDialogOpen(false);
    setEditingClient(null);
  };

  const handleDelete = (id: string) => {
    setClients(prev => prev.filter(c => c.id !== id));
    toast.success("Cliente removido");
  };

  const openEdit = (client: Client) => {
    setEditingClient(client);
    setDialogOpen(true);
  };

  return (
    <AppLayout>
      <PageHeader title="Clientes" description="Gerencie os clientes da plataforma">
        <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) setEditingClient(null); }}>
          <DialogTrigger asChild>
            <Button size="sm" className="gap-2">
              <Plus className="w-4 h-4" /> Novo Cliente
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
              <DialogTitle>{editingClient ? "Editar Cliente" : "Novo Cliente"}</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSave} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input id="name" name="name" defaultValue={editingClient?.name} required placeholder="Nome do cliente" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input id="company" name="company" defaultValue={editingClient?.company} required placeholder="Nome da empresa" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" defaultValue={editingClient?.email} required placeholder="email@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input id="phone" name="phone" defaultValue={editingClient?.phone} placeholder="(00) 00000-0000" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Status</Label>
                <select name="status" defaultValue={editingClient?.status || "active"} className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm">
                  <option value="active">Ativo</option>
                  <option value="inactive">Inativo</option>
                  <option value="pending">Pendente</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button type="button" variant="outline" onClick={() => { setDialogOpen(false); setEditingClient(null); }}>Cancelar</Button>
                <Button type="submit">Salvar</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </PageHeader>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input placeholder="Buscar clientes..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="active">Ativos</SelectItem>
            <SelectItem value="inactive">Inativos</SelectItem>
            <SelectItem value="pending">Pendentes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Nome</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Empresa</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Email</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Status</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Robôs</th>
                <th className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3">Cadastro</th>
                <th className="text-right text-xs font-medium text-muted-foreground uppercase tracking-wider px-5 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((client) => (
                <tr key={client.id} className="border-b border-border/30 hover:bg-accent/30 transition-colors">
                  <td className="px-5 py-3.5 text-sm font-medium">{client.name}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{client.company}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{client.email}</td>
                  <td className="px-5 py-3.5"><StatusBadge status={client.status} /></td>
                  <td className="px-5 py-3.5 text-sm font-mono text-muted-foreground">{client.robotCount}</td>
                  <td className="px-5 py-3.5 text-sm text-muted-foreground">{client.createdAt}</td>
                  <td className="px-5 py-3.5 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEdit(client)}>
                          <Pencil className="w-3.5 h-3.5 mr-2" /> Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(client.id)} className="text-destructive">
                          <Trash2 className="w-3.5 h-3.5 mr-2" /> Remover
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground text-sm">Nenhum cliente encontrado.</div>
        )}
      </motion.div>
    </AppLayout>
  );
}
