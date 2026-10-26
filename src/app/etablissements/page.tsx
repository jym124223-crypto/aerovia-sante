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
  institutionName: z.string().min(2, "Le nom de l'établissement est requis"),
  contactName: z.string().min(2, "Le nom est requis"),
  role: z.string().min(2, "La fonction est requise"),
  email: z.string().email("Courriel invalide"),
  phone: z.string().min(10, "Numéro de téléphone invalide"),
  region: z.string().min(2, "La région est requise"),
  city: z.string().min(2, "La ville est requise"),
  institutionType: z.string().min(2, "Le type d'établissement est requis"),
  department: z.string().min(2, "Le service concerné est requis"),
  specialty: z.string().optional(),
  requiredTherapists: z.coerce.number().min(1, "Au moins 1 personne requise"),
  startDate: z.string().min(1, "La date de début est requise"),
  endDate: z.string().optional(),
  shift: z.string().min(2, "Le quart est requis"),
  detailedSchedule: z.string().optional(),
  urgencyLevel: z.string().min(2, "Le niveau d'urgence est requis"),
  specificSkills: z.string().optional(),
  description: z.string().min(10, "Une description du besoin est requise"),
  communicationPref: z.string().min(2, "Préférence requise"),
  consent: z.boolean().refine(val => val === true, {
    message: "Vous devez consentir à être contacté"
  })
})

export default function EtablissementsPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const form = useForm<z.input<typeof formSchema>, any, z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      requiredTherapists: 1,
      consent: false,
    }
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Dans la phase 1, nous pourrions faire un appel API ici pour sauvegarder dans la base de données.
    // Pour l'instant, on simule l'envoi réussi.
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
            <h2 className="text-2xl font-bold text-green-800 mb-4">Merci. Votre demande a été transmise.</h2>
            <p className="text-green-700">
              Un membre de l'équipe Aérovia Santé communiquera avec vous afin de valider les besoins et les modalités de l'affectation.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Vous recherchez des inhalothérapeutes ?</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Zenitude Billy Inc. (Aérovia Santé) aide les établissements de santé à répondre à leurs besoins de personnel en inhalothérapie. Que le besoin soit urgent, ponctuel, planifié ou spécialisé, notre objectif est de proposer une ressource dont les compétences et les disponibilités correspondent réellement à l’affectation.
        </p>
      </div>

      <Card className="shadow-md">
        <CardHeader className="bg-slate-50 border-b border-slate-100 pb-8">
          <CardTitle>Demande de services</CardTitle>
          <CardDescription>
            Remplissez ce formulaire pour nous faire part de vos besoins en personnel.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Informations de l'établissement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nom de l'établissement *</Label>
                  <Input {...form.register("institutionName")} />
                  {form.formState.errors.institutionName && <p className="text-sm text-red-500">{form.formState.errors.institutionName.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Type d'établissement *</Label>
                  <Input {...form.register("institutionType")} placeholder="Ex: Hôpital, CHSLD, Clinique privée" />
                </div>
                <div className="space-y-2">
                  <Label>Région *</Label>
                  <Input {...form.register("region")} />
                </div>
                <div className="space-y-2">
                  <Label>Ville *</Label>
                  <Input {...form.register("city")} />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Personne responsable</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Nom complet *</Label>
                  <Input {...form.register("contactName")} />
                </div>
                <div className="space-y-2">
                  <Label>Fonction / Titre *</Label>
                  <Input {...form.register("role")} />
                </div>
                <div className="space-y-2">
                  <Label>Courriel *</Label>
                  <Input type="email" {...form.register("email")} />
                </div>
                <div className="space-y-2">
                  <Label>Téléphone *</Label>
                  <Input type="tel" {...form.register("phone")} />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-primary-700 border-b border-slate-200 pb-2">Détails du besoin</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Service concerné *</Label>
                  <Input {...form.register("department")} placeholder="Ex: Urgence, Soins intensifs, Bloc opératoire" />
                </div>
                <div className="space-y-2">
                  <Label>Spécialité recherchée</Label>
                  <Input {...form.register("specialty")} />
                </div>
                <div className="space-y-2">
                  <Label>Date de début *</Label>
                  <Input type="date" {...form.register("startDate")} />
                </div>
                <div className="space-y-2">
                  <Label>Date de fin (si applicable)</Label>
                  <Input type="date" {...form.register("endDate")} />
                </div>
                <div className="space-y-2">
                  <Label>Quart(s) *</Label>
                  <select 
                    {...form.register("shift")}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Jour">Jour</option>
                    <option value="Soir">Soir</option>
                    <option value="Nuit">Nuit</option>
                    <option value="Rotatif">Rotatif</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Nombre d'inhalothérapeutes requis *</Label>
                  <Input type="number" min="1" {...form.register("requiredTherapists")} />
                </div>
                <div className="space-y-2">
                  <Label>Niveau d'urgence *</Label>
                  <select 
                    {...form.register("urgencyLevel")}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Faible (Planifié)">Faible (Planifié)</option>
                    <option value="Moyen (Dans les 2 semaines)">Moyen (Dans les 2 semaines)</option>
                    <option value="Élevé (Moins de 48h)">Élevé (Moins de 48h)</option>
                    <option value="Critique (Immédiat)">Critique (Immédiat)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Préférence de communication *</Label>
                  <select 
                    {...form.register("communicationPref")}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Sélectionner</option>
                    <option value="Courriel">Courriel</option>
                    <option value="Téléphone">Téléphone</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Horaire détaillé</Label>
                <Textarea {...form.register("detailedSchedule")} placeholder="Précisez les heures et jours de travail" />
              </div>
              
              <div className="space-y-2">
                <Label>Compétences particulières requises</Label>
                <Textarea {...form.register("specificSkills")} />
              </div>
              
              <div className="space-y-2">
                <Label>Description du besoin *</Label>
                <Textarea {...form.register("description")} className="min-h-[100px]" />
                {form.formState.errors.description && <p className="text-sm text-red-500">{form.formState.errors.description.message}</p>}
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-100 p-4 rounded-md text-sm text-orange-800">
              <strong>Avertissement de confidentialité :</strong> Veuillez ne transmettre aucun renseignement permettant d’identifier un patient dans ce formulaire.
            </div>

            <div className="flex items-start space-x-2">
              <input type="checkbox" id="consent" {...form.register("consent")} className="mt-1" />
              <Label htmlFor="consent" className="font-normal leading-tight">
                J'accepte d'être contacté par Aérovia Santé concernant cette demande et je consens au traitement de ces renseignements selon la politique de confidentialité. *
              </Label>
            </div>
            {form.formState.errors.consent && <p className="text-sm text-red-500">{form.formState.errors.consent.message}</p>}

            <Button type="submit" size="lg" className="w-full sm:w-auto">Soumettre la demande</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
