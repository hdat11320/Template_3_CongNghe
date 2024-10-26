import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
export default function AboutCompany() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Main Section: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/images/man1.png"
              alt="Man thinking"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          {/* Right Section: Text and Info */}
          <div className="lg:w-1/2 w-full">
            {/* About Company Text */}
            <h5 className="text-purple-700 text-sm font-semibold mb-4"> ABOUT COMPANY</h5>
            <h2 className="text-4xl font-bold mb-6">Your Partner for Software Innovation</h2>
            <p className="text-gray-600 mb-8">
              Engitech is the partner of choice for many of the worlds leading enterprises, SMEs, and technology challengers.
              We help businesses elevate their value through custom software development, product design, QA, and consultancy services.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="text-purple-700">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Experience</h4>
                  <p className="text-gray-500">Our great team of more than 1400 software experts.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-purple-700">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Quick Support</h4>
                  <p className="text-gray-500">We’ll help you test bold new ideas while sharing your.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Stats */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12 mt-16">
          <div className="grid grid-cols-4 gap-8 text-center text-white">
            <div>
              <h3 className="text-5xl font-bold text-white">329+</h3>
              <p className="mt-2"><FontAwesomeIcon icon={faCircle} size="2xs" />  Active Clients</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white">849+</h3>
              <p className="mt-2"><FontAwesomeIcon icon={faCircle} size="2xs" />  Projects Done</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white">24+</h3>
              <p className="mt-2"><FontAwesomeIcon icon={faCircle} size="2xs" />  Team Advisors</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-white">9+</h3>
              <p className="mt-2"><FontAwesomeIcon icon={faCircle} size="2xs" />  Glorious Years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
