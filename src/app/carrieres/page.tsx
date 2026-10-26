"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const formSchema = z.object({
  firstName: z.string().min(2, "Prénom requis"),
  lastName: z.string().min(2, "Nom requis"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  email: z.string().email("Courriel invalide"),
  city: z.string().min(2, "Ville de résidence requise"),
  regions: z.string().min(2, "Régions acceptées requises"),
  licenseNumber: z.string().min(2, "Numéro de permis professionnel requis"),
  yearsOfExperience: z.coerce.number().min(0, "Années d'expérience invalides"),
  
  // Expérience (checkboxes)
  expGeneral: z.boolean().default(false),
  expCritical: z.boolean().default(false),
  expEmergency: z.boolean().default(false),
  expOperatingRoom: z.boolean().default(false),
  expAnesthesia: z.boolean().default(false),
  expPediatrics: z.boolean().default(false),
  expNeonatology: z.boolean().default(false),
  expTransport: z.boolean().default(false),
  
  // Disponibilité
  availDay: z.boolean().default(false),
  availEvening: z.boolean().default(false),
  availNight: z.boolean().default(false),
  availWeek: z.boolean().default(false),
  availWeekend: z.boolean().default(false),
  availRemote: z.boolean().default(false),
  
  hasVehicle: z.boolean().default(false),
  availableFrom: z.string().min(1, "Date de disponibilité requise"),
  desiredMandate: z.string().min(2, "Type de mandat recherché requis"),
  comments: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: "Vous devez consentir au traitement de vos renseignements"
  })
})

