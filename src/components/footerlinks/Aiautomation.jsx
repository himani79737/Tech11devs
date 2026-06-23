const aiServices = [
  { label: "Data Processing" },
  { label: "Automation & RPA" },
  { label: "NLP" },
  { label: "DevOps" },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Custom AI/ML Solutions",
    desc: (
      <>
        We develop AI and{" "}
        <span className="text-blue-600 font-medium">machine learning tools tailored</span>{" "}
        to your business needs, driving faster, more efficient processes.
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Enhanced Productivity",
    desc: "By automating repetitive tasks, we free up your team to focus on more strategic work, enhancing overall productivity.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Comprehensive Training",
    desc: (
      <>
        Unlike others, we follow up our AI deployments with{" "}
        <span className="text-blue-600 font-medium">detailed training</span>, ensuring
        your team can use the tools effectively and confidently.
      </>
    ),
  },
];

export default function AiAutomation() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left — Text */}
        <div className="max-w-sm border-l-4 border-blue-900 pl-4">
          <p className="text-xs font-semibold text-blue-600 mb-2">
            Empower Productivity With AI Solutions
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            AI Automation & Training Services
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            We deploy advanced AI and machine learning tools to automate processes
            and provide training, ensuring your{" "}
            <span className="text-blue-600 font-medium">team</span> can fully{" "}
            <span className="text-blue-600 font-medium">leverage</span> these solutions.
          </p>
        </div>

        {/* Right — Service Cards */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          {aiServices.map((service, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-2 border-dashed border-blue-900 rounded-md px-5 py-3 text-blue-900 font-semibold text-xs hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer min-w-[150px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {service.label}
            </div>
          ))}
        </div>

      </div>

      {/* ✅ Bottom Section */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-gray-200 rounded-2xl px-8 py-12">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              AI Solutions That Drive Efficiency
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our AI automation services are designed to optimize your{" "}
              <span className="text-blue-600 font-medium">operations</span> and boost
              productivity, while our training ensures the{" "}
              <span className="text-blue-600 font-medium">team remains empowered</span>.
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
                <h3 className="font-bold text-blue-700 text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
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