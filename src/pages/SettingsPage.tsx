import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <AppLayout>
      <PageHeader title="Configurações" description="Configurações gerais da plataforma" />

      <div className="glass-card rounded-xl p-6 max-w-2xl space-y-6">
        <div>
          <h3 className="font-semibold text-sm mb-4">Perfil</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Nome</Label>
              <Input defaultValue="Admin" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input defaultValue="admin@pixaflow.io" />
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-semibold text-sm mb-4">Plataforma</h3>
          <div className="space-y-2">
            <Label>Nome da plataforma</Label>
            <Input defaultValue="Pixaflow" />
          </div>
        </div>

        <Separator />

        <div className="flex justify-end">
          <Button>Salvar alterações</Button>
        </div>
      </div>
    </AppLayout>
  );
}
