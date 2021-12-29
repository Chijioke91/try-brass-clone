import MoreInfo from './MoreInfo';

export default function CompanyDetails() {
  return (
    <div className="w-screen flex flex-col bg-white px-6 lg:px-24">
      <div>
        <h1 className="pt-12 lg:pt-24 text-3xl lg:text-5xl lg:font-medium font-bold text-center">
          The complete financial stack for your business
        </h1>
        <p className="text-[14.5px] lg:text-xl lg:font-normal font-medium text-center pt-6">
          Top-end financial tools to help your business with its financial
          operations and cash flow.
        </p>
        <p className="text-[14.5px] lg:text-xl lg:font-normal font-medium text-center">
          We help companies of all types work better, save time and money with a
          simply better banking service that works.
        </p>
      </div>

      <MoreInfo />
    </div>
  );
}
