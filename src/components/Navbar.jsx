export default function Navbar() {
  return (
    <>
      {/* <nav className="lg:hidden w-screen z-50 h-20 bg-black sticky top-0 flex justify-between items-center px-4">
        <Logo />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-white cursor-pointer lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </nav> */}

      <nav className="hidden w-screen z-50 h-20 bg-black text-white sticky top-0 lg:flex justify-between items-center px-4 md:px-24">
        {/* <div className="flex items-center space-x-8">
          <Logo />
          <div className="flex items-center space-x-8 text-sm font-semibold">
            <div
              className="relative"
              onMouseEnter={() => setShowIndustryDropdown(true)}
              onMouseLeave={() => setShowIndustryDropdown(false)}
            >
              <Link to="/">Industry</Link>
              <div
                className={`${
                  showIndustryDropdown ? 'block' : 'hidden'
                } absolute w-80 h-auto rounded-md py-2 bg-white text-gray-700`}
              >
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">Retail Business</span>
                  <span className="text-xs">
                    Stores, restaurants, offline merchants
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">Internet companies</span>
                  <span className="text-xs">
                    Startups, Online API driven companies
                  </span>
                </Link>
              </div>
            </div>
            <Link to="/">Customers</Link>
            <Link to="/">Capital</Link>
            <div
              className="relative"
              onMouseEnter={() => setShowCompanyDropdown(true)}
              onMouseLeave={() => setShowCompanyDropdown(false)}
            >
              <Link to="/">Company</Link>
              <div
                className={`${
                  showCompanyDropdown ? 'block' : 'hidden'
                } absolute w-72 h-auto rounded-md py-2 bg-white text-gray-700`}
              >
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">About us</span>
                  <span className="text-xs">Learn more about our mission</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">Why Brass?</span>
                  <span className="text-xs">
                    Our story and our path forward
                  </span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">Careers</span>
                  <span className="text-xs">Explore opportunities with us</span>
                </Link>
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">Press resources</span>
                  <span className="text-xs">Press assets and guidelines</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6 text-sm font-semibold">
          <div
            className="relative"
            onMouseEnter={() => setShowResourcesDropdown(true)}
            onMouseLeave={() => setShowResourcesDropdown(false)}
          >
            <Link to="/">Resources</Link>
            <div
              className={`${
                showResorucesDropdown ? 'block' : 'hidden'
              } absolute w-72 h-auto rounded-md py-2 bg-white text-gray-700`}
            >
              <Link
                to="/"
                className="flex flex-col text-left hover:bg-gray-100 p-4"
              >
                <span className="text-base">Blog</span>
                <span className="text-xs">
                  Stay updated on news and products
                </span>
              </Link>
              <Link
                to="/"
                className="flex flex-col text-left hover:bg-gray-100 p-4"
              >
                <span className="text-base">Guides</span>
                <span className="text-xs">
                  Everything your business need to know
                </span>
              </Link>
              <Link
                to="/"
                className="flex flex-col text-left hover:bg-gray-100 p-4"
              >
                <span className="text-base">Help</span>
                <span className="text-xs">Get Support for your business</span>
              </Link>
            </div>
          </div>
          <Link to="/">Login</Link>
          <div>
            <Link
              className="w-16 h-4 px-7 py-3 text-sm bg-[#0bce5a] rounded-md text-white"
              to="/"
            >
              Open an account
            </Link>
          </div>
        </div> */}
      </nav>
    </>
  );
}
