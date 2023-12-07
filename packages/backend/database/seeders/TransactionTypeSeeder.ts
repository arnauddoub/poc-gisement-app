import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TransactionType from '../../app/Models/TransactionType'

export default class extends BaseSeeder {
  public async run() {
    const types = [
      'Loyer hors charges locatives',
      'Taxe foncière',
      'Charges de copropriété',
      'Charges locataire',
      'Frais agence',
      'Eau',
      'Energie',
      'Internet',
      'Téléphone',
      'Charges courantes',
      'Fond de prévoyance',
      'Fond de roulement',
      'Fond Travaux ALUR',
      'Travaux de copropriété',
      'Assurance emprunteur',
      'Assurance habitation',
      'Assurance propriétaire non occupant',
      'Autres assurances',
      'Autres Equipements',
      'Cuisine équipée',
      'Electroménager',
      'Entretien et réparations',
      'Mobilier',
      'Terrain',
      'Travaux',
      'Adhésion à un OGA',
      'Amendes de circulation',
      'Autres charges',
      'Autres honoraires',
      'Dépôt de garantie rendu au locataire',
      'Frais de comptabilité',
      'Frais de diagnostics',
      'Frais de tenue de compte',
      'Frais postaux',
      'Honoraires agence (mise en relation et gestion)',
      'Publicité',
      'Séminaires et formations',
      'Commission garantie / de caution (Crédit Logement)',
      'Droits de mutations',
      'Fond mutuel de garantie (Crédit logement)',
      'Frais de courtage emprunt',
      'Honoraires du notaire',
      'Indemnité commercialité',
    ]

    await TransactionType.createMany(types.map((type) => ({ name: type })))
  }
}
