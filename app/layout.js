"use client";

import "../app/globals.css";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        
        <main>{children}</main>
      </body>
    </html>
  );
}
