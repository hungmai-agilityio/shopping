import Link from 'next/link';
import { mada } from '@/constants';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2
        className={`${mada.className} text-9xl font-bold text-orange-500 drop-shadow-lg bg-gradient-to-r from-pink-300 hover:from-yellow-400 hover:via-green-300 via-purple-300 to-blue-300 p-8 rounded-full`}
      >
        404
      </h2>
      <Link
        href="/"
        className="p-3 border bg-gradient-primary font-semibold rounded-lg text-white hover:bg-white transition-all duration-300 shadow-lg transform hover:scale-105 mt-7 flex items-center justify-center"
      >
        Return Home
      </Link>
    </div>
  );
}
