import Link from "next/link";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 py-6 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl tracking-wide">Château Bijoux</div>

        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="hover:opacity-70 transition-opacity">
            HOME
          </Link>
          <div className="relative group">
            <a
              href="/products"
              className="flex items-center hover:opacity-70 transition-opacity"
            >
              OUR PRODUCTS
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </div>
          <a href="/about" className="hover:opacity-70 transition-opacity">
            ABOUT US
          </a>
        </div>

        <button className="flex items-center space-x-2">
          <span>MENU</span>
          <div className="space-y-3">
            <div className="w-14 h-0.5 bg-black"></div>
            <div className="w-14 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
