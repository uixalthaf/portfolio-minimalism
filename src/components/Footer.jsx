import React from "react";
import { PROFILE } from "../configs/constants";

export default function Footer() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} {PROFILE.name}</span>
      <span>{PROFILE.role}</span>
    </footer>
  );
}
