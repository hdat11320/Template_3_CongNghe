// components/RecentNews.js
import Image from 'next/image';

export default function RecentNews() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h5 className="text-purple-800 font-bold mb-2"> LATEST CASE STUDIES</h5>
            <h3 className="text-2xl">Read Our Latest News</h3>
          </div>
          <button className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-purple-600">
          All News
        </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative bg-white overflow-hidden">
            <Image src="/images/blog1-601x520.jpg" alt="Article Image 1" layout="responsive" width={500} height={300} className="" />
            <span className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-sm p-2 hover:bg-purple-600">Design</span>
            <p className="text-indigo-700 mb-2">_November 21, 2019 by Tom Black</p>
            <h4 className="text-xl font-semibold mb-2">Plan Your Project with Your Software</h4>
            <div className="text-primary mb-4">
              <span className="mr-2">Design</span>
              <span>Development</span>
            </div>
            <a href="#" className="text-blue-500 underline">Learn More</a>
          </div>
          
          <div className="relative bg-white overflow-hidden">
            <Image src="/images/blog3-601x520.jpg" alt="Article Image 2" layout="responsive" width={500} height={300} className="" />
            <span className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-sm p-2 hover:bg-purple-600">Design</span>
            <p className="text-indigo-700 mb-2">_November 21, 2019 by Tom Black</p>
            <h4 className="text-xl font-semibold mb-2">You have a Great Business Idea?</h4>
            <div className="text-primary mb-4">
              <span className="mr-2">Design</span>
              <span>Development</span>
            </div>
            <a href="#" className="text-blue-500 underline">Learn More</a>
          </div>

          <div className="relative bg-white overflow-hidden">
            <Image src="/images/blog4-601x520.jpg" alt="Article Image 3" layout="responsive" width={500} height={300} className="" />
            <span className="absolute bottom-0 left-0 right-0 bg-blue-600 text-white text-sm p-2 hover:bg-purple-600">Development</span>
            <p className="text-indigo-700 mb-2">_September 24, 2019 by Tom Black</p>
            <h4 className="text-xl font-semibold mb-2">Building Data Analytics Software</h4>
            <div className="text-primary mb-4">
              <span className="mr-2">Development</span>
            </div>
            <a href="#" className="text-blue-500 underline">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}
