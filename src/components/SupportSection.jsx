import DarkGirl from '../assets/dark-girl.webp';

export default function SupportSection() {
  return (
    <div className="w-screen pt-12 md:pt-20 lg:flex">
      <div className="sticky top-0 h-[43vh] lg:h-[80vh] object-center md:h-full md:w-fit lg:w-1/2">
        <img className="h-full sticky" src={DarkGirl} alt="dark-fine-girl" />
      </div>
      <div className="py-5 px-4 text-left space-y-4 lg:space-y-8 md:hidden lg:flex flex-col justify-center lg:px-8 lg:w-1/2 ">
        <h3 className="capitalize text-sm font-[600] font-mono text-[#8f96a3]">
          Support When you need it
        </h3>
        <h2 className="text-[28px] lg:text-5xl font-semibold">
          Our support team is{' '}
          <br className="hidden lg:block text-left leading-[58px]" /> your team
        </h2>
        <p className="text-sm lg:text-[18px] lg:text-left text-gray-600 font-medium lg:font-normal lg:text-black lg:w-[580px]">
          Our support team are a mix of bankers and growth experts ready to help
          you. With a Brass account, you get a team that is genuinely seeking to
          understand your business and provide solutions for its financial
          operations.
          <br />
          <br />
          We are committed to going beyond issue resolution to becoming your
          partner in the growing and smooth running of your business.
        </p>
      </div>
    </div>
  );
}
