import React from 'react';

const ITServices = () => {
  return (
    <div id="content" className="site-content">
      <div className="page-header flex-middle bg-gray-100 py-10">
        <div className="container mx-auto">
          <div className="inner flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-5xl font-bold text-white">IT Services</h1>
            <ul id="breadcrumbs" className="breadcrumbs flex space-x-2 mt-4 sm:mt-0">
              <li>
                <a href="/" className="text-blue-600 hover:underline">Home</a>
              </li>
              <li className="active text-gray-600">IT Services</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="service-page py-16">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between mb-12">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-3xl font-semibold">
                We Offer a Wide <br /> Variety of IT Services
              </h2>
            </div>
            <div className="text-right">
              <a href="/" className="btn btn-primary">All Services</a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              { title: 'Web Development', description: 'We carry more than just good coding skills. Our experience makes us stand out from other web development.', icon: 'flaticon-code' },
              { title: 'Mobile Development', description: 'Create complex enterprise software, ensure reliable software integration, modernise your legacy system.', icon: 'flaticon-app' },
              { title: 'UI/UX Design', description: 'Build the product you need on time with an experienced team that uses a clear and effective design process.', icon: 'flaticon-monitor' },
              { title: 'QA & Testing', description: 'Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.', icon: 'flaticon-browser' },
              { title: 'IT Consultancy', description: 'Trust our top minds to eliminate workflow pain points, implement new tech, and consolidate app portfolios.', icon: 'flaticon-report-1' },
              { title: 'Dedicated Team', description: 'Over the past decade, our customers succeeded by leveraging Intellectsoft’s process of building, motivating.', icon: 'flaticon-best' }
            ].map((service, idx) => (
              <div key={idx} className="icon-box-s2 s1 pb-8">
                <div className="icon-main mb-4">
                  <span className={`text-4xl ${service.icon}`}></span>
                </div>
                <div className="content-box">
                  <h5 className="text-xl font-semibold">{service.title}</h5>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-pricing py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold">Flexible Pricing Plans</h2>
            <p>We help businesses elevate their value through custom software development, product design, QA and consultancy services.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              { title: 'Basic Plan', price: 129.99, features: ['Web Consulting', '24/7 System Monitoring', 'Machine and Deep Learning'], inactive: ['Data Quality Management', 'Security Management'], icon: 'flaticon-tablet' },
              { title: 'Economy Plan', price: 159.99, features: ['Web Consulting', '24/7 System Monitoring', 'Machine and Deep Learning', 'Data Quality Management'], inactive: ['Security Management'], icon: 'flaticon-report' },
              { title: 'Premium Plan', price: 189.99, features: ['Web Consulting', '24/7 System Monitoring', 'Machine and Deep Learning', 'Data Quality Management', 'Security Management'], inactive: [], icon: 'flaticon-ui' }
            ].map((plan, idx) => (
              <div key={idx} className="ot-pricing-table p-8 bg-white shadow-md rounded-lg">
                <div className="icon-main mb-4">
                  <span className={`text-4xl ${plan.icon}`}></span>
                </div>
                <h4 className="text-xl font-semibold mb-4">{plan.title}</h4>
                <h2 className="text-4xl font-bold mb-2">${plan.price}</h2>
                <span className="block text-gray-500 mb-4">Monthly Package</span>
                <ul className="mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="active text-gray-700 mb-2">{feature}</li>
                  ))}
                  {plan.inactive.map((inactive, index) => (
                    <li key={index} className="text-gray-400 mb-2">{inactive}</li>
                  ))}
                </ul>
                <a href="#" className="btn btn-primary">Choose Plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-consultation py-16 text-center bg-gray-100">
        <div className="container mx-auto">
          <p className="text-lg">Drop us a line! We are here to answer your questions 24/7</p>
          <h2 className="text-4xl font-semibold mb-6">NEED A CONSULTATION?</h2>
          <a href="/contact" className="btn btn-primary">Contact Us</a>
        </div>
      </section>

      <section className="service-clients py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">We are Trusted in 15+ Countries Worldwide</h2>
          <div className="owl-carousel owl-theme testimonial-inner">

            <div className="testimonial-item">
              <div className="t-head flex items-center justify-center mb-4">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCABaAFoDASIAAhEBAxEB/8QAGgABAAMBAQEAAAAAAAAAAAAAAAECBAYFA//EACkQAAICAgEDBAEEAwAAAAAAAAABAgMEEQUSITETMkFRFCIjQlJhgaH/xAAYAQEBAQEBAAAAAAAAAAAAAAAABAECA//EAB8RAQEAAgMAAwEBAAAAAAAAAAABAgMREiETIjEEQf/aAAwDAQACEQMRAD8A7MAhvQEleogANsAANk7IAFk9klCyYEgAAUJkQAAAAAz5ebTiRTtb2/EYruzZLbxGWye1oBnxMynMi3U3teYvyjQLLPKS8/gADGrJ7JKryWAo/IAAA+d90KK3ZN9l/wBMtPKU2z6Jp178NvsdTDKzmR55bcMb1t9Rby1FVrhqUknpyXgxc1X6qqyq31VuPTtfBgtSjZKMZdSTaT+zZxuTH9WJf3qs7Lfwyr45h9sUmO27Prkw4uTPEyI2w+PK+19HVU2wvqjZW9xkto5XNxpYmRKqXdeYv7Rq4bP/AB7fQtf7c32b/ixtw7ztFGu2eV0YAI3uFtlQAfkEy8kAZs+h34zjH3RfUl9nPyOpPLz+OnZY7MdJ9XujvXcp07JPrUP9Wi5Xvj+s9GNVl4Mo1xSyK3vf9jy5JptPs0dFxmHPGjOVmuqXwvgz8nxk7rPVx0nJ+6O9bf2d47ZMrOfD4r0l49YMbFnyMbZSubtgl0qXff8As82acZOMk009NP4Ol4nAsxOuy7SnJaUU96R8eW4qeRZ62Ml1v3R3rf8AkTbO3H+KMcbxy+vC5/5VDqse7a15/svs9M8nhuNtxJzuv0pyj0qKe9I9Ym2cdvHtAtoqi5wIa2ipchoCoAAAAAAAABKQExRIAAAAQ1sjRYAUBZlQA0WRIEJfZIAAAAf/2Q==" alt="Client" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h6 className="font-semibold">SoftTech</h6>
                  <span className="text-gray-500">Manager of Company</span>
                </div>
              </div>
              <p>Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless.</p>
            </div>
            <div className="testimonial-item">
              <div className="t-head flex items-center justify-center mb-4">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRre0N62gcStLfWB-2Fmfxk2oIZ3TuOeCqWvCPIVl1lRx8b8jTt" alt="Client" className="w-16 h-16 rounded-full" />
                <div className="ml-4">
                  <h6 className="font-semibold">Moonkle LTD</h6>
                  <span className="text-gray-500">Client of Company</span>
                </div>
              </div>
              <p>Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServices;
