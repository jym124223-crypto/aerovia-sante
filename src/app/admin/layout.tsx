import { Metadata } from "next"
import Link from "next/link"
import { Shield, LayoutDashboard, Users, FileText, Settings } from "lucide-react"

export const metadata: Metadata = {
  title: "Administration | Aérovia Santé",
  description: "Tableau de bord administratif pour Aérovia Santé.",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-80px)] bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:block">
        <div className="p-6">
          <div className="flex items-center space-x-2 text-white mb-8">
            <Shield className="h-6 w-6 text-secondary-500" />
            <span className="text-lg font-bold">Aérovia Admin</span>
          </div>
          <nav className="space-y-2">
            <Link href="/admin" className="flex items-center space-x-3 px-3 py-2 rounded-md bg-slate-800 text-white">
              <LayoutDashboard className="h-5 w-5" />
              <span>Tableau de bord</span>
            </Link>
            <Link href="/admin/demandes" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
              <FileText className="h-5 w-5" />
              <span>Demandes (Étab.)</span>
            </Link>
            <Link href="/admin/candidatures" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
              <Users className="h-5 w-5" />
              <span>Candidatures</span>
            </Link>
            <Link href="/admin/parametres" className="flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors">
              <Settings className="h-5 w-5" />
              <span>Paramètres</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
