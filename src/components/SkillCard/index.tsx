import React from "react";
import Image from "next/image";

import styles from "./index.module.css";

interface SkillCardProps {
  icon?: string;
  label: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, label }) => {
  return (
    <div className={styles.bubble}>
      {icon && (
        <div className={styles.icon}>
          <Image
            className={styles.image}
            src={icon}
            width={24}
            height={24}
            alt=""
          />
        </div>
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default SkillCard;
