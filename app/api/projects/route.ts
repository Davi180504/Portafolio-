import { NextResponse } from "next/server";

const projects = [
  {
    id: "auth-system",
    title: "Authentication System",
    description: "Secure authentication with JWT and PostgreSQL",
    tech: ["Next.js", "JWT", "PostgreSQL"],
    github: "https://github.com/Davi180504/auth-system"
  },
  {
    id: "ai-platform",
    title: "Inclusive AI Platform",
    description: "Interactive dashboard for sign language learning",
    tech: ["Next.js", "Dashboard", "UI/UX"],
    github: "https://github.com/Davi180504/ai-platform"
  },
  {
    id: "user-management",
    title: "User Management System",
    description: "Full CRUD system integrated with PostgreSQL",
    tech: ["Next.js", "SQL", "Backend"],
    github: "https://github.com/Davi180504/user-management"
  }
];

export async function GET() {
  return NextResponse.json(projects);
}