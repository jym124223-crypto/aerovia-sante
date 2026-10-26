"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Activity, Clock, Map, PhoneCall, ShieldCheck, Stethoscope } from "lucide-react";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-24 pb-32">
        <div className="absolute inset-0 bg-grid-slate-200/50 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
              Des services d’inhalothérapie fiables, <span className="text-primary-600">partout au Québec</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Zenitude Billy Inc. accompagne les établissements de santé en leur donnant accès à des professionnels expérimentés en inhalothérapie générale, en soins respiratoires et au bloc opératoire.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button asChild size="lg" className="text-base h-12 px-8">
                <Link href="/etablissements">Demander des services</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base h-12 px-8">
                <Link href="/carrieres">Joindre notre équipe</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Pourquoi choisir Aérovia Santé ?</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Une approche rigoureuse et humaine pour répondre à vos besoins en personnel clinique.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp}>
              <Card className="h-full border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Expérience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Une expertise développée depuis 1990 dans différents environnements de soins, au Québec et à l’international.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="h-full border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary-50 text-secondary-600 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Flexibilité</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Des services adaptés aux besoins ponctuels, temporaires, régionaux ou spécialisés des établissements.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="h-full border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                    <Map className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">Couverture provinciale</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Une disponibilité pour des affectations partout au Québec, directement ou en collaboration avec des partenaires.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-900">Nos principaux services</h2>
              <p className="text-lg text-slate-600">
                Nous mettons à votre disposition des inhalothérapeutes qualifiés pour une variété de contextes cliniques.
              </p>
              
              <ul className="space-y-4 pt-4">
                <li className="flex items-start">
                  <Activity className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Soins critiques et urgence</strong>
                    <span className="text-slate-600 text-sm">Prise en charge de patients instables et assistance ventilatoire.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Stethoscope className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block">Bloc opératoire et anesthésie</strong>
                    <span className="text-slate-600 text-sm">Assistance, préparation du matériel et couverture de quarts spécialisés.</span>
                  </div>
                </li>
              </ul>
              
              <div className="pt-6">
                <Button asChild variant="outline">
                  <Link href="/services">Voir tous les services</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl bg-slate-200 overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-300 animate-pulse flex items-center justify-center">
                <span className="text-slate-500 font-medium">[Image d'inhalothérapeutes au travail]</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-secondary-600 rounded-full opacity-20 blur-3xl" />
        
        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Vous avez un besoin urgent ou planifié en inhalothérapie ?</h2>
            <p className="text-lg text-primary-100 max-w-2xl mx-auto">
              Communiquez avec Zenitude Billy Inc. pour discuter de votre situation et trouver les professionnels de la santé dont vous avez besoin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-white text-primary-700 hover:bg-slate-100 h-12 px-8">
                <Link href="/contact">
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Nous appeler
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-secondary-500 hover:bg-secondary-400 text-white border-0 h-12 px-8">
                <Link href="/etablissements">Envoyer une demande</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
