import Android from './logos/Android';
import BottomLogo from './logos/BottomLogo';
import IOS from './logos/IOS';

export default function Footer() {
  return (
    <div className="w-screen text-white bg-black px-4 lg:px-24 overflow-x-hidden">
      <div className="space-y-4">
        <div className="flex space-x-3 items-baseline">
          <BottomLogo />
          <h4 className="text-sm font-medium">Big starts small.</h4>
        </div>
        <div>
          <h5 className="pt-1">Available on we and also on</h5>
          <div className="flex items-center space-x-3 pt-6">
            <Android />
            <IOS />
          </div>
        </div>
        <p className="text-[15px] pt-8">
          Banking services backed by Bancorp MFB & FCMB and regulated by the
          Central Bank of Nigeria. Card issued by Sterling Bank. <br /> Brass
          Technology Nigeria Limited, DBA: Brass is a Brass Technologies, Inc
          company.
        </p>

        <p className="text-center pt-10 pb-12 md:pb-96 lg:pb-8">
          Cloned with <span className="text-blue-500">&#9829;</span> by{' '}
          <a
            href="https://twitter.com/dev_cjay"
            target="_blank"
            rel="noopener noreferrer"
          >
            cjay
          </a>{' '}
        </p>
      </div>
    </div>
  );
}
