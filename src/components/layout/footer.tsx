import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">Aérovia Santé</h3>
            <p className="text-sm text-slate-400 mb-4">
              Services professionnels en inhalothérapie. Une entreprise de Zenitude Billy Inc.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/etablissements" className="hover:text-white transition-colors">Établissements</Link></li>
              <li><Link href="/carrieres" className="hover:text-white transition-colors">Carrières</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>514-916-9131</li>
              <li>docarmel@gmail.com</li>
              <li>Partout au Québec</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link href="/conditions" className="hover:text-white transition-colors">Modalités d'utilisation</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zenitude Billy Inc. Tous droits réservés.</p>
          <p className="mt-2 md:mt-0">Plateforme de gestion Aérovia Santé</p>
        </div>
      </div>
    </footer>
  )
}
