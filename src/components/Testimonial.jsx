import TestimonialSlider from './TestimonialSlider';

export default function Testimonial() {
  return (
    <div className="w-screen">
      <div className="flex flex-col items-center space-y-4 lg:space-y-6 md:pt-12 lg:pt-40">
        <h1 className="font-bold lg:font-medium text-3xl lg:text-5xl px-8 text-center">
          Built for today's
          <br className="hidden lg:block md:text-center" /> ambitious{' '}
          <br className="hidden md:block lg:hidden md:text-center" /> businesses
        </h1>
        <p className="px-4 text-center text-[15px] lg:text-lg text-gray-800 pb-10">
          Thousands of forward-thinking businesses rely on Brass everyday to
          turbo-
          <br className="hidden lg:block md:text-center" />
          charge their{' '}
          <br className="hidden md:block lg:hidden md:text-center" />
          business financial operations
        </p>
      </div>
      <TestimonialSlider />
    </div>
  );
}
