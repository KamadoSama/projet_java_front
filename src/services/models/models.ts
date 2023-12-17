import { number } from "yup";

export interface Student {
  id_etudiant: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  villeNaissance: string;
  niveau: String;
  classe: String;
  matricule: String;
}

export interface Classe {
  id_Classe: number;
  libelleClasse: String;
}

export interface Niveau {
  id_Niveau: number;
  libelleNiveau: String;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface IEcue {
  nom: string;
  description: string;
  code: string;
  idUE?: number; // Ajoutez ? pour rendre la propriété facultative
  idSemestre?: number; // Ajoutez ? pour rendre la propriété facultative
  credit: number;
  id_ECUE: number;
}
export interface IEnseignant {
  idEnseignant: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

export interface IEducatrice {
  id_educatrice: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

export interface IEnseigner {
  id: number;
  enseignantId: number;
  ecueId: number;
  classeId: number;
}
