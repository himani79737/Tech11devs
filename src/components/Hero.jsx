import react from 'react'


const services = [
  { icon: "💻", label: "Web Development", bg: "#1a69b3" },
  { icon: "☁️", label: "Cloud & DevOps", bg: "#1a69b3" },
  { icon: "🎨", label: "UI/UX Design", bg: "#1a69b3" },
];

function Hero() {
    return (
        <section className='min-h-screen flex items-center justify-center px-6 py-16 bg-gray-200' id='home'>
            <div className='max-w-3xl w-full mx-auto text-center'>
                <p className='text-sm uppercase tracking-widest text-gray-600 mb-3'> Complete Solutions, From Start to Finish</p>
                <h1 className='text-4xl md:text-6xl font-bold text-blue-700 leading-tight mb-6'>End-to-End Development Services
                </h1>
                <p className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto mb-10'>We manage every phase of your software or web development, ensuring a seamless journey from concept to launch.</p>
                {/* buttons */}
                 <div className="flex gap-4 justify-center flex-wrap mb-12">
          <button className="px-7 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:scale-105">
            Get Started →
          </button>
          <button className="px-7 py-3 border border-gray-500 text-black rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-all active:scale-95">
            View Our Work
          </button>
        </div>
         <div className="flex gap-6 justify-center flex-wrap">
          {services.map((service, i) => (
            <div key={i} className="flex items-center gap-5 text-sm text-gray-700">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                style={{
                  background: service.bg,
                  animation: `float 3s ease-in-out ${i * 0.5}s infinite`,
                }}
              >
                {service.icon}
              </div>
              {service.label}
            </div>
          ))}
        </div>
                
            </div>
        </section>
    )
}

export default Hero