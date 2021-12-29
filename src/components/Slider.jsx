import { useState } from 'react';
import PaymentsVideo from '../assets/payments-vid.mp4';
import InvoicesVideo from '../assets/invoices-vid.mp4';
import CashFlowVideo from '../assets/cashflow-vid.mp4';
import CrossPlatformVideo from '../assets/cross-platform-vid.mp4';
import TeamBankingVideo from '../assets/team-banking-vid.mp4';

const videos = [
  {
    id: 0,
    title: 'Payments',
    content: 'Create instant, scheduled and recurring payments easily',
    video: PaymentsVideo,
  },
  {
    id: 1,
    title: 'Invoices',
    content: 'Send, receive, and reconcile invoices all on one platform',
    video: InvoicesVideo,
  },
  {
    id: 2,
    title: 'Cashflow Support',
    content: 'Move your business forward with insight and financial resources',
    video: CashFlowVideo,
  },
  {
    id: 3,
    title: 'Cross-platform availability',
    content: 'Bank everywhere. Available on iOS, Android and Slack',
    video: CrossPlatformVideo,
  },
  {
    id: 4,
    title: 'Team banking',
    content: 'Work with your team to run your entire financial operations',
    video: TeamBankingVideo,
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative lg:px-24">
      <div className="text-white">
        <h2 className="text-black text-center lg:text-left mb-8 mt-16 text-[28px] lg:text-[45px] lg:w-[43rem] lg:tracking-tight px-4 lg:px-0 font-bold">
          Everything you need, less of what you don't.
        </h2>
        <div className="lg:hidden flex items-center justify-center space-x-3 top-[29rem] md:top-[53rem] md:left-0 relative  z-10">
          {videos.map((vid) => (
            <div
              key={vid.id}
              className={`rounded-full h-3 w-3 ${
                vid.id === index ? 'bg-gray-700' : 'bg-gray-300'
              }`}
              onClick={() => setIndex(vid.id)}
            />
          ))}
        </div>

        <div className="overflow-x-hidden lg:hidden">
          <div
            className={`w-[500vw]  h-full flex items-center justify-center transition-all ease-in-out duration-[1500ms]`}
            style={{ transform: `translateX(${-100 * index}vw)` }}
          >
            {videos.map((vid) => (
              <div key={vid.id} className="w-[100vw] relative px-4">
                <video
                  loop
                  autoPlay
                  src={vid.video}
                  type="video/mp4"
                  className="rounded-xl "
                />

                <div className="static lg:hidden top-28 pb-64 pt-28 md:pt-32  md:flex items-center justify-center">
                  <div className="absolute flex flex-col justify-center items-center space-y-2 px-8 text-center">
                    <h2 className="text-xl font-medium text-black">
                      {vid.title}
                    </h2>
                    <p className="text-gray-400">{vid.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden relative lg:flex flex-col">
        <div>
          {videos.map((vid) => (
            <div
              key={vid.id}
              className="flex items-center space-x-3 cursor-pointer mr-20"
              onClick={() => setIndex(vid.id)}
            >
              <div
                key={vid.id}
                className={`h-28 w-1 transition-all duration-1000 ${
                  vid.id === index ? 'bg-[#0bce5a]' : 'bg-gray-300'
                }`}
              />
              <div
                className={` ${
                  vid.id === index
                    ? 'font-semibold'
                    : 'text-gray-400 font-medium'
                }`}
              >
                <h4 className="text-xl">{vid.title}</h4>
                <p className="text-base">{vid.content}</p>
                <div
                  className={`p-20 transition-all duration-1000 bg-[#EBECF0] rounded-xl h-full flex items-center justify-center absolute top-0 right-0 ${
                    vid.id === index ? 'block' : 'hidden'
                  }`}
                >
                  <video
                    loop
                    autoPlay
                    muted
                    src={vid.video}
                    type="video/mp4"
                    className="w-[480px]"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
