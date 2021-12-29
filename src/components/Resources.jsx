import MoneyBg from '../assets/naira.webp';
import IdeaBg from '../assets/idea.webp';
import BusinessCreditBg from '../assets/business-credit.webp';
import ResourceCard from './ResourceCard';

const resources = [
  {
    id: 1,
    image: MoneyBg,
    title: 'Why you need a separate business current account',
    content: 'The reason for them and how to open a Brass account',
    alt: 'money',
  },
  {
    id: 2,
    image: IdeaBg,
    title: 'Working on the right idea',
    content: 'How to figure out the right business idea for you',
    alt: 'broken-light-bulb',
  },
  {
    id: 3,
    image: BusinessCreditBg,
    title: 'What you need to know about business credit',
    content: 'How business credit can work for you.',
    alt: 'bar-meter',
  },
];

export default function Resources() {
  return (
    <div className="w-screen pt-20 lg:pt-32 px-4 lg:px-24 space-y-4 pb-20">
      <div className="lg:flex flex-col items-center justify-center">
        <h1 className="text-[28px] lg:text-5xl leading-9 lg:tracking-tight text-black font-medium text-center">
          Go further with resources to <br className="hidden lg:block" />
          get started
        </h1>
        <p className="pb-10 lg:pt-10 text-center lg:w-[585px] lg:text-lg">
          We have partnered with businesses on the same mission as ours to help
          local businesses. We have also added resources you need to start, run
          and grow your business.
        </p>
      </div>

      {/* Resources Cards */}
      <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:grid-cols-3 lg:items-start">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} {...resource} />
        ))}
      </div>
    </div>
  );
}
