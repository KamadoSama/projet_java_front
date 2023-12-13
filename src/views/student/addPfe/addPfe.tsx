import React, { useState } from 'react';

const AddPfe = () => {
  const [formData, setFormData] = useState({
    sujet: '',
    entrepriseNom: '',
    juryId: 0,
    enseignantNom: '',
    enseignantPrenom: '',
    etudiantNom: '',
    etudiantPrenom: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Ajoutez ici le code pour envoyer l'objet formData à votre backend
    console.log('Formulaire soumis avec les données:', formData);
  };

  return (
    <div className="container-fluid p-5 ">
        <div className="card p-4">
        <div className="text-center"><h3>AJOUT DE THEME DE STAGE (PFE)</h3></div>
        <form onSubmit={handleSubmit} >
            <div className="mb-3">
            <label htmlFor="sujet" className="form-label">Sujet</label>
            <input type="text" className="form-control" id="sujet" name="sujet" onChange={handleChange} value={formData.sujet} required />
            </div>

            <div className="mb-3">
            <label htmlFor="entrepriseNom" className="form-label">Nom de l'entreprise</label>
            <input type="text" className="form-control" id="entrepriseNom" name="entrepriseNom" onChange={handleChange} value={formData.entrepriseNom} required />
            </div>

            <div className="mb-3">
            <label htmlFor="juryId" className="form-label">ID du jury</label>
            <input type="number" className="form-control" id="juryId" name="juryId" onChange={handleChange} value={formData.juryId} required />
            </div>

            <div className="mb-3">
            <label htmlFor="enseignantNom" className="form-label">Nom de l'enseignant</label>
            <input type="text" className="form-control" id="enseignantNom" name="enseignantNom" onChange={handleChange} value={formData.enseignantNom} required />
            </div>

            <div className="mb-3">
            <label htmlFor="enseignantPrenom" className="form-label">Prénom de l'enseignant</label>
            <input type="text" className="form-control" id="enseignantPrenom" name="enseignantPrenom" onChange={handleChange} value={formData.enseignantPrenom} required />
            </div>

            <div className="mb-3">
            <label htmlFor="etudiantNom" className="form-label">Nom de l'étudiant</label>
            <input type="text" className="form-control" id="etudiantNom" name="etudiantNom" onChange={handleChange} value={formData.etudiantNom} required />
            </div>

            <div className="mb-3">
            <label htmlFor="etudiantPrenom" className="form-label">Prénom de l'étudiant</label>
            <input type="text" className="form-control" id="etudiantPrenom" name="etudiantPrenom" onChange={handleChange} value={formData.etudiantPrenom} required />
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
        </div>
    </div>
    
  );
};

export default AddPfe;
