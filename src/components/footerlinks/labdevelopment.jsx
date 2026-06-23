import { useState } from 'react';

const features = [
  {
    title: "Attention to detail",
    desc: "Many developers cringe at the thought of pixel perfection. Not us, we live and breath pixels and understand the effort it takes to make a website beautiful.",
  },
  {
    title: "No headaches",
    desc: "Gone are the days of going back and forth with developers when reviewing the design. We get it right the first time, which saves you time and headaches.",
  },
  {
    title: "Fast execution",
    desc: "As highly experienced Webflow developers we're able to build your website within 2-4 weeks depending on the complexity of the design.",
  },
  {
    title: "Easy and reliable",
    desc: "Just as important as our code quality, we care about design details, communication, timelines and project management.",
  },
];

const steps = [
  {
    number: "1",
    title: "Share your designs",
    subtitle: "Determine costs and timeline...",
    desc: "We review your designs in detail and provide you with a fixed-price breakdown for each page and a timeline for the project.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "2",
    title: "Begin development",
    subtitle: "Develop using proposed Tools or Languages...",
    desc: "If you're happy with the price, we'll start the work right away by building each page across mobile, tablet and desktop.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Provide feedback",
    subtitle: "Add the final polish...",
    desc: "Once the initial build is complete, we'll send you a staging link so you can review the work and provide feedback for any final tweaks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
];

export default function Labdevelopment() {
  return (
    <div className="w-full">

      {/* ✅ Section 1 — Hero */}
      <div
        className="px-8 py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #ffe0ec 0%, #fff5f0 40%, #e8f0ff 100%)",
        }}
      >
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Your designer's{" "}
            <span className="underline decoration-wavy decoration-pink-400">
              favourite
            </span>{" "}
            web developer
          </h1>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-sm">
            Hellverse can build your Figma, Sketch or Adobe XD{" "}
            <span className="text-blue-500 underline cursor-pointer">website</span>{" "}
            design pixel perfect on Webflow.
          </p>
          <button className="bg-gray-900 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-gray-700 transition-all duration-300 active:scale-95">
            Get Started
          </button>
        </div>
      </div>

      {/* ✅ Section 2 — Features */}
      <div className="bg-white px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i}>
              {/* Checkmark */}
              <div className="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Section 3 — How it works */}
      <div className="bg-gray-900 px-8 py-20">
        <div className="max-w-2xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-4">How it works</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              As highly experienced Website experts, Hellverse will carefully translate your
              designs to code using best practices with{" "}
              <span className="font-semibold text-gray-200">code/no-code tools.</span>
            </p>
          </div>

          {/* Steps */}
          <div className="relative">

            {/* ✅ Vertical line */}
            <div className="absolute left-[18px] top-8 bottom-8 w-px bg-gray-600 z-0"></div>

            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex items-start gap-6 relative z-10">

                  {/* Step Number */}
                  <div className="flex-shrink-0 w-9 h-9 rounded-full border border-gray-500 bg-gray-900 flex items-center justify-center text-gray-400 text-xs font-bold">
                    {step.number}
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-gray-800 border border-gray-700 rounded-xl p-5 flex gap-5 items-center hover:border-gray-500 transition-all duration-300">

                    {/* Icon */}
                    <div className="flex-shrink-0 bg-gray-700 rounded-lg p-3 flex items-center justify-center">
                      {step.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-gray-400 text-xs font-medium mb-2">{step.subtitle}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}