import { PropertyCategory } from "../enums/PropertyCategory";
import { PropertyState } from "../enums/PropertyState";
import { PropertyStatus } from "../enums/PropertyStatus";
import { PropertyType } from "../enums/PropertyType";

export const STATUS_LABELS = {
  [PropertyStatus.Investigating]: 'Analyse en cours',
  [PropertyStatus.Waiting]: 'En attente',
  [PropertyStatus.Cancelled]: 'Annulé',
  [PropertyStatus.Owner]: 'Propriétaire',
}

export const CATEGORY_LABELS = {
  [PropertyCategory.Apartment]: 'Appartement',
  [PropertyCategory.House]: 'Maison',
  [PropertyCategory.Land]: 'Terrain',
  [PropertyCategory.Parking]: 'Parking',
  [PropertyCategory.Commercial]: 'Local commercial',
  [PropertyCategory.Building]: 'Immeuble',
}

export const STATE_LABELS = {
  [PropertyState.MainResidence]: 'Résidence principale',
  [PropertyState.SecondaryResidence]: 'Résidence secondaire',
  [PropertyState.RentalInvestment]: 'Investissement locatif',
}

export const TYPE_LABELS = {
  [PropertyType.OnePieces]: '1 pièce',
  [PropertyType.TwoPieces]: '2 pièces',
  [PropertyType.ThreePieces]: '3 pièces',
  [PropertyType.FourPieces]: '4 pièces',
  [PropertyType.FivePieces]: '5 pièces et plus',
}