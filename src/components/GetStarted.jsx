import { Link } from 'react-router-dom';

export default function GetStarted() {
  return (
    <div className="w-screen bg-black text-white pt-32 lg:pt-72 px-4">
      <div className="space-y-4">
        <h1 className="text-3xl lg:text-[45px] font-medium text-center">
          Get started for free in 10 minutes
        </h1>
        <p className="text-center text-sm lg:text-lg">
          Get all the best financial products for your business growth for free.
          <br />
          Open the last current account you will ever need for your business
        </p>

        <div className="text-center pt-12">
          <Link
            className="w-12 h-4 px-5 py-3 bg-[#0bce5a] rounded-md text-white"
            to="/"
          >
            Get Started in minutes
          </Link>
        </div>
      </div>
    </div>
  );
}
