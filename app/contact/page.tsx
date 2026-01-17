import Link from "next/link";

// Contact page component
export default function Contact() {
  return (
    // Responsive main container
    <div className="min-h-screen bg-[#214E34] text-white flex flex-col font-sans">
      {/* Header with title and navigation */}
      <header className="w-full flex flex-col items-center border-b-4 border-[#FFC857] bg-[#FFC857] pb-2">
        <img
      src="https://raw.githubusercontent.com/ALDLions-Chess/chess_club/refs/heads/main/public/images/ald_lions.png" // Path starting from the /public directory
      alt="Aldershot Lions"
      width={85} // Required for string sources
      height={85} // Required for string sources
          />
        <div className="flex items-center gap-2 sm:gap-4 mt-4">
          {/* Club title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#3B2C35] tracking-wide drop-shadow-lg">
            Chess Club
          </h1>
        </div>
        {/* Navigation links */}
        <nav className="flex flex-wrap gap-4 sm:gap-8 mt-4 w-full justify-center text-base sm:text-lg font-semibold">
          <Link
            href="/"
            className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition"
          >
            About Us
          </Link>
          <Link
            href="https://lichess.org/learn#/lessons"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition"
          >
            Lessons
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1 rounded hover:bg-[#2FBF71] hover:text-[#3B2C35] transition"
          >
            Contact Info
          </Link>
        </nav>
      </header>
      {/* Contact details */}
      <main className="flex flex-col items-center p-4 sm:p-8 gap-6 sm:gap-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#FFC857] mb-2 sm:mb-4">
          Contact Info
        </h2>
        <ul className="text-base sm:text-lg space-y-4 bg-[#2A1F2D] rounded-xl border-2 border-[#FFC857] shadow-lg p-6 sm:p-8 w-full max-w-xl">
          <li>
            Email:{" "}
            <a
              href="mailto:aldershotchessclub@gmail.com"
              className="text-[#FFC857] underline"
            >
              aldershotchessclub@gmail.com
            </a>
          </li>
          <li>Room: 133, Library</li>
          <li>Advisor: Madame. Riley</li>
          <li>Availability: Monday-Friday, 11:00am-11:50am</li>
        </ul>
      </main>
    </div>
  );
}
