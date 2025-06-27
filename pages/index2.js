import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-800 to-indigo-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Chat Fix 💬</h1>
      <p className="mb-6 text-center max-w-md">
        A fun way to make real connections. Start swiping, chatting, and vibing
        with new friends around you.
      </p>
      <Link href="/login">
        <button className="bg-white text-purple-800 px-6 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
}
