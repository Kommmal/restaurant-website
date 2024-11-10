import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="text-white flex flex-wrap w-full justify-center items-center pt-[150px] md:m-0 bg-black">
      <h1 className="text-2xl font-bold text-center md:text-4xl">What Our Clients Say</h1>
      <div className="flex flex-wrap gap-5 justify-center px-8 py-12">
        {/* Testimonial Item 1 */}
        <TestimonialCard
          client="Michael Loperz"
          job="Head of Sales at Tesla"
          review="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
        {/* Testimonial Item 2 */}
        <TestimonialCard
          client="Sarah Johnson"
          job="Marketing Director at Apple"
          review="I am so happy with the service! The team really exceeded my expectations and delivered excellent results. Highly recommend!"
        />
        {/* Testimonial Item 3 */}
        <TestimonialCard
          client="John Doe"
          job="Product Manager at Google"
          review="The experience was fantastic. I appreciate the attention to detail and the quality of the service provided. Will definitely return."
        />
        {/* Testimonial Item 4 */}
        <TestimonialCard
          client="Emma Brown"
          job="CTO at Amazon"
          review="A truly outstanding experience. The team was professional and extremely efficient. We saw immediate improvements."
        />
        {/* Testimonial Item 5 */}
        <TestimonialCard
          client="David Wilson"
          job="Head of Engineering at Microsoft"
          review="The work provided was nothing short of exceptional. I couldn’t have asked for a better outcome. Highly recommend to others."
        />
        {/* Testimonial Item 6 */}
        <TestimonialCard
          client="Sophia Lee"
          job="CEO at Facebook"
          review="We are very pleased with the results. The entire process was seamless, and the end product exceeded all of our expectations."
        />
      </div>
    </div>
  );
};

export default Testimonials;
