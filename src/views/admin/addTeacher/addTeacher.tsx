import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { IEcue, IEnseignant } from "../../../services/models/models";
import { api } from "../../../services/api/api";

interface UE {
  nom: string;
  id_UE: number;
}

const AddTeacher = () => {
  const toast = useRef<Toast>(null);
  const [UE, setUE] = useState<UE[]>([]);
  const [ecueData, setEnseignantData] = useState<IEnseignant>({
    idEnseignant: 0,
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEnseignantData({ ...ecueData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire:", ecueData);
    api
      .addEnseignant(ecueData)
      .then((res) => {
        toast.current?.show({
          severity: "success",
          summary: "Super",
          detail: "Bienvenue",
          life: 3000,
        });
        console.log(res);
        // navigate("../gestionStudent")
      })
      .catch((err) => {
        toast.current?.show({
          severity: "error",
          summary: "Erreur",
          detail: "une erreur est survenue veuillez réessayer plus tard ",
          life: 3000,
        });
      });
  };

  return (
    <>
      <Toast ref={toast} />
      <div className="container-fluid p-5 ">
        <div className="card p-4">
          <div className="text-center">
            <h3>AJOUTER ENSEIGNANT</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">
                Nom
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                name="nom"
                value={ecueData.nom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Prenom
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={ecueData.prenom}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                name="code"
                value={ecueData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="credit" className="form-label">
                Telephone
              </label>
              <input
                type="number"
                className="form-control"
                id="credit"
                name="credit"
                value={ecueData.telephone}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
