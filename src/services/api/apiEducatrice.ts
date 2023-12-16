import axios from "axios";
import WebClient from "../../config/axios";
import { Student } from "../models/models";

const URL = "http://localhost:8089/";
export const apiEducatrice = {
 

  addStudent: async (data: Student) => {
    console.log(data)
    return await WebClient.post(`${URL}etudiants`, {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone:data.telephone,
      dateNaissance: data.dateNaissance,
      villeNaissance: data.villeNaissance, 
      username: " ",
      password: " ",
      classe:data.classe,
      niveau:data.niveau,
      
    },);
  },
};
