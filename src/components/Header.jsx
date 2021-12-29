import Logo from './Logo';
import HeroVidBackground from '../assets/hero.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onOpenModal }) {
  const [navStates, setNavStates] = useState({
    industry: false,
    company: false,
    resources: false,
  });

  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showResourcesDropdown, setShowResourcesDropdown] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const { industry, company, resources } = navStates;

  const toggle = (type) => {
    if (type === 'industry') {
      setNavStates({
        ...navStates,
        industry: !industry,
        company: false,
        reources: false,
      });
    } else if (type === 'company') {
      setNavStates({
        industry: false,
        company: !company,
        resources: false,
      });
    } else if (type === 'resources') {
      setNavStates({
        resources: !resources,
        company: false,
        industry: false,
      });
    }
  };

  return (
    <div>
      <nav className="lg:hidden w-screen z-50 h-20 bg-black fixed top-0 flex justify-between items-center px-4">
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
      </nav>

      <nav className="hidden w-screen z-50 h-20 bg-black text-white fixed top-0 lg:flex justify-between items-center px-4 md:px-24">
        <div className="flex items-center space-x-8">
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
                } absolute w-80 h-auto rounded-md py-2 bg-white text-gray-700`}
              >
                <Link
                  to="/"
                  className="flex flex-col text-left hover:bg-gray-100 p-4"
                >
                  <span className="text-base">About us</span>
                  <span className="text-xs">Learn more</span>
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
                showResourcesDropdown ? 'block' : 'hidden'
              } absolute w-80 h-auto rounded-md py-2 bg-white text-gray-700`}
            >
              <Link
                to="/"
                className="flex flex-col text-left hover:bg-gray-100 p-4"
              >
                <span className="text-base">Blog</span>
                <span className="text-xs">
                  Stay Updated on news and products
                </span>
              </Link>
              <Link
                to="/"
                className="flex flex-col text-left hover:bg-gray-100 p-4"
              >
                <span className="text-base">Guides</span>
                <span className="text-xs">
                  Everything your business needs to know
                </span>
              </Link>
              <Link
                to="/"
                className="flex flex-col text-left hover:bg-gray-100 p-4"
              >
                <span className="text-base">Help</span>
                <span className="text-xs">Get support for your business</span>
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
        </div>
      </nav>

      <div className="bg-black w-screen px-3 relative z-20 lg:pt-20">
        <div className="lg:hidden rounded-lg after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/50">
          <img
            src={HeroVidBackground}
            alt="fine girl"
            className="aspect-square mt-20 rounded-lg"
          />
        </div>
        <div className="hidden lg:flex pt-24 px-24">
          {/* First Part */}
          <div className="w-1/2 pr-24 pt-24 space-y-8 text-white">
            <h1 className="text-3xl lg:text-6xl lg:max-w-[526px] lg:w-full font-semibold tracking-normal">
              Banking that works for your business
            </h1>

            <p className="text-[15px] lg:max-w-[526px] lg:text-lg text-white">
              Do more with a business account that comes with top-end financial
              tools and integrations to help grow your business.
            </p>

            <div className="text-left pt-8 hidden md:block">
              <Link
                className="w-12 h-4 px-7 py-4 bg-[#0bce5a] rounded-md text-sm"
                to="/"
              >
                Open an account in 10 minutes
              </Link>
            </div>

            <div className="flex justify-between pt-16 pb-20">
              <svg
                viewBox="0 0 200 29"
                fill="none"
                className="w-32 md:w-52 text-white"
              >
                <path
                  d="M37.47 9.666h18.67V.133H37.47v9.533ZM.166.133v9.533h9.318v19.067h9.318V9.666h9.35V.133H.167ZM28.152 28.733H56.14v-9.534H37.47V9.666h-9.318v19.067ZM79.933 7.332h-13.71v3.967h4.592v12.433h4.526V11.299h4.592V7.332ZM85.09 11.166c-3.227 0-5.623 2.167-5.623 6.433 0 3.767 2.03 6.4 5.724 6.4 1.93 0 3.494-.5 4.991-1.4l-1.597-2.7c-1.231.634-2.097.867-3.195.867-1.131 0-1.93-.6-2.096-1.967h7.221c.033-.2.033-.466.033-.833.034-4.567-2.063-6.8-5.457-6.8Zm-1.73 5c.133-1.233.666-1.867 1.63-1.867 1.232 0 1.665.634 1.865 1.867H83.36ZM98.569 20.566c-1.132 0-1.73-1-1.73-2.967 0-1.933.532-3.033 1.63-3.033.899 0 1.298.5 1.897 1.6l2.895-2.2c-1.065-1.733-2.396-2.8-4.725-2.8-3.927 0-5.857 2.6-5.857 6.367 0 4.133 2.163 6.433 5.757 6.433 2.163 0 3.494-.833 4.925-2.933l-2.662-2.1c-.799 1.2-1.331 1.633-2.13 1.633ZM113.078 11.166c-1.464 0-2.329.5-3.095 1.067V6.666l-4.226 1.7v15.4h4.226v-7.033c0-1.534.533-1.967 1.431-1.967.865 0 1.398.433 1.398 2v7h4.226v-7.533c0-3.234-1.298-5.067-3.96-5.067ZM127.188 20.033c-1.964 0-2.762-2-2.762-4.5 0-2.6.832-4.5 2.729-4.5 1.497 0 2.063.967 2.628 2.5l4.127-1.633c-1.132-3.1-2.729-4.834-6.755-4.834-4.393 0-7.488 3.2-7.488 8.467 0 4.867 2.596 8.467 7.454 8.467 3.894 0 5.724-2.1 6.822-4.234l-3.827-2.033c-.898 1.533-1.497 2.3-2.928 2.3ZM140.731 12.333v-.9h-4.226v12.3h4.226v-6.7c0-1.5.632-2 1.664-2 .832 0 1.431.433 1.963 1.033l.999-4.367c-.499-.3-1.098-.533-1.997-.533-1.098 0-1.93.467-2.629 1.167ZM154.376 18.467c0 1.533-.532 1.967-1.398 1.967-.865 0-1.397-.434-1.397-2v-7h-4.227v7.533c0 3.233 1.298 5.033 3.994 5.033 1.431 0 2.329-.5 3.061-1.066v.833h4.227v-12.3h-4.227v7M168.985 11.166c-1.464 0-2.329.5-3.095 1.067v-.834h-4.226v12.3h4.226v-7.033c0-1.533.533-1.967 1.431-1.967.866 0 1.398.434 1.398 2v7h4.226v-7.533c0-3.167-1.264-5-3.96-5ZM181.331 20.566c-1.132 0-1.731-1-1.731-2.967 0-1.933.533-3.033 1.598-3.033.898 0 1.297.5 1.896 1.6l2.896-2.2c-1.065-1.733-2.396-2.8-4.726-2.8-3.927 0-5.857 2.6-5.857 6.367 0 4.133 2.163 6.433 5.757 6.433 2.163 0 3.495-.833 4.925-2.933l-2.662-2.1c-.732 1.2-1.298 1.633-2.096 1.633ZM195.84 11.166c-1.465 0-2.33.5-3.095 1.067V6.666l-4.226 1.7v15.4h4.226v-7.033c0-1.534.532-1.967 1.431-1.967.865 0 1.397.433 1.397 2v7h4.227v-7.533c.033-3.234-1.265-5.067-3.96-5.067Z"
                  fill="#C9CFD4"
                />
              </svg>
              <svg viewBox="0 0 105 29" fill="none" className="w-16 md:w-28">
                <g clipPath="url(#a)" fill="#C9CFD4">
                  <path d="M0 7.059h6.221l3.623 9.268 3.67-9.268h6.057l-9.121 21.94H4.354l2.497-5.814L0 7.06ZM25.881 6.691c-4.674 0-7.629 4.193-7.629 8.367 0 4.698 3.24 8.422 7.54 8.422 3.209 0 4.419-1.954 4.419-1.954v1.523h5.426V7.06H30.21v1.454S28.86 6.69 25.88 6.69Zm1.154 5.138c2.157 0 3.27 1.707 3.27 3.247 0 1.658-1.192 3.285-3.27 3.285-1.721 0-3.277-1.407-3.277-3.215 0-1.833 1.251-3.317 3.277-3.317ZM37.506 23.048V0h5.675v8.569s1.348-1.876 4.172-1.876c3.453 0 5.477 2.573 5.477 6.25v10.105h-5.634v-8.721c0-1.244-.593-2.447-1.936-2.447-1.366 0-2.079 1.22-2.079 2.447v8.72h-5.675ZM62.505 6.693c-5.353 0-8.54 4.07-8.54 8.432 0 4.963 3.86 8.356 8.56 8.356 4.557 0 8.545-3.24 8.545-8.273 0-5.508-4.175-8.515-8.565-8.515Zm.051 5.184c1.891 0 3.2 1.574 3.2 3.254 0 1.432-1.22 3.199-3.2 3.199-1.814 0-3.175-1.455-3.175-3.215 0-1.695 1.132-3.239 3.175-3.239ZM80.525 6.693c-5.353 0-8.54 4.07-8.54 8.432 0 4.963 3.859 8.356 8.56 8.356 4.557 0 8.544-3.24 8.544-8.273 0-5.508-4.175-8.515-8.564-8.515Zm.05 5.184c1.892 0 3.2 1.574 3.2 3.254 0 1.432-1.219 3.199-3.2 3.199-1.813 0-3.175-1.455-3.175-3.215 0-1.695 1.132-3.239 3.176-3.239ZM93.567 23.387a3.769 3.769 0 1 0 0-7.537 3.769 3.769 0 0 0 0 7.537ZM98.575 14.465H91.79L97.811 0h6.76l-5.996 14.465Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h104.571v29H0z" />
                  </clipPath>
                </defs>
              </svg>
              <svg viewBox="0 0 91 29" fill="none" className="w-16 md:w-28">
                <g
                  clipPath="url(#a)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  fill="#C9CFD4"
                >
                  <path d="M28.486.185c.733-.187 1.502-.193 2.25-.094.832.114 1.65.388 2.357.849v1.965c-.442-.335-.913-.637-1.428-.846a4.727 4.727 0 0 0-2.16-.35c-.352.03-.707.107-1.016.283a1.218 1.218 0 0 0-.486.482c-.143.26-.16.571-.11.859.044.254.185.487.382.653.26.22.578.352.892.472l1.979.72c.566.21 1.121.484 1.574.89.431.382.736.901.86 1.464.125.578.139 1.19-.022 1.764a2.757 2.757 0 0 1-.855 1.34c-.434.378-.969.627-1.521.776-.756.2-1.549.227-2.323.145-.967-.109-1.937-.387-2.746-.942.002-.666 0-1.332.002-1.998.97.783 2.19 1.28 3.444 1.294.53.008 1.082-.044 1.56-.291.27-.14.504-.367.615-.655.124-.314.122-.673.018-.993-.104-.318-.36-.56-.643-.725-.492-.29-1.044-.454-1.576-.652-.647-.24-1.315-.439-1.916-.784-.457-.256-.876-.601-1.158-1.048-.38-.6-.485-1.337-.42-2.035a2.705 2.705 0 0 1 .863-1.724c.444-.408 1.004-.672 1.584-.819ZM72.78.677c.763-.49 1.69-.673 2.588-.652 1.118.01 2.25.297 3.191.912-.002.653.002 1.307-.001 1.96a6.664 6.664 0 0 0-1.299-.79 4.647 4.647 0 0 0-2.59-.367c-.467.08-.966.287-1.202.725-.245.477-.168 1.13.247 1.492.32.283.731.426 1.127.57.65.24 1.303.47 1.95.714.577.232 1.14.538 1.57.996.397.413.644.957.728 1.522.091.616.068 1.266-.178 1.846a2.83 2.83 0 0 1-1.005 1.227c-.516.363-1.124.572-1.742.677a7.07 7.07 0 0 1-2.595-.08c-.707-.156-1.403-.41-1.999-.826.003-.666 0-1.331.003-1.997.76.61 1.664 1.054 2.629 1.22.417.075.845.093 1.269.069.43-.034.871-.12 1.24-.358.284-.179.497-.475.554-.808.071-.39.005-.828-.26-1.136-.234-.273-.562-.436-.883-.58-.525-.225-1.07-.398-1.605-.597-.518-.184-1.04-.371-1.512-.655-.436-.257-.832-.598-1.1-1.032-.265-.428-.393-.93-.416-1.432a3.02 3.02 0 0 1 .204-1.34A2.78 2.78 0 0 1 72.78.677ZM84.968.305a4.882 4.882 0 0 1 1.662-.28c1.152-.02 2.324.255 3.305.871.041.017.055.06.051.102v1.897a6.311 6.311 0 0 0-1.461-.86 4.743 4.743 0 0 0-2.097-.336c-.362.028-.728.106-1.045.287-.23.13-.427.328-.527.574-.191.478-.09 1.092.323 1.423.45.365 1.025.504 1.554.71.62.237 1.257.432 1.861.707.554.261 1.08.62 1.439 1.124.39.538.544 1.215.537 1.872a2.898 2.898 0 0 1-.472 1.668c-.33.495-.82.868-1.36 1.107-.579.26-1.211.38-1.841.413a7.33 7.33 0 0 1-2.097-.203c-.63-.16-1.25-.397-1.785-.772-.02-.667-.003-1.336-.008-2.004.973.786 2.196 1.285 3.454 1.298.544.009 1.112-.047 1.596-.313.25-.14.468-.356.574-.627.125-.322.124-.688.014-1.014-.107-.307-.354-.541-.628-.704-.502-.297-1.065-.464-1.608-.665-.646-.24-1.312-.439-1.911-.785-.481-.275-.92-.648-1.197-1.134-.301-.52-.402-1.134-.381-1.729a2.759 2.759 0 0 1 .53-1.549c.376-.509.929-.864 1.518-1.078ZM45.836.031c2.56 2.44 5.117 4.886 7.678 7.325.004-2.383 0-4.765.002-7.148h1.83c.002 3.798.002 7.596 0 11.395-1.724-1.678-3.451-3.353-5.176-5.03-.835-.806-1.66-1.621-2.5-2.422-.006 2.423.003 4.846-.005 7.268-.61-.004-1.219 0-1.828-.001-.002-3.796 0-7.591-.001-11.387ZM.571.208h2.94c.688.006 1.382-.031 2.064.088.647.109 1.292.34 1.793.776.41.349.694.834.816 1.356.133.587.134 1.215-.054 1.79-.2.618-.654 1.166-1.267 1.406.102.067.22.099.325.157.558.286 1.001.78 1.242 1.359.187.436.242.92.2 1.39-.042.608-.241 1.215-.63 1.69-.438.543-1.088.878-1.758 1.042-.576.146-1.174.165-1.766.156H.57V.207ZM2.42 1.857c.002 1.02-.005 2.04.003 3.059.75-.007 1.502.002 2.252-.004.473-.023.978-.116 1.344-.438.27-.236.404-.593.426-.945.027-.386-.036-.805-.292-1.11-.225-.274-.568-.418-.908-.488-.384-.079-.778-.073-1.168-.074H2.42Zm0 4.64v3.272h2.39c.453-.005.924-.078 1.31-.331.327-.21.555-.561.623-.943.076-.418.032-.873-.193-1.241a1.504 1.504 0 0 0-.808-.621 2.73 2.73 0 0 0-.932-.137H2.42ZM12.697.209h1.898v5.787c.002.68-.026 1.37.142 2.034.13.541.4 1.07.855 1.408.45.337 1.023.458 1.576.458.561.003 1.15-.116 1.604-.463.381-.284.633-.709.778-1.155.171-.53.215-1.093.21-1.647V.21h1.898v6.687c.015.918-.142 1.86-.585 2.674a3.687 3.687 0 0 1-1.747 1.611c-.84.375-1.78.47-2.69.398-.635-.055-1.268-.213-1.832-.515a3.662 3.662 0 0 1-1.09-.877 4.102 4.102 0 0 1-.775-1.457 6.194 6.194 0 0 1-.242-1.869V.209ZM38.544.207c.631.004 1.263.001 1.895.002.004 3.735-.004 7.47.004 11.205-.634.011-1.268.002-1.901.005 0-3.737-.005-7.474.002-11.212ZM60.399.205c2.258.007 4.516.001 6.775.003v1.69H62.26V4.58h4.405v1.666H62.26v3.465h4.913c.002.569 0 1.138 0 1.707-2.258.001-4.517-.003-6.775.002-.008-3.029-.001-6.059-.004-9.088.003-.71-.005-1.418.005-2.127ZM15.348 17.05c2.541 2.406 5.082 4.812 7.625 7.214.003-2.344 0-4.689.002-7.033h1.815v11.203c-2.544-2.44-5.079-4.89-7.62-7.332v7.156h-1.824c.001-3.736-.003-7.472.002-11.207ZM31.252 17.451c.72-.329 1.523-.435 2.308-.4 1.049.04 2.1.32 2.988.889.003.646.002 1.293.001 1.939-.444-.335-.919-.636-1.436-.843a4.724 4.724 0 0 0-2.17-.334c-.349.035-.702.115-1.006.297a1.157 1.157 0 0 0-.508.593c-.144.425-.075.95.258 1.271.258.258.602.401.937.53.668.244 1.337.483 2.006.725.53.195 1.049.447 1.483.815.425.357.745.84.887 1.378.14.545.168 1.124.052 1.676a2.682 2.682 0 0 1-.79 1.4c-.419.401-.952.666-1.505.827-.69.204-1.417.242-2.132.199a6.82 6.82 0 0 1-2.163-.494 4.258 4.258 0 0 1-.844-.46c.006-.655 0-1.311.003-1.967.968.781 2.188 1.268 3.44 1.277.533.008 1.09-.049 1.567-.308.277-.152.509-.401.602-.706a1.461 1.461 0 0 0-.031-.94c-.121-.31-.39-.536-.673-.695-.487-.27-1.023-.432-1.544-.623-.593-.22-1.203-.402-1.763-.703-.504-.265-.97-.631-1.274-1.12-.307-.49-.427-1.078-.417-1.652a2.697 2.697 0 0 1 .459-1.541c.31-.458.765-.803 1.265-1.03ZM8.067 17.232h1.898V28.26H8.067V17.232ZM41.989 17.233h1.89v11.026h-1.89V17.233ZM49.377 17.232h4.37c1.131.015 2.285.31 3.209.982.782.557 1.366 1.37 1.69 2.27.273.746.382 1.544.375 2.336-.01 1.13-.271 2.286-.9 3.238a4.677 4.677 0 0 1-2.185 1.781 6.046 6.046 0 0 1-2.186.42h-4.373V17.232Zm1.881 1.658v7.695h1.792c.366-.002.734.013 1.1-.035.694-.08 1.383-.346 1.895-.833.454-.424.754-.993.912-1.589.156-.588.196-1.203.156-1.81a4.543 4.543 0 0 0-.377-1.585 3.015 3.015 0 0 0-.985-1.216c-.495-.359-1.099-.543-1.703-.602-.365-.038-.732-.022-1.097-.026l-1.693.001ZM62.986 17.232c2.245-.002 4.49 0 6.736-.002.003.553 0 1.106 0 1.659h-4.88c.002.883-.002 1.766.003 2.65 1.456-.003 2.913-.002 4.37-.002.002.543-.003 1.086.002 1.629-1.458.01-2.916 0-4.375.004v3.414h4.88v1.674h-6.736V17.232ZM75.337 17.232h4.129c.684.014 1.38.125 1.998.428.489.233.92.6 1.204 1.063.339.546.475 1.199.464 1.836.006.652-.103 1.326-.44 1.894a2.443 2.443 0 0 1-1.092.966 3.928 3.928 0 0 1-1.033.301c1.328 1.513 2.658 3.024 3.984 4.539-.715.002-1.43 0-2.146 0-1.29-1.49-2.574-2.983-3.865-4.472H77.22c-.003 1.492.004 2.983-.004 4.474-.626-.003-1.253 0-1.879-.002V17.232Zm1.882 1.625v3.364h2.18c.495-.008 1.014-.138 1.385-.48.253-.23.41-.552.46-.887.064-.424.006-.88-.231-1.245-.222-.347-.598-.571-.992-.669-.398-.107-.813-.08-1.22-.083h-1.582Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path
                      fill="#fff"
                      transform="translate(.57)"
                      d="M0 0h90v29H0z"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          {/* second part */}
          <div className="w-1/2 pb-28  after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/50">
            <img
              src={HeroVidBackground}
              alt="fine girl"
              className="aspect-square rounded-lg overflow-hidden"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-10 lg:left-[50rem] lg:bottom-36 flex items-center">
          <svg
            onClick={onOpenModal}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>

          <div className="flex flex-col justify-center text-white ml-1">
            <h3 className="text-lg font-semibold">Play this video</h3>
            <h5 className="text-xs font-normal">To see why we built brass</h5>
          </div>
        </div>

        <div
          className={`block lg:hidden bg-black fixed [height:calc(100vh-13vh)] inset-y-0 w-[100vw] ${
            isOpen ? 'right-0' : 'right-[-100vw]'
          } transition-all duration-500   text-white fixed top-0`}
        >
          <ul className="pt-20 px-4 divide-y-2 divide-gray-600 divide-opacity-20">
            <li className="py-4">
              <div
                className="flex justify-between"
                onClick={() => toggle('industry')}
              >
                <Link to="/">Industry</Link>
                <span>
                  <svg
                    onClick={() => toggle('industry')}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {industry ? (
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </span>
              </div>
              <div className={`${industry ? 'flex' : 'hidden'} flex-col`}>
                <Link to="/" className="py-7">
                  Retail Businesses
                </Link>
                <Link to="/">Internet Companies</Link>
              </div>
            </li>

            <li className="py-5 flex justify-between">
              <Link to="/">Customers</Link>
            </li>
            <li className="py-5 ">
              <Link to="/">Capital</Link>
            </li>

            <li className="py-4">
              <div
                className="flex justify-between"
                onClick={() => toggle('company')}
              >
                <Link to="/">Company</Link>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {company ? (
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </span>
              </div>
              <div
                className={`${company ? 'flex' : 'hidden'} flex-col space-y-7`}
              >
                <Link to="/" className="pt-7">
                  About Us
                </Link>
                <Link to="/">Why Brass?</Link>
                <Link to="/">Careers</Link>
                <Link to="/">Press resources</Link>
              </div>
            </li>
            <li className="py-4">
              <div
                className="flex justify-between"
                onClick={() => toggle('resources')}
              >
                <Link to="/">Resources</Link>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {resources ? (
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </span>
              </div>
              <div
                className={`${
                  resources ? 'flex' : 'hidden'
                } flex-col space-y-7`}
              >
                <Link to="/" className="pt-7">
                  Blog
                </Link>
                <Link to="/">Guides</Link>
                <Link to="/">Help</Link>
              </div>
            </li>

            <li className="py-5">
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
