import React from "react";

import styles from "./index.module.css";
import { getCurrentYear } from "utils/time";

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <span>{`Copyright © ${getCurrentYear()} CK Chin. All rights reserved.`}</span>
  </footer>
);

export default Footer;
