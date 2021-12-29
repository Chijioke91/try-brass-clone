import Speed from '../assets/speed.gif';
import Support from '../assets/support.gif';
import Security from '../assets/security.gif';

const infos = [
  {
    gif: Speed,
    title: 'Speed',
    content:
      'Open a commercial-grade current account from anywhere in 10 minutes',
  },
  {
    gif: Security,
    title: 'Security',
    content:
      'Rely on bank-grade security with all your monies fully insured by NDIC',
  },
  {
    gif: Support,
    title: 'Support',
    content:
      'Get access to a trusted support team and resources whenever you want',
  },
];

export default function MoreInfo() {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pt-12">
      {infos.map(({ gif, title, content }) => (
        <div
          key={title}
          className="flex flex-col md:flex-row md:w-[22rem] lg:w-[26rem] items-center md:items-start py-12 space-y-4 md:space-y-0 md:space-x-3"
        >
          <img
            className="h-[4.5rem]  w-[4.5rem] rounded-xl"
            src={gif}
            alt={title}
          />
          <div className="flex flex-col items-center md:items-start">
            <h1 className="font-semibold text-lg md:text-base lg:text-lg">
              {title}
            </h1>
            <p className="text-[14.5px] font-medium lg:font-normal text-center md:text-left">
              {content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
