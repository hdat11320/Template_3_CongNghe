// components/ClientTestimonials.js
export default function ClientTestimonials() {
    return (
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h5 className="text-purple-800"> OUR CLIENTS</h5>
          <h2 className="text-3xl font-bold mb-2">We are Trusted 15+ Countries Worldwide</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold">SoftTech,</h3>
              <p className="text-gray-500 mb-4">Manager of Company</p>
              <p>“Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!”</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold">Moonkle LTD,</h3>
              <p className="text-gray-500 mb-4">Client of Company</p>
              <p>“Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!”</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  