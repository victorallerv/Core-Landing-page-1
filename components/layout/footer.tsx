"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#0d241b" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
            style={{ color: "#faf9f6" }}
          >
            CORE
          </Link>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-sm transition-colors hover:underline"
              style={{ color: "#8aaa9a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#faf9f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8aaa9a")}
            >
              Privacidad
            </Link>
            <Link
              href="#"
              className="text-sm transition-colors hover:underline"
              style={{ color: "#8aaa9a" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#faf9f6")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8aaa9a")}
            >
              Terminos
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-xs" style={{ color: "#4a6b5a" }}>
            &copy; 2026 CORE Performance
          </p>
        </div>
      </div>
    </footer>
  )
}
