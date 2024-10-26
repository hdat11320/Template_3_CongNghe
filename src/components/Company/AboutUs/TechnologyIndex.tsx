import Image from 'next/image';

const TechnologyIndex = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6">
      {/* Left Side - Textual Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <h5 className="text-purple-600 font-bold"> TECHNOLOGY INDEX</h5>
        <h1 className="text-4.5xl font-bold mb-4">Improve and Innovate with the Tech Trends</h1>
        <p className="text-lg text-gray-600 mb-6">
        We hire and build your own remote dedicated development teams tailored to your specific needs.
        </p>

        {/* Progress Bars */}
        <div className="mb-4">
          <p className="mb-1">Mobile Development</p>
          <div className="w-full bg-white border border-gray-300 h-4 mb-2 relative">
            <div className="bg-blue-500 h-4" style={{ width: '70%', position: 'absolute', top: '-10px' }}></div>
            <span className="absolute right-0 text-xs text-gray-700" style={{ transform: 'translateY(-150%)' }}>70%</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-1">Web Development</p>
          <div className="w-full bg-white border border-gray-300 h-4 mb-2 relative">
            <div className="bg-blue-500 h-4" style={{ width: '90%', position: 'absolute', top: '-10px' }}></div>
            <span className="absolute right-0 text-xs text-gray-700" style={{ transform: 'translateY(-150%)' }}>90%</span>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-1">UI/UX Design</p>
          <div className="w-full bg-white border border-gray-300 h-4 mb-2 relative">
            <div className="bg-blue-500 h-4" style={{ width: '60%', position: 'absolute', top: '-10px' }}></div>
            <span className="absolute right-0 text-xs text-gray-700" style={{ transform: 'translateY(-150%)' }}>60%</span>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image 
          src="/images/technology.jpg" // Đường dẫn đến hình ảnh
          alt="Technology Image"
          width={500} 
          height={300} 
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default TechnologyIndex;
