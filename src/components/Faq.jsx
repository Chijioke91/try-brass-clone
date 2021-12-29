import { useState } from 'react';

export default function Faq() {
  const [faqStates, setFaqStates] = useState({
    whoSignUp: false,
    openingAccountCost: false,
    accountOpeningRequirements: false,
    moneySecurity: false,
  });

  const {
    whoSignUp,
    openingAccountCost,
    accountOpeningRequirements,
    moneySecurity,
  } = faqStates;

  const toggle = (type) => {
    if (type === 'whoSignUp') {
      setFaqStates({
        ...faqStates,
        whoSignUp: !whoSignUp,
        openingAccountCost: false,
        accountOpeningRequirements: false,
        moneySecurity: false,
      });
    } else if (type === 'openingAccountCost') {
      setFaqStates({
        ...faqStates,
        whoSignUp: false,
        openingAccountCost: !openingAccountCost,
        accountOpeningRequirements: false,
        moneySecurity: false,
      });
    } else if (type === 'accountOpeningRequirements') {
      setFaqStates({
        ...faqStates,
        whoSignUp: false,
        openingAccountCost: false,
        accountOpeningRequirements: !accountOpeningRequirements,
        moneySecurity: false,
      });
    } else if (type === 'moneySecurity') {
      setFaqStates({
        ...faqStates,
        whoSignUp: false,
        openingAccountCost: false,
        accountOpeningRequirements: false,
        moneySecurity: !moneySecurity,
      });
    }
  };

  return (
    <div className="h-auto w-screen text-white pt-24 lg:px-24 bg-black">
      <div className="hidden lg:flex">
        <div className="flex flex-col text-center lg:text-left space-y-6 lg:w-1/2 lg:pt-16">
          <h1 className="text-[28px] lg:text-[45px] lg:leading-[58px] px-8 lg:px-0 leading-10  font-semibold">
            Some of the things you
            <br /> may want to know
          </h1>
          <p className="text-sm lg:text-lg px-4 lg:px-0 font-medium">
            We answered questions so you don’t have to ask them.
          </p>
        </div>

        {/* FAQs */}

        <div className={`flex flex-col space-y-12 lg:w-1/2`}>
          <div className="group relative px-4 pt-10 ">
            <div className={`${whoSignUp ? 'block' : 'hidden'}  ease-in-out`}>
              <div className={`bg-[#101518] text-white lg:h-64 pl-4 pr-7`}>
                <p className="pb-10 pt-14 lg:pt-24">
                  We currently only serve registered businesses in Nigeria. We
                  support sole traders, NGOs, partnerships and limited liability
                  companies. However, If your business is not yet registered,
                  Brass can help you get your desired business registered on
                  time with our partners.
                </p>
              </div>
            </div>

            <div className="absolute top-10 inset-x-0 px-8 py-3 lg:py-10 z-20">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle('whoSignUp')}
              >
                <div className="">
                  <h1 className="text-base font-bold">
                    Who Can Sign up for Brass
                  </h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-white transition-transform duration-300 ease-in-out ${
                      whoSignUp ? '-rotate-0' : 'rotate-180'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative px-4 pt-10">
            <div
              className={`${
                openingAccountCost ? 'block' : 'hidden'
              }  ease-in-out`}
            >
              <div className={`bg-[#101518] text-white lg:h-64 pl-4 pr-7`}>
                <p className="pb-10 pt-14 lg:pt-24">
                  Brass is a zero-fee current account for businesses. That
                  means, sign-up, minimum balance, making payments using our
                  method, requesting for your first debit card, monthly fees,
                  account or card maintenance are all at N0.00.
                </p>
              </div>
            </div>

            <div className="absolute top-10 inset-x-0 px-8 py-3 lg:py-10 z-20">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle('openingAccountCost')}
              >
                <div>
                  <h1 className="text-base font-bold">
                    How much does opening an account cost?
                  </h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-white transition-transform duration-300 ease-in-out ${
                      openingAccountCost ? '-rotate-0' : 'rotate-180'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* end */}
          </div>

          <div className="group relative px-4 pt-10">
            <div
              className={`${
                accountOpeningRequirements ? 'block' : 'hidden'
              }  ease-in-out`}
            >
              <div className={`bg-[#101518] text-white lg:h-64 pl-4 pr-7`}>
                <p className="pb-10 pt-14 lg:pt-24">
                  You will need government-issued IDs (Including BVN) and your
                  company's incorporation documents.
                </p>
              </div>
            </div>

            <div className="absolute top-10 inset-x-0 px-8 py-3 lg:py-10 z-20">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle('accountOpeningRequirements')}
              >
                <div>
                  <h1 className="text-base font-bold">
                    What do I need to open an account?
                  </h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-white transition-transform duration-300 ease-in-out ${
                      accountOpeningRequirements ? '-rotate-0' : 'rotate-180'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative px-4 pt-10">
            <div
              className={`${moneySecurity ? 'block' : 'hidden'}  ease-in-out`}
            >
              <div className={`bg-[#101518] text-white lg:h-64 pl-4 pr-7`}>
                <p className="pb-10 pt-14 lg:pt-24">
                  We have introduced Two factor Authentication(2FA) for an extra
                  level of security. This authentication is done using digital
                  OTP apps like Google authenticator and Authy instead of
                  hackable channels such as the SMS.
                </p>
              </div>
            </div>

            <div className="absolute top-10 inset-x-0 px-8 py-3 lg:py-10 z-20">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggle('moneySecurity')}
              >
                <div>
                  <h1 className="text-base font-bold">
                    How do you ensure safekeeping of my data and money?
                  </h1>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 text-white transition-transform duration-300 ease-in-out ${
                      moneySecurity ? '-rotate-0' : 'rotate-180'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
