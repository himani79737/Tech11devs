const seoTypes = [
  { label: "On-Page" },
  { label: "Off-Page" },
  { label: "Technical SEO" },
  { label: "Content" },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Tailored SEO Solutions",
    desc: (
      <>
        Our customized SEO strategies are built around your specific business goals,
        improving your rankings and driving{" "}
        <span className="text-blue-600 font-medium">organic traffic</span>.
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Data-Driven PPC Campaigns",
    desc: (
      <>
        We create precise, targeted PPC campaigns that deliver instant results, driving
        relevant traffic and{" "}
        <span className="text-blue-600 font-medium">maximizing your return on investment</span>.
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Comprehensive Performance Tracking",
    desc: (
      <>
        Our analytics tools provide in-depth{" "}
        <span className="text-blue-600 font-medium">reporting and insights</span>, allowing
        you to track performance and refine strategies for{" "}
        <span className="text-blue-600 font-medium">optimal results</span>.
      </>
    ),
  },
];

export default function SearchMarketing() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ Top Section — Text + SEO Type Cards */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left — Text */}
        <div className="max-w-sm border-l-4 border-blue-900 pl-4">
          <p className="text-xs font-semibold text-blue-600 mb-2">
            Drive Traffic, Boost Conversions
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Search Marketing Services
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            Our targeted SEO and{" "}
            <span className="text-blue-600 font-medium">PPC</span> strategies
            enhance your online visibility and maximize ROI, driving high-quality
            traffic to your <span className="text-blue-600 font-medium">business</span>.
          </p>
        </div>

        {/* Right — SEO Type Cards */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          {seoTypes.map((type, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-2 border-dashed border-blue-900 rounded-md px-5 py-3 text-blue-900 font-semibold text-xs hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer min-w-[150px]"
            >
              {/* Monitor Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {type.label}
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
              Tailored Strategies, Measurable Results
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              We deliver data-driven SEO and{" "}
              <span className="font-semibold text-gray-700">PPC</span> campaigns
              designed to boost your online presence and deliver measurable success.
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
                <h3 className="font-bold text-gray-900 text-sm mb-2">
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