import React, { useEffect, useRef, useState } from "react";

import { Toast } from "primereact/toast";
import {
  Classe,
  IEcue,
  IEnseignant,
  IEnseigner,
} from "../../../services/models/models";
import { apiNiveauAndClasse } from "../../../services/api/apiNiveauAndClasse";
import { useNavigate } from "react-router";
import { api } from "../../../services/api/api";
export default function Attribution() {
  const toast = useRef<Toast>(null);
  const [classes, setClasses] = useState<Classe[]>([]);
  const [enseignant, setEnseignant] = useState<IEnseignant[]>([]);
  const [ecue, setEcue] = useState<IEcue[]>([]);

  const [formData, setFormData] = useState<IEnseigner>({
    id: 0,
    ecueId: 0,
    enseignantId: 0,
    classeId: 0,
  });

  const navigate = useNavigate();
  useEffect(() => {
    apiNiveauAndClasse
      .getClasse()
      .then((response) => {
        console.log(response);
        setClasses(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des classes:", error)
      );

    // Appel API pour récupérer la liste des enseignant
    api
      .getEnseignant()
      .then((response) =>{ console.log(response.data) ; setEnseignant(response.data)})
      .catch((error) =>
        console.error("Erreur lors de la récupération des enseignant:", error)
      );

    api
      .getEcue()
      .then((response) =>{ console.log(response.data) ; setEcue(response.data)})
      .catch((error) =>
        console.log("Erreur lors de la récupération des ecue:", error)
      );
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(`name: ${name}, value: ${value}`);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    api
      .addEnseigner(formData)
      .then((res) => {
        toast.current?.show({
          severity: "success",
          summary: "Super",
          detail: "Bienvenue",
          life: 3000,
        });
        console.log(res);
        navigate("../addTeacher");
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
            <h3>ATTRIBUTION DE CLASSE</h3>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="classe" className="form-label">
                Enseignant
              </label>
              <select
                id="enseignant"
                name="enseignantId"
                className="form-control"
                onChange={handleChange}
                value={formData.enseignantId}
                required
              >
                <option value="" disabled>
                  Sélectionner un Enseignant
                </option>
                {enseignant.map((teacher) => (
                  <option
                    key={teacher.idEnseignant}
                    value={teacher.idEnseignant}
                  >
                    {teacher.nom} {teacher.prenom}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="classe" className="form-label">
                Ecue
              </label>
              <select
                id="ecue"
                name="ecueId"
                className="form-control"
                onChange={handleChange}
                value={formData.ecueId}
                required
              >
                <option value="" disabled>
                  Sélectionner une Ecue
                </option>
                {ecue.map((ecue) => (
                  <option key={ecue.id_ECUE} value={ecue.id_ECUE}>
                    {ecue.nom}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="classe" className="form-label">
                Classe
              </label>
              <select
                id="classe"
                name="classeId"
                className="form-control"
                onChange={handleChange}
                value={formData.classeId}
                required
              >
                <option value="" disabled>
                  Sélectionner une classe
                </option>
                {classes.map((classe) => (
                  <option key={classe.id_Classe} value={classe.id_Classe}>
                    {classe.libelleClasse}{" "}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
