// components/LeadershipTeam.js
import Image from 'next/image';

export default function LeadershipTeam() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h5 className="text-purple-800">// OUR TEAM</h5>
        <h2 className="text-3xl font-bold mb-2">Our Leadership Team</h2>
        <p className="text-2xl mb-6">
          We help businesses elevate their value through custom software development, product design, QA and consultancy services.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          <div className="text-center">
            <Image src="/images/member1.jpg" alt="David Ferry" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">David Ferry</h4>
            <span>Co-Founder of Company</span>
          </div>
          <div className="text-center">
            <Image src="/images/member2.jpg" alt="Christina Torres" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">Christina Torres</h4>
            <span>Co-Founder of Company</span>
          </div>
          <div className="text-center">
            <Image src="/images/member3.jpg" alt="Amalia Bruno" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">Amalia Bruno</h4>
            <span>CTO of Company</span>
          </div>
          <div className="text-center">
            <Image src="/images/member4.jpg" alt="David Ferry" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">David Ferry</h4>
            <span>Co-Founder of Company</span>
          </div>
          <div className="text-center">
            <Image src="/images/member5.jpg" alt="Marry Tonheim" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">Marry Tonheim</h4>
            <span>Chief Marketing Officer</span>
          </div>
          <div className="text-center">
            <Image src="/images/member6.jpg" alt="Anna Richmond" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">Anna Richmond</h4>
            <span>President & CEO</span>
          </div>
          <div className="text-center">
            <Image src="/images/member7.jpg" alt="Andrew Kinzer" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">Andrew Kinzer</h4>
            <span>Chief Information Officer</span>
          </div>
          <div className="text-center">
            <Image src="/images/member8.jpg" alt="Katie Doyle" width={300} height={300} className="mx-auto" />
            <h4 className="text-xl font-semibold">Katie Doyle</h4>
            <span>Chief Strategy Officer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
