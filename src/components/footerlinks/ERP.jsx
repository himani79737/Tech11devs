const erpPlatforms = [
  { label: "Netsuite" },
  { label: "Acumatica" },
  { label: "Dynamics 365" },
  { label: "SAP" },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Industry-Specific ERP Solutions",
    desc: (
      <>
        We customize <span className="text-blue-600 font-medium">ERP</span> systems
        to align with your industry requirements, creating a perfect fit for your
        business processes.
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Seamless Integration",
    desc: (
      <>
        Our team ensures smooth{" "}
        <span className="text-blue-600 font-medium">ERP</span> integration across
        your operations, minimizing disruption and maximizing productivity.
      </>
    ),
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Ongoing Support & Optimization",
    desc: (
      <>
        Beyond implementation, we provide continuous support and optimization to
        keep your{" "}
        <span className="text-blue-600 font-medium">ERP</span> system running
        efficiently and effectively.
      </>
    ),
  },
];

export default function ErpImplementation() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left — Text */}
        <div className="max-w-sm border-l-4 border-blue-900 pl-4">
          <p className="text-xs font-semibold text-blue-600 mb-2">
            Streamline Operations, Maximize Efficiency
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            ERP Implementation Services
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            We deliver tailored{" "}
            <span className="text-blue-600 font-medium">ERP</span> solutions that
            optimize your{" "}
            <span className="text-blue-600 font-medium">business processes</span>,
            enabling seamless integration and enhanced performance.
          </p>
        </div>

        {/* Right — Platform Cards */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          {erpPlatforms.map((platform, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-2 border-dashed border-blue-900 rounded-md px-5 py-3 text-blue-900 font-semibold text-xs hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer min-w-[140px]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {platform.label}
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
              Customized ERP Solutions for Every Industry
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our{" "}
              <span className="text-blue-600 font-medium">ERP</span> implementation
              services are designed to streamline operations, reduce inefficiencies,
              and improve decision-making.
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