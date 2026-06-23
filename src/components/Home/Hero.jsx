import react, {useEffect, useState} from 'react'


const services = [
  { icon: "💻", label: "Web Development", bg: "#b4cbddd3" },
  { icon: "☁️", label: "Cloud & DevOps", bg: "#b4cbddd3" },
  { icon: "🎨", label: "UI/UX Design", bg: "#b4cbddd3" },
];

function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

    return (
      <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        .fade-up-1 { animation: fadeUp 0.6s ease 0.1s both; }
        
      `}</style>

        <section className='min-h-screen flex items-center justify-center px-6 py-16 
        bg-gray-200' id='home'>
           
          
            <div className=' max-w-3xl w-full mx-auto text-center'>
               
                <p className='fade-up-1 text-sm uppercase tracking-widest text-gray-900 mb-3'> Complete Solutions, From Start to Finish</p>
                <h1 className='fade-up-1 text-4xl md:text-6xl font-bold text-blue-700 leading-tight mb-6 '>End-to-End Development Services
                </h1>
                <p className='fade-up-1 text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto mb-10'>We manage every phase of your software or web development, ensuring a seamless journey from concept to launch.</p>
                {/* buttons */}
                 <div className="fade-up-1 flex gap-4 justify-center flex-wrap mb-12">
          <button className="px-7 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-600 transition-all hover:scale-105">
            Get Started →
          </button>
          <button className="px-7 py-3 border border-gray-500 text-black rounded-lg font-medium hover:bg-blue-700 hover:text-white transition-all active:scale-95">
            View Our Work
          </button>
         
        </div>
         <div className="fade-up-5 flex gap-6 justify-center flex-wrap">
          {services.map((service, i) => (
            <div key={i} className="flex items-center gap-5 text-sm text-gray-700">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                style={{
                  background: service.bg,
                  
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
        </>
    )
}

export default Hero