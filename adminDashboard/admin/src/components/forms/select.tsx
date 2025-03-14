import axios from "axios";
import React, { useEffect, useState } from "react";

interface selectProps {
    id: string;
    name: string;
    value: string;
    label: string;
    options: {[key: string]: string}[];
}

interface option {
    value: string;
    label: string;
}

export const Select: React.FC<selectProps> = ({label, id, name, value, options})=>  {
    

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select 
            className="form-control"
            name={name}
            value={value}
            
            >
                
                {options.length === 0 && <option>Aucune option disponible</option>}
                {options.map((option, index) => (
                <option key={index} value={option.nom}>
                    {option.nom}
                </option>
                ))}
                
            </select>
        </>
    )
}