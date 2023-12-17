import React, { useEffect, useRef, useState } from "react";
import { apiEducatrice } from "../../../services/api/apiEducatrice";
import { Toast } from "primereact/toast";
import { Classe, Niveau, Student } from "../../../services/models/models";
import { apiNiveauAndClasse } from "../../../services/api/apiNiveauAndClasse";
import { useNavigate } from "react-router";
export default function AddStudent() {
  const toast = useRef<Toast>(null);
  const [classes, setClasses] = useState<Classe[]>([]);
  const [niveaux, setNiveaux] = useState<Niveau[]>([]);
  const [formData, setFormData] = useState<Student>({
    id_etudiant:0 ,
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    dateNaissance: "",
    villeNaissance: "",
    niveau: "",
    classe: "",
    matricule:"",
    
  });
  const navigate= useNavigate();
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

    // Appel API pour récupérer la liste des niveaux
    apiNiveauAndClasse
      .getNiveau()
      .then((response) => setNiveaux(response.data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des niveaux:", error)
      );
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData.villeNaissance);
    apiEducatrice
      .addStudent(formData)
      .then((res) => {
        toast.current?.show({
          severity: "success",
          summary: "Super",
          detail: "Bienvenue",
          life: 3000,
        });
        console.log(res);
        navigate("../gestionStudent")
      })
      .catch((err) => {
        toast.current?.show({
          severity: "error",
          summary: "Erreur",
          detail: "Email ou de passe incorrect",
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
            <h3>AJOUT D' ETUDIANT</h3>
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
                onChange={handleChange}
                value={formData.nom}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">
                Prénom*
              </label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                name="prenom"
                onChange={handleChange}
                value={formData.prenom}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Téléphone
              </label>
              <input
                type="tel"
                className="form-control"
                id="telephone"
                name="telephone"
                onChange={handleChange}
                value={formData.telephone}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="dateNaissance" className="form-label">
                Date de Naissance
              </label>
              <input
                type="date"
                className="form-control"
                id="dateNaissance"
                name="dateNaissance"
                onChange={handleChange}
                value={formData.dateNaissance}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="villeNaissance" className="form-label">
                Ville de Naissance
              </label>
              <input
                type="text"
                className="form-control"
                id="villeNaissance"
                name="villeNaissance"
                onChange={handleChange}
                value={formData.villeNaissance}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="niveau" className="form-label">
                Niveau
              </label>
              <select
                id="niveau"
                name="niveau"
                className="form-control"
                onChange={handleChange}
                value={formData.niveau as string}
                required
              >
                <option value="" disabled>
                  Sélectionner un niveau
                </option>
                {niveaux.map((niveau) => (
                  <option
                    key={niveau.id_Niveau}
                    value={niveau.libelleNiveau as string}
                  >
                    {niveau.libelleNiveau}
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
                name="classe"
                className="form-control"
                onChange={handleChange}
                value={formData.classe as string}
                required
              >
                <option value="" disabled>
                  Sélectionner une classe
                </option>
                {classes.map((classe) => (
                  <option
                    key={classe.id_Classe}
                    value={classe.libelleClasse as string}
                  >
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
