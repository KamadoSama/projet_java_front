export interface Student {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  dateNaissance: string;
  villeNaissance: string;
  niveau: String;
  classe: String;
}

export interface Classe {
  id_Classe: number;
  libelleClasse: String;
}

export interface Niveau {
  id_Niveau: number;
  libelleNiveau: String;
}
