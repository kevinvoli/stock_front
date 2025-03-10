"use client"

import { useState } from "react";


interface TableauProps{
  tableau: Record<string, any>[];
}

const Datatable : React.FC<TableauProps>=({tableau})=>{
  const [currentPage, setCurrentPage]= useState(1);
  const itemsPerPage= 30; //🔥 Nombre d'éléments par page
  console.log("🔥 Colonnes détectées :", tableau);

  if (!tableau || tableau.length===0) {
    return <p className="text-center text-gray-500">Aucune donnée disponible</p>;
  }
  console.log("🔥",tableau)
  const columns= Object.keys(tableau[0]);

  const totalPages= Math.ceil(tableau.length/itemsPerPage);
  const startIndex = (currentPage -1) * itemsPerPage;
  const currentData = tableau.slice(startIndex, startIndex + itemsPerPage);
  const handleView = (row: Record<string, any>) => {
    console.log("🔍 Voir :", row);
    alert(`Voir l'élément : ${JSON.stringify(row, null, 2)}`);
  };

  // Fonction pour modifier un élément
  const handleEdit = (row: Record<string, any>) => {
    console.log("✏️ Modifier :", row);
    alert(`Modifier l'élément : ${JSON.stringify(row, null, 2)}`);
  };

  // Fonction pour supprimer un élément
  const handleDelete = (row: Record<string, any>) => {
    console.log("🗑️ Supprimer :", row);
    if (confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      alert(`Élément supprimé : ${JSON.stringify(row, null, 2)}`);
    }
  };

  return (
    <>
             
      <table id="example2" className="table table-bordered table-hover">
        <thead>
          <tr>
            {
              columns.map((col)=>(
                <th key={col} >
                  {col}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            {
              currentData.map((row, rowIndex)=>(
                <tr key={rowIndex}>
                  {columns.map((col,colIndex)=>(
                    <td key={`${rowIndex}-${colIndex}`}>
                      {
                        row[col]
                      }
                    </td>
                    
                  ))}
                  <td>
                {/* ✅ Boutons pour Voir, Modifier et Supprimer */}
                <button className="btn btn-info btn-sm" onClick={() => handleView(row)}>👁 Voir</button>
                <button className="btn btn-warning btn-sm" onClick={() => handleEdit(row)}>✏ Modifier</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(row)}>🗑 Supprimer</button>
              </td>
                </tr>
              ))
            }
        </tbody>
        <tfoot>
        </tfoot>
      </table>

      <div className="pagination">
        <button onClick={
          ()=>setCurrentPage((prev)=>Math.max(prev-1,1))
        }
        disabled={currentPage===1}>
          precedent
        </button>

        <span>
          page {currentPage} sur {totalPages}
        </span>

        <button onClick={
          ()=>setCurrentPage((prev)=> Math.min(prev + 1, totalPages))
        }
        disabled= {currentPage === totalPages}>
          Suivant
        </button>
      </div>
        {/* 🔥 Styles CSS */}
        <style jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 15px;
        }
        button {
          padding: 5px 10px;
          border: none;
          background-color: #007bff;
          color: white;
          cursor: pointer;
          border-radius: 5px;
          margin: 2px;
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
        .btn {
          padding: 5px 8px;
          margin: 2px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }
        .btn-info {
          background-color: #17a2b8;
          color: white;
        }
        .btn-warning {
          background-color: #ffc107;
          color: black;
        }
        .btn-danger {
          background-color: #dc3545;
          color: white;
        }
      `}</style>
    </>
  )
};

export default Datatable;

