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
        }
        button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </>
  )
};

export default Datatable;

