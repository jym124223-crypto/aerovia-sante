import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, AlertCircle, CheckCircle2 } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Tableau de bord</h1>
        <p className="text-slate-500 mt-1">Bienvenue dans l'espace d'administration de la plateforme Aérovia Santé.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nouvelles demandes</CardTitle>
            <Building2 className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary-600">3</div>
            <p className="text-xs text-slate-500">Demandes d'établissements en attente</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Nouvelles candidatures</CardTitle>
            <Users className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary-600">5</div>
            <p className="text-xs text-slate-500">Inhalothérapeutes à valider</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Affectations urgentes</CardTitle>
            <AlertCircle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">2</div>
            <p className="text-xs text-slate-500">Moins de 48 heures</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Affectations actives</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">12</div>
            <p className="text-xs text-slate-500">Pour la semaine en cours</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Demandes récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { nom: "Hôpital Sainte-Croix", service: "Urgence", statut: "Nouvelle" },
                { nom: "CHSLD Vigi", service: "Inhalothérapie", statut: "À valider" },
                { nom: "Clinique Privée MD", service: "Apnée du sommeil", statut: "Recherche" }
              ].map((demande, i) => (
                <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{demande.nom}</p>
                    <p className="text-xs text-slate-500">{demande.service}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                    {demande.statut}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Candidatures récentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { nom: "Julie Tremblay", exp: "5 ans", statut: "Nouvelle" },
                { nom: "Martin Gagnon", exp: "12 ans", statut: "Entrevue" },
                { nom: "Sarah Leblanc", exp: "2 ans", statut: "À vérifier" }
              ].map((cand, i) => (
                <div key={i} className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{cand.nom}</p>
                    <p className="text-xs text-slate-500">{cand.exp} d'expérience</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
                    {cand.statut}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
