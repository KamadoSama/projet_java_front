import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { IEcue } from "../../../services/models/models";
import { api } from "../../../services/api/api";

interface UE {
  nom: string;
  id_UE: number;
}

const GestionEcue = () => {
  const toast = useRef<Toast>(null);
  const [UE, setUE] = useState<UE[]>([]);
  const [ecueData, setEcueData] = useState<IEcue>({
    nom: "",
    description: "",
    code: "",
    credit: 0,
    idUE: 0,
    id_ECUE: 0,
  });

  useEffect(() => {
    api
      .getUE()
      .then((response) => {
        console.log(response);
        setUE(response.data);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des classes:", error)
      );
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEcueData({ ...ecueData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données du formulaire:", ecueData);
    api
      .addEcue(ecueData)
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
            <h3>AJOUT D' ECUE</h3>
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
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={ecueData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="code" className="form-label">
                Code
              </label>
              <input
                type="text"
                className="form-control"
                id="code"
                name="code"
                value={ecueData.code}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="idUE" className="form-label">
                UE
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="idUE"
                value={ecueData.idUE}
                onChange={handleChange}
                required
              >
                <option selected>Choisir une UE</option>
                {UE.map((ue) => (
                  <option key={ue.id_UE} value={ue.id_UE}>
                    {ue.nom}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="credit" className="form-label">
                Credit
              </label>
              <input
                type="number"
                className="form-control"
                id="credit"
                name="credit"
                value={ecueData.credit}
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

export default GestionEcue;
