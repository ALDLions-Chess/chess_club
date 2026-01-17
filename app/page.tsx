import Link from "next/link";

export default function Home() {
  return (
    // Responsive main container
    <div className="min-h-screen bg-[#214E34] text-white flex flex-col font-sans">
      {/* Header with title and navigation */}
      <header className="w-full flex flex-col items-center border-b-4 border-[#FFC857] bg-[#FFC857] pb-2">
        <img
      src="https://raw.githubusercontent.com/ALDLions-Chess/chess_club/refs/heads/main/public/images/ald_lions.png" // Path starting from the /public directory
      alt="Aldershot Lions"
      width={100} // Required for string sources
      height={100} // Required for string sources
          />
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

      {/* Welcome message */}
      <section className="w-full max-w-4xl mx-auto mt-8 mb-4 px-4">
        <p className="text-lg sm:text-xl md:text-2xl text-center font-medium text-white">
          Welcome to the Aldershot Lions Chess Club Dashboard! Here you can find information about upcoming tournaments, club news, and resources to help you improve your chess game. Explore the links below to get started.
        </p>
      </section>

      {/* Main content: tournaments and daily puzzle */}
      <main className="flex flex-1 flex-col md:flex-row gap-6 md:gap-8 p-4 sm:p-6 md:p-12">
        {/* Upcoming tournaments calendar */}
        <section className="flex-1 bg-[#2A1F2D] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col border-2 border-[#FFC857] min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FFC857] mb-4">Upcoming Tournaments</h2>
          <div className="flex-1 flex items-center justify-center bg-[#3B2C35] rounded-lg min-h-[200px] sm:min-h-[250px]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=aldershotchessclub%40gmail.com&ctz=America%2FToronto"
              className="border-0 w-full"
              width="100%"
              height="300"
              style={{ maxWidth: 800, minWidth: 200 }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </section>

        {/* Daily chess puzzle from LiChess */}
        <section className="flex-1 bg-[#2A1F2D] rounded-xl shadow-lg p-4 sm:p-6 flex flex-col border-2 border-[#FFC857] min-w-0 mt-6 md:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FFC857] mb-4">Daily Chess Puzzle</h2>
          <div className="flex-1 flex items-center justify-center bg-[#3B2C35] rounded-lg min-h-[200px] sm:min-h-[250px]">
            <div className="w-full flex justify-center">
              <iframe
                src="https://lichess.org/training/frame?theme=blue"
                width="350"
                height="350"
                style={{ maxWidth: 350, minWidth: 250 }}
                className="rounded-lg"
                title="LiChess Daily Puzzle"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Previous tournament standings link */}
      <section className="mx-auto w-full max-w-3xl bg-[#2A1F2D] rounded-full border-2 border-[#FFC857] shadow-lg py-3 px-4 sm:px-8 text-center text-base sm:text-lg font-semibold text-[#FFC857] mb-6">
        <a href="https://docs.google.com/document/d/1Fa2NjzGUbsQ0fo5PZ1vPuijxTY80WMLO83s8r6nH7gI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className = "hover:text-[#2FBF71] transition">
            Previous Tournament Standings
        </a>
      </section>

      {/* External resource links */}
      <section className="flex flex-col items-center mb-8">
        <h3 className="text-lg sm:text-xl font-bold text-[#FFC857] mb-4">External Links:</h3>
        <div className="flex flex-wrap gap-4 sm:gap-8">
          <a href="https://classroom.google.com/c/NTAwOTQ3NDk0OTUz?cjc=tvlxdn6" target="_blank" rel="noopener noreferrer" className="w-24 h-24 sm:w-32 sm:h-32 bg-[#FFC857] text-[#2A1F2D] rounded-lg flex items-center justify-center font-bold text-center shadow-lg border-4 border-[#3B2C35] hover:bg-[#2FBF71] hover:text-[#3B2C35] transition">
            Google<br/>Classroom
          </a>
        </div>
      </section>
    </div>
  );
}