export default function CarrieresPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<z.input<typeof formSchema>, any, z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      expGeneral: false, expCritical: false, expEmergency: false, 
      expOperatingRoom: false, expAnesthesia: false, expPediatrics: false, 
      expNeonatology: false, expTransport: false,
      availDay: false, availEvening: false, availNight: false, 
      availWeek: false, availWeekend: false, availRemote: false,
      hasVehicle: false, consent: false
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-24 max-w-2xl text-center">
        <Card className="border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">Candidature envoyée avec succès</h2>
            <p className="text-green-700">
              Merci pour votre intérêt. L'équipe d'Aérovia Santé examinera votre profil et communiquera avec vous prochainement.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Joignez-vous au réseau Aérovia Santé</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Nous souhaitons bâtir un réseau d’inhalothérapeutes compétents, autonomes et intéressés par des affectations flexibles partout au Québec. Que vous recherchiez des quarts occasionnels, un mandat temporaire, une expérience en région ou une affectation spécialisée, transmettez-nous votre profil.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-slate-50 border-0 shadow-sm text-center">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-primary-700 mb-2">Flexibilité</h3>
            <p className="text-sm text-slate-600">Gérez vos disponibilités et choisissez vos affectations.</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-50 border-0 shadow-sm text-center">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-primary-700 mb-2">Diversité</h3>
            <p className="text-sm text-slate-600">Possibilités en inhalothérapie générale ou spécialisée.</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-50 border-0 shadow-sm text-center">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-primary-700 mb-2">Support</h3>
            <p className="text-sm text-slate-600">Communication centralisée et gestion structurée.</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-8">
          <CardTitle>Formulaire de candidature</CardTitle>
          <CardDescription>
            Remplissez ce profil professionnel. Vos informations resteront strictement confidentielles.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Informations personnelles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Prénom *</Label>
                  <Input {...form.register("firstName")} />
                </div>
                <div className="space-y-2">
                  <Label>Nom *</Label>
                  <Input {...form.register("lastName")} />
                </div>
                <div className="space-y-2">
                  <Label>Téléphone *</Label>
                  <Input type="tel" {...form.register("phone")} />
                </div>
                <div className="space-y-2">
                  <Label>Courriel *</Label>
                  <Input type="email" {...form.register("email")} />
                </div>
                <div className="space-y-2">
                  <Label>Ville de résidence *</Label>
                  <Input {...form.register("city")} />
                </div>
                <div className="space-y-2 flex flex-col justify-end">
                  <div className="flex items-center space-x-2 pb-2">
                    <input type="checkbox" id="hasVehicle" {...form.register("hasVehicle")} />
                    <Label htmlFor="hasVehicle">Je possède un véhicule</Label>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Profil professionnel</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Numéro de permis professionnel *</Label>
                  <Input {...form.register("licenseNumber")} />
                </div>
                <div className="space-y-2">
                  <Label>Nombre d'années d'expérience *</Label>
                  <Input type="number" min="0" {...form.register("yearsOfExperience")} />
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-base">Domaines d'expérience (Cochez tous ceux qui s'appliquent)</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { id: "expGeneral", label: "Inhalothérapie générale" },
                    { id: "expCritical", label: "Soins critiques" },
                    { id: "expEmergency", label: "Urgence" },
                    { id: "expOperatingRoom", label: "Bloc opératoire" },
                    { id: "expAnesthesia", label: "Anesthésie" },
                    { id: "expPediatrics", label: "Pédiatrie" },
                    { id: "expNeonatology", label: "Néonatalogie" },
                    { id: "expTransport", label: "Transport" }
                  ].map(exp => (
                    <div key={exp.id} className="flex items-center space-x-2">
                      <input type="checkbox" id={exp.id} {...form.register(exp.id as any)} />
                      <Label htmlFor={exp.id} className="font-normal">{exp.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Disponibilités</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Date de disponibilité *</Label>
                  <Input type="date" {...form.register("availableFrom")} />
                </div>
                <div className="space-y-2">
                  <Label>Type de mandat recherché *</Label>
                  <select 
                    {...form.register("desiredMandate")}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Temps plein">Temps plein</option>
                    <option value="Temps partiel">Temps partiel</option>
                    <option value="Occasionnel">Occasionnel</option>
                    <option value="Mandat temporaire">Mandat temporaire / Contrat</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>Régions où vous acceptez de travailler *</Label>
                  <Input {...form.register("regions")} placeholder="Ex: Montréal, Montérégie, Abitibi, etc." />
                </div>
              </div>
              
              <div className="space-y-4">
                <Label className="text-base">Quarts et moments disponibles</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { id: "availDay", label: "Jour" },
                    { id: "availEvening", label: "Soir" },
                    { id: "availNight", label: "Nuit" },
                    { id: "availWeek", label: "Semaine" },
                    { id: "availWeekend", label: "Fin de semaine" },
                    { id: "availRemote", label: "Disponible pour régions éloignées" }
                  ].map(avail => (
                    <div key={avail.id} className="flex items-center space-x-2">
                      <input type="checkbox" id={avail.id} {...form.register(avail.id as any)} />
                      <Label htmlFor={avail.id} className="font-normal">{avail.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Documents et remarques</h3>
              <div className="space-y-2">
                <Label>Commentaires supplémentaires</Label>
                <Textarea {...form.register("comments")} placeholder="Précisions sur vos disponibilités, etc." />
              </div>
              <div className="text-sm text-slate-500 italic">
                La fonctionnalité de téléversement du Curriculum Vitæ sera ajoutée ultérieurement via le Portail Inhalothérapeute sécurisé.
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="consent" {...form.register("consent")} className="mt-1" />
              <Label htmlFor="consent" className="font-normal leading-tight">
                Je consens à ce qu'Aérovia Santé recueille, utilise et conserve mes renseignements personnels aux fins d'évaluation de ma candidature et de gestion des affectations, conformément à la politique de confidentialité. *
              </Label>
            </div>
            {form.formState.errors.consent && <p className="text-sm text-red-500">{form.formState.errors.consent.message}</p>}

            <Button type="submit" size="lg" className="w-full sm:w-auto">Soumettre ma candidature</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
