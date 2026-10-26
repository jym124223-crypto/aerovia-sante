import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Aérovia Santé",
  description: "Communiquez avec Aérovia Santé pour vos besoins en inhalothérapie partout au Québec.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Contact</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Nous sommes à votre disposition pour répondre à vos questions et discuter de vos besoins en inhalothérapie.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Coordonnées</h2>
            
            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary-50 p-3 rounded-full text-primary-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Téléphone</h3>
                <p className="text-slate-600 mt-1">514-916-9131</p>
                <Button variant="outline" className="mt-2" asChild>
                  <a href="tel:5149169131">Appeler maintenant</a>
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary-50 p-3 rounded-full text-primary-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Courriel</h3>
                <p className="text-slate-600 mt-1">docarmel@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary-50 p-3 rounded-full text-primary-600">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Heures de disponibilité</h3>
                <p className="text-slate-600 mt-1">Lundi au vendredi : 8h00 à 17h00</p>
                <p className="text-slate-600">Urgence : 24/7 pour les établissements partenaires</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="mt-1 bg-primary-50 p-3 rounded-full text-primary-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Régions desservies</h3>
                <p className="text-slate-600 mt-1">Partout au Québec, incluant les régions éloignées.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <Card className="border-slate-200 shadow-md">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Courriel</Label>
                  <Input id="email" type="email" placeholder="votre@courriel.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input id="subject" placeholder="Sujet de votre message" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Comment pouvons-nous vous aider ?" className="min-h-[150px]" />
                </div>

                <div className="bg-orange-50 border border-orange-100 p-4 rounded-md text-sm text-orange-800">
                  <strong>Avertissement de confidentialité :</strong> Veuillez ne transmettre aucun renseignement permettant d’identifier un patient dans ce formulaire.
                </div>
                
                <Button type="button" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
