
const techStacks = [
  { label: "MEAN" },
  { label: "MERN" },
  { label: "LAMP" },
  { label: "FLUTTER" },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582M20 20v-5h-.581M5.077 9A8 8 0 0119.938 15M4.062 9A8 8 0 0118.923 15" />
      </svg>
    ),
    title: "Agile & DevOps Practices",
    desc: "We combine agile methodologies and DevOps principles to ensure faster delivery, continuous improvement, and maximum efficiency",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
      </svg>
    ),
    title: "Custom-Built Solutions",
    desc: "Our development approach is fully customizable, tailored to meet the unique needs and goals of your business.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: "Ongoing Support",
    desc: "From deployment to post-launch maintenance, we stay with you, ensuring that your solution continues to perform at its best.",
  },
];

export default function Service() {
  return (
    <div className="bg-gray-100 min-h-screen" id="project">

      {/* ✅ Top Section — Hero + Tech Stack */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left — Text */}
        <div className="max-w-lg border-l-4 border-blue-900 pl-5">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
            Complete Solutions, From Start To Finish
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
            End-To-End Development Services
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            We manage every phase of your software or web development, ensuring
            a seamless journey from concept to launch.
          </p>
        </div>

        {/* Right — Tech Stack Cards */}
        <div className="grid grid-cols-2 gap-3">
          {techStacks.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-2 border-dashed border-blue-900 rounded-md px-5 py-3 text-blue-900 font-semibold text-sm hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer"
            >
              {/* Monitor icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {tech.label}
            </div>
          ))}
        </div>

      </div>

      {/* ✅ Bottom Section — Features */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gray-200 rounded-2xl px-8 py-12">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Holistic Development, Tailored to You
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our end-to-end development services take care of the entire process,
              delivering custom solutions designed to help you thrive.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button className="bg-blue-900 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-blue-800 transition-all duration-300 hover:scale-105 active:scale-95">
              Get Started
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}