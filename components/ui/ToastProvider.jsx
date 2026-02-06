"use client";

import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: "#111",
          color: "#fff",
          border: "1px solid #222",
        },
        success: {
          iconTheme: {
            primary: "#10b981",
            secondary: "#000",
          },
        },
        error: {
          iconTheme: {
            primary: "#ef4444",
            secondary: "#000",
          },
        },
      }}
    />
  );
}
