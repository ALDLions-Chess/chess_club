import Link from "next/link";

export default function About() {
  return (
    // Responsive main container
    <div className="min-h-screen bg-[#214E34] text-white flex flex-col font-sans">
      {/* Header with navigation */}
      <header className="w-full flex flex-col items-center border-b-4 border-[#FFC857] bg-[#FFC857] pb-2">
        <img
      src=" https://raw.githubusercontent.com/ALDLions-Chess/chess_club/refs/heads/main/public/images/aldershot_logo.png" // Path starting from the /public directory
      alt="Aldershot Lions"
      width={100} // Required for string sources
      height={100} // Required for string sources/>
        <div className="flex items-center gap-2 sm:gap-4 mt-4">
          {/* Club title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#3B2C35] tracking-wide drop-shadow-lg">Chess Club</h1>
        </div>
        {/* Navigation links */}
        <nav className="flex flex-wrap gap-4 sm:gap-8 mt-4 w-full justify-center text-base sm:text-lg font-semibold">
          <Link href="/" className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Home</Link>
          <Link href="/about" className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">About Us</Link>
          <Link
            href="https://lichess.org/learn#/lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition"
          >
            Lessons
          </Link>
          <Link href="/contact" className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">Contact Info</Link>
        </nav>
      </header>
      {/* About club content */}
      <main className="flex flex-col items-center p-4 sm:p-8 gap-6 sm:gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FFC857] mb-2 sm:mb-4">About Us</h2>
        <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-3xl">
          {/* Club description box 1 */}
          <div className="bg-[#2A1F2D] border-2 border-[#FFC857] rounded-xl shadow-lg p-4">
            <p className="text-base sm:text-lg">
              The ALD Lions Chess Club welcomes players of all skill levels. We meet weekly to play, learn, and compete in a friendly environment.
            </p>
          </div>
          {/* Club description box 2 */}
          <div className="bg-[#2A1F2D] border-2 border-[#FFC857] rounded-xl shadow-lg p-4">
            <p className="text-base sm:text-lg">
              Join us for tournaments, lessons, and fun activities. Whether you&apos;re a beginner or a seasoned player, there&apos;s a place for you here!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

