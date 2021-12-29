import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BottomNav() {
  const [navStates, setNavStates] = useState({
    industry: false,
    product: false,
    about: false,
    support: false,
    legal: false,
    follow: false,
    contact: false,
  });

  const { industry, product, about, support, legal, follow, contact } =
    navStates;

  const toggle = (type) => {
    if (type === 'industry') {
      setNavStates({
        ...navStates,
        industry: !industry,
        product: false,
        about: false,
        support: false,
        legal: false,
        follow: false,
        contact: false,
      });
    } else if (type === 'product') {
      setNavStates({
        industry: false,
        product: !product,
        about: false,
        support: false,
        legal: false,
        follow: false,
        contact: false,
      });
    } else if (type === 'about') {
      setNavStates({
        industry: false,
        product: false,
        about: !about,
        support: false,
        legal: false,
        follow: false,
        contact: false,
      });
    } else if (type === 'support') {
      setNavStates({
        industry: false,
        product: false,
        about: false,
        support: !support,
        legal: false,
        follow: false,
        contact: false,
      });
    } else if (type === 'legal') {
      setNavStates({
        industry: false,
        product: false,
        about: false,
        support: false,
        legal: !legal,
        follow: false,
        contact: false,
      });
    } else if (type === 'follow') {
      setNavStates({
        industry: false,
        product: false,
        about: false,
        support: false,
        legal: false,
        follow: !follow,
        contact: false,
      });
    } else if (type === 'contact') {
      setNavStates({
        industry: false,
        product: false,
        about: false,
        support: false,
        legal: false,
        follow: false,
        contact: !contact,
      });
    }
  };

  return (
    <div className="bg-black w-screen px-4 lg:px-24 text-white">
      <ul className="lg:hidden py-20">
        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('industry')}
          >
            <Link to="/">Industry</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  industry ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
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
        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('product')}
          >
            <Link to="/">Product</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  product ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`${product ? 'flex' : 'hidden'} flex-col`}>
            <Link to="/" className="py-7">
              Brass Capital
            </Link>
          </div>
        </li>

        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('about')}
          >
            <Link to="/">About</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  about ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`${about ? 'flex' : 'hidden'} flex-col space-y-7`}>
            <Link to="/" className="pt-7">
              Customers
            </Link>
            <Link to="/">Company</Link>
            <Link to="/">Why Brass</Link>
            <Link to="/">Press resources</Link>
            <Link to="/">Careers</Link>
          </div>
        </li>
        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('support')}
          >
            <Link to="/">Support</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  support ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`${support ? 'flex' : 'hidden'} flex-col space-y-7`}>
            <Link to="/" className="pt-7">
              Blog
            </Link>
            <Link to="/">Guides</Link>
            <Link to="/">Help</Link>
          </div>
        </li>
        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('legal')}
          >
            <Link to="/">Legal</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  legal ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`${legal ? 'flex' : 'hidden'} flex-col space-y-7`}>
            <Link to="/" className="pt-7">
              Terms of service
            </Link>
            <Link to="/">Privacy policy</Link>
            <Link to="/">Capital TOS</Link>
          </div>
        </li>
        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('follow')}
          >
            <Link to="/">Follow</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  follow ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`${follow ? 'flex' : 'hidden'} flex-col space-y-7`}>
            <Link to="/" className="pt-7">
              Twitter
            </Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Instagram TOS</Link>
            <Link to="/">YouTube</Link>
          </div>
        </li>
        <li className="py-4">
          <div
            className="flex justify-between text-gray-700"
            onClick={() => toggle('contact')}
          >
            <Link to="/">Contact</Link>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-gray-500 transition-transform duration-500 ease-in-out ${
                  contact ? 'rotate-180' : '-rotate-0'
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className={`${contact ? 'flex' : 'hidden'} flex-col space-y-7`}>
            <Link to="/" className="pt-7">
              01-7000-2000
            </Link>
            <Link to="/">sales@trybrass.com</Link>
            <Link to="/">help@trybrass.com</Link>
            <Link to="/">business@trybrass.com</Link>
          </div>
        </li>
      </ul>

      <ul className="hidden lg:flex items-start justify-between py-20 lg:pt-40">
        <li className="text-white">
          <h1 className="text-[#50555e]">Industry</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              Retail business
            </Link>
            <Link to="/">Internet companies</Link>
          </div>
        </li>
        <li className="text-white">
          <h1 className="text-[#50555e]">Product</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              Brass Capital
            </Link>
          </div>
        </li>
        <li className="text-white">
          <h1 className="text-[#50555e]">About</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              Customers
            </Link>
            <Link to="/">Company</Link>
            <Link to="/">Why Brass</Link>
            <Link to="/">Press Resources</Link>
            <Link to="/">Careers</Link>
          </div>
        </li>
        <li className="text-white">
          <h1 className="text-[#50555e]">Support</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              Blog
            </Link>
            <Link to="/">Guides</Link>
            <Link to="/">Help</Link>
          </div>
        </li>
        <li className="text-white">
          <h1 className="text-[#50555e]">Legal</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              Terms of service
            </Link>
            <Link to="/">Private policy</Link>
            <Link to="/">Capital TOS</Link>
          </div>
        </li>
        <li className="text-white">
          <h1 className="text-[#50555e]">Follow</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              Twitter
            </Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">YouTube</Link>
          </div>
        </li>
        <li className="text-white">
          <h1 className="text-[#50555e]">Contact</h1>
          <div className="flex flex-col space-y-4">
            <Link to="/" className="pt-4">
              01-700-2000
            </Link>
            <Link to="/">sales@trybrass.com</Link>
            <Link to="/">help@trybrass.com</Link>
            <Link to="/">business@trybrass.com</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
