import aboutus01 from '../../assets/aboutus01.jpg'
function Navabout() {
  return (
    <div>
      <div className="bg-gray-200 px-6 py-8 md:px-14 md:py-10 ">
        <div className="border-l-2 py-7 px-4 border-gray-500">

          <p className="text-sm uppercase tracking-widest text-gray-600">OUR STORY</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About Us</h1>
        </div>
      </div>
      <div className="w-full h-56 md:h-96 overflow-hidden ">
        <img src={aboutus01} alt="img" className='w-full h-full object-fit md:px-12 px-6 my-12 ro' />
      </div>
      <div className="px-6 md:px-14 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-sm md:text-base leading-relaxed mb-6">
            We transform your ideas into flawless digital experiences. With expertise
            across software, web, and white-label development, we deliver cutting-edge
            solutions that drive growth and set you apart from the competition.
          </p>
          <button className="text-white text-sm font-semibold px-6 py-3 rounded-full transition hover:opacity-90 bg-blue-700 cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="flex flex-col justify-center">
          <p className='text-3xl font-bold'>30+</p>
          <p className="text-sm font-medium mt-1">Engineers Globally </p>
          <hr className='my-4 text-gray-400' />
          <p className='text-3xl font-bold'>70+</p>
          <p className='text-sm font-medium mt-1'>Years of Collective Experience</p>
        </div>
      </div>
      <div className="px-6 md:px-14 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-full h-64 md:h-80 overflow-hidden rounded-md">
          <img src={aboutus01} alt="img" className="w-full h-full object-git" />
        </div>
        <div >
          <h2 className="text-2xl font-bold mb-4 md:pt-20" >
            Our Mission &amp; Approach
          </h2>
          <p className="text-sm leading-relaxed mb-6 ">
            At Holiverse, we strive to be the go-to digital partner for businesses,
            helping them transform and grow with solutions tailored to their strategic
            goals. Guided by trust, integrity, and a.
          </p>
          <div className="flex flex-wrap gap-6 mb-6">
            <div className='flex items-center gap-2'>
              <span className="flex items-center justify-center rounded-full text-white bg-blue-700 px-2">✓ </span>
              <span className="text-sm font-medium" > Innovation</span>
              <span className="flex items-center justify-center rounded-full text-white bg-blue-700 px-2">✓ </span>
              <span className="text-sm font-medium" > Trust</span>
              <span className="flex items-center justify-center rounded-full text-white bg-blue-700 px-2">✓ </span>
              <span className="text-sm font-medium" > Growth</span>
            </div>
          </div>
          <hr />
          <button className="text-white text-sm font-semibold px-6 py-3 rounded-full transition hover:opacity-90 bg-blue-700 my-5">
            Collaborate Now
          </button>
        </div>
      </div>
      <div className="w-full h-1.5" >  </div>
    </div>
  )

}

export default Navabout