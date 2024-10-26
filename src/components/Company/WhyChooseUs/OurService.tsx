// components/OurService.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faDesktop, faChartLine, faBullhorn, faMobileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function OurService() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
      <h5 className="text-purple-700 text-sm font-semibold mb-4">// OUR SERVICE</h5>
        <h2 className="text-3xl font-bold mb-8">We Offer a Wide
        Variety of IT Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-icon-box1.jpg)' }} />
            <div className="relative p-8 bg-white bg-opacity-75 group-hover:translate-x-full transition-transform duration-300">
              <FontAwesomeIcon icon={faCogs} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p>We carry more than just good coding skills. Our experience makes us stand out from other web development.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-icon-box1.jpg)' }} />
            <div className="relative p-8 bg-white bg-opacity-75 group-hover:translate-x-full transition-transform duration-300">
              <FontAwesomeIcon icon={faDesktop} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile Development</h3>
              <p>Create complex enterprise software, ensure reliable software integration, modernise your legacy system.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-icon-box1.jpg)' }} />
            <div className="relative p-8 bg-white bg-opacity-75 group-hover:translate-x-full transition-transform duration-300">
              <FontAwesomeIcon icon={faChartLine} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p>Build the product you need on time with an experienced team that uses a clear and effective design.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-icon-box1.jpg)' }} />
            <div className="relative p-8 bg-white bg-opacity-75 group-hover:translate-x-full transition-transform duration-300">
              <FontAwesomeIcon icon={faBullhorn} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">QA & Testing</h3>
              <p>Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-icon-box1.jpg)' }} />
            <div className="relative p-8 bg-white bg-opacity-75 group-hover:translate-x-full transition-transform duration-300">
              <FontAwesomeIcon icon={faMobileAlt} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">IT Counsultancy</h3>
              <p>Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app.</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-icon-box1.jpg)' }} />
            <div className="relative p-8 bg-white bg-opacity-75 group-hover:translate-x-full transition-transform duration-300">
              <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
              <p>Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
