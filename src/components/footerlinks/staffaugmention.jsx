const techRoles = [
  { label: "Netsuite Developers" },
  { label: "Dynamics 365 Developers" },
  { label: "Fullstack Developers" },
  { label: "Frontend Developers" },
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Quick turnaround",
    desc: "Get skilled developers onboard swiftly, minimizing downtime and speeding up your project delivery.",
    highlight: false,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Flexible Engagement Models",
    desc: (
      <>
        Choose from{" "}
        <span className="text-blue-600 font-medium">short-term, long-term</span>, or project-based
        engagements to suit your business needs.
      </>
    ),
    highlight: true,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Expert Developers",
    desc: (
      <>
        Our team is proficient in the latest technologies, ensuring your projects benefit from the{" "}
        <span className="text-blue-600 font-medium">best expertise available</span>.
      </>
    ),
    highlight: false,
  },
];

export default function StaffAugmentation() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ✅ Top Section — Text + Tech Roles */}
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-start justify-between gap-10">

        {/* Left — Text */}
        <div className="max-w-sm border-l-4 border-blue-900 pl-4">
          <p className="text-xs font-semibold text-blue-600 mb-2">
            Access Top Talent, Fast
          </p>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Staff Augmentation Services
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            Seamlessly scale your team with our expert developers who integrate
            effortlessly to deliver results on time.
          </p>
        </div>

        {/* Right — Tech Role Cards */}
        <div className="grid grid-cols-2 gap-3 flex-shrink-0">
          {techRoles.map((role, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-2 border-dashed border-blue-900 rounded-md px-4 py-3 text-blue-900 font-semibold text-xs hover:bg-blue-900 hover:text-white transition-all duration-300 cursor-pointer min-w-[160px]"
            >
              {/* Monitor Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {role.label}
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
              Flexible Solutions, Rapid Results
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
              Our staff augmentation services are designed to bridge the talent
              gap quickly and efficiently.
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