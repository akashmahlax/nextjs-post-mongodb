import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Simple Blog App</h1>
      <div className="space-x-4">
        <Link href="/register" className="text-blue-500 hover:underline">Register</Link>
        <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
        <Link href="/posts" className="text-blue-500 hover:underline">View Posts</Link>
      </div>
    </div>
  );
}

