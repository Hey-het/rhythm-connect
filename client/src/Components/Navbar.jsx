"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-blue-950 shadow px-4 py-4">
      <ul className="flex flex-wrap justify-center gap-6">
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-yellow-300 font-semibold"
          >
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link
            href="/prog"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Progress
          </Link>
        </li>
        <li>
          <Link
            href="/content"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Content
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Community
          </Link>
        </li>
        <li>
          <Link
            href="/challenges"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Challenges
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="text-white hover:text-yellow-300 font-semibold"
          >
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
