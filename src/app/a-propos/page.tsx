import { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos | Aérovia Santé",
  description: "L'histoire et la vision de Zenitude Billy Inc., agence de services de santé spécialisée en inhalothérapie depuis 1990.",
}

export default function AboutPage() {
  const valeurs = [
    "Professionnalisme",
    "Sécurité",
    "Fiabilité",
    "Respect",
    "Flexibilité",
    "Collaboration",
    "Organisation",
    "Qualité des soins"
  ]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Notre histoire</h1>
          <div className="h-1 w-20 bg-secondary-500 mx-auto rounded"></div>
        </div>

        <div className="prose prose-lg prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            <strong>Zenitude Billy Inc.</strong> (Aérovia Santé) est une agence de services de santé spécialisée en inhalothérapie.
            Elle s’appuie sur plusieurs décennies d’expérience clinique acquise dans différents milieux de soins et auprès de diverses clientèles.
          </p>
          <p>
            Depuis 1990, son fondateur œuvre dans le domaine de la santé. Son parcours comprend des expériences 
            professionnelles à Cuba, en Espagne et au Québec, ainsi qu’une pratique auprès des adultes, des enfants et des nouveau-nés.
          </p>
          <p>
            Cette expérience permet à notre agence de comprendre les réalités du terrain, les besoins des établissements, 
            les exigences du travail clinique et l’importance d’une organisation rigoureuse des ressources humaines.
          </p>
          <p className="text-xl font-medium text-primary-700 pt-4 border-t border-slate-200">
            La mission de l’agence est de faciliter l’accès à des inhalothérapeutes compétents, disponibles et bien jumelés aux besoins de chaque établissement.
          </p>
        </div>

        <div className="pt-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Nos Valeurs</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {valeurs.map((valeur, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="font-semibold text-primary-700">{valeur}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
