import aboutus01 from '../assets/aboutus01.jpg'
import aboutus02 from '../assets/aboutus02.jpg'
function Aboutus() {
    return (
        <section className="bg-gray-100 py-10 px-6" id='about'>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center ">
                {/* main div */}

                <div className="bg-gray-100 rounded-3xl p-8 md:p-14">
                    {/* left div */}
                    <p className="text-sm font-semibold text-gray-500 mb-4">About Us</p>
                    
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">Empowering Your Digital Journey with Innovation</h1>

                    <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">We transform your ideas into flawless digital experiences. With expertise across software, web, and white-label development, we deliver cutting-edge solutions that drive growth and set you apart from the competition.</p>
                    <div className="flex flex-wrap gap-6 mt-14">
                        <button className="bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition">Case studies</button>
                        <button className="border border-blue-700 text-blue-700 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:text-white transition">Free Consultation</button>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 h-[500px] animate-pulse ">
                    {/* right div */}
                    <div className='flex items-center'>
                        <img
                            src={aboutus01}
                            alt="Aboutpic"
                            className="w-full h-80 object-cover rounded-3xl"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <img
                            src={aboutus02}
                            alt="Aboutpic"
                            className="w-full h-80 object-cover rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Aboutus