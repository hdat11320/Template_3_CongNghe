// components/TechnologyIndex.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faCloud, faDatabase, faRobot, faMicrochip } from '@fortawesome/free-solid-svg-icons';

export default function TechnologyIndex() {
  return (
    <div className="relative bg-cover bg-center py-24" style={{ backgroundImage: 'url(/images/background/bg-tech-home1.jpg)' }}>
      <div className="container mx-auto text-center text-white">
        <h6 className="text-white">TECHNOLOGY INDEX</h6>
        <h2 className="text-4xl font-bold mb-2">We Deliver Solution with</h2>
        <h3 className="text-2xl mb-8 text-white">the Goal of Trusting Relationships</h3>
        
        <div className="flex justify-center space-x-4">
          {/* Box 1 */}
          <div className="relative group bg-opacity-25 border-white transition-all duration-300 p-6 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faLaptopCode} className="text-2xl mb-2" />
            <p className="text-sm">Web Development</p>
          </div>
          
          {/* Box 2 */}
          <div className="relative group bg-opacity-25 border-white transition-all duration-300 p-6 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faMobileAlt} className="text-2xl mb-2" />
            <p className="text-sm">Mobile Apps</p>
          </div>
          
          {/* Box 3 */}
          <div className="relative group bg-opacity-25 border-white transition-all duration-300 p-6 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faCloud} className="text-2xl mb-2" />
            <p className="text-sm">Cloud Services</p>
          </div>
          
          {/* Box 4 */}
          <div className="relative group bg-opacity-25 border-white transition-all duration-300 p-6 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faDatabase} className="text-2xl mb-2" />
            <p className="text-sm">Database</p>
          </div>
          
          {/* Box 5 */}
          <div className="relative group bg-opacity-25 border-white transition-all duration-300 p-6 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faRobot} className="text-2xl mb-2" />
            <p className="text-sm">AI & Robotics</p>
          </div>
          
          {/* Box 6 */}
          <div className="relative group bg-opacity-25 border-white transition-all duration-300 p-6 w-40 h-40 flex flex-col items-center justify-center hover:bg-blue-500 ">
            <FontAwesomeIcon icon={faMicrochip} className="text-2xl mb-2" />
            <p className="text-sm">IoT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
