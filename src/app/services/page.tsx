import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Baby, ShieldAlert, Stethoscope, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Aérovia Santé",
  description: "Découvrez nos services professionnels en inhalothérapie : soins généraux, bloc opératoire, urgence, pédiatrie et remplacements cliniques.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Inhalothérapie générale",
      icon: <Users className="h-8 w-8 text-primary-500" />,
      items: [
        "Évaluation respiratoire",
        "Administration des traitements respiratoires",
        "Oxygénothérapie et aérosolthérapie",
        "Ventilation non invasive et mécanique",
        "Surveillance respiratoire",
        "Assistance lors de situations urgentes",
        "Soutien aux équipes cliniques",
        "Soins respiratoires auprès de diverses clientèles"
      ]
    },
    {
      title: "Bloc opératoire et anesthésie",
      icon: <Stethoscope className="h-8 w-8 text-secondary-500" />,
      items: [
        "Assistance en anesthésie",
        "Préparation et vérification du matériel respiratoire",
        "Gestion des voies respiratoires selon les fonctions autorisées",
        "Surveillance ventilatoire",
        "Soutien au bloc opératoire",
        "Participation aux procédures nécessitant une expertise",
        "Couverture de quarts spécialisés"
      ]
    },
    {
      title: "Soins critiques et urgence",
      icon: <Activity className="h-8 w-8 text-red-500" />,
      items: [
        "Prise en charge des patients instables",
        "Assistance ventilatoire",
        "Soutien lors des urgences respiratoires",
        "Surveillance des patients sous ventilation",
        "Collaboration interdisciplinaire",
        "Soutien lors des transferts et interventions critiques"
      ]
    },
    {
      title: "Pédiatrie et néonatalogie",
      icon: <Baby className="h-8 w-8 text-blue-400" />,
      items: [
        "Soins respiratoires aux nourrissons",
        "Interventions auprès des enfants",
        "Soins spécialisés aux nouveau-nés",
        "Prise en charge des patients ayant des besoins particuliers"
      ]
    },
    {
      title: "Remplacements et renfort clinique",
      icon: <ShieldAlert className="h-8 w-8 text-orange-500" />,
      items: [
        "Remplacement ponctuel, de courte ou longue durée",
        "Couverture de vacances et de congés",
        "Renfort lors d'une pénurie",
        "Couverture de quarts de jour, soir ou nuit",
        "Soutien dans les régions éloignées",
        "Contrats temporaires et mandats particuliers"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Nos Services</h1>
        <p className="text-lg text-slate-600">
          Des soins respiratoires professionnels et flexibles, adaptés aux réalités de chaque établissement de santé.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="mb-4 bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center">
                {service.icon}
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-secondary-500 mr-2 mt-1">•</span>
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-blue-50 rounded-2xl p-8 border border-blue-100 text-center max-w-4xl mx-auto">
        <p className="text-sm text-slate-600">
          <em>Note : Les services sont fournis en fonction des qualifications, des autorisations professionnelles, des besoins de l'établissement et du cadre réglementaire applicable au Québec.</em>
        </p>
      </div>
    </div>
  )
}
