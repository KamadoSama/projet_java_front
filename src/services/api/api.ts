import axios from "axios";
import WebClient from "../../config/axios";
import { IEcue, IEducatrice, IEnseignant, ILogin } from "../models/models";

const URL = "http://localhost:8089/";
export const api = {
  loginService: async (data: ILogin) => {
    
    return await WebClient.post(`${URL}auth/login`, {
      username: data.username,
      password: data.password,
    });
  },
  getEcue: async () => {
    return await WebClient.get(`${URL}ecues`);
  },

  addEcue: async (data: IEcue) => {
    
    return await WebClient.post(`${URL}ecues`, {
      nom: data.nom,
      code: data.code,
      description: data.description,
      credit: data.credit,
      idSemetre: data.idSemestre,
      idUE: data.idUE,
    });
  },

  getUE: async () => {
    return await WebClient.get(`${URL}ue`);
  },
  getSemestre: async () => {
    return await WebClient.get(`${URL}semestre`);
  },

  addEnseignant: async (data: IEnseignant) => {
    
    return await WebClient.post(`${URL}enseignants`, {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,

    });
  },

  getEnseignant: async () => {
    return await WebClient.get(`${URL}enseignants`);
  },

  deleteEnseignant: async (id: number) => { 
    return await WebClient.delete(`${URL}enseignants/${id}`);
  },


  addEducatrice: async (data: IEducatrice) => {
    
    return await WebClient.post(`${URL}educatrices`, {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,

    });
  },

  getEducatrice: async () => {
    return await WebClient.get(`${URL}educatrices`);
  },
  
  deleteEducatrice: async (id: number) => {
    return await WebClient.delete(`${URL}educatrices/${id}`);
  }
};
