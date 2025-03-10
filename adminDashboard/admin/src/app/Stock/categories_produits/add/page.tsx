"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const AjouterCategorie = () => {
  const router = useRouter();
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCategorie = { nom, description };
    
   
    const response = await fetch("/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategorie),
    });

    if (response.ok) {
      router.push("/categories"); // Rediriger vers la liste des catégories
    } else {
      alert("Erreur lors de l'ajout");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Ajouter une catégorie</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nom de la catégorie"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AjouterCategorie;
