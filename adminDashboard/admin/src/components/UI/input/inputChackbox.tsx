"use client"; // Next.js App Router nécessite cette directive

import { useState } from "react";
import styles from "@/styles/components/UI/input/Checkbox.module.css"; // Fichier CSS pour les styles

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <>
        <label className={`${styles.checkbox} ${checked ? styles.checked : ""}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={styles.hiddenCheckbox} // Masquer le checkbox natif
      />
      <span className={styles.customCheckbox} />
      {checked ? "Coché ✅" : "Non coché ❌"}
    </label>
    
    </>

  );
}
