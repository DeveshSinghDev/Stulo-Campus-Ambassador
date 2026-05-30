import img11 from "../assets/11.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

function Perks() {
  return (
    <div className="bg-[#eef3f8] py-12 px-4 md:px-6">

      <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-800">
        Perks & Incentives
      </h1>

      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-6 gap-4">

        {/* Card 1 */}
        <div className="md:col-span-2 bg-[#f6e8aa] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-2xl font-bold text-gray-800">
            Exclusive Merchandise
          </h2>

          <p className="mt-2 text-gray-700">
            Earn Stulo goodies and branded merchandise.
          </p>

          <img
            src={img11}
            alt=""
            className="absolute top-8 left-25 w-60000"
          />
        </div>

        {/* Card 2 */}
        <div className="md:col-span-2 bg-[#cfe4ff] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-2xl font-bold text-gray-800">
            Networking
          </h2>

          <p className="mt-2 text-gray-700">
            Connect with students and industry leaders.
          </p>

          <img
            src={img3}
            alt=""
            className="absolute top-15 left-30 w-70"
          />
        </div>

        {/* Card 3 */}
        <div className="md:col-span-2 bg-[#ffd6e5] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-2xl font-bold text-gray-800">
            Certificate of Excellence
          </h2>

          <p className="mt-2 text-gray-700">
            Receive an official certificate after completion.
          </p>

          <img
            src={img5}
            alt=""
            className="absolute bottom-0 right-0 w-60"
          />
        </div>

        {/* Card 4 */}
        <div className="md:col-span-3 bg-[#dcd3ff] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-3xl font-bold text-gray-800">
            Letter of Recommendation
          </h2>

          <p className="mt-2 text-gray-700">
            Outstanding ambassadors receive LORs.
          </p>

          <img
            src={img6}
            alt=""
            className="absolute bottom-0 left-70 w-80"
          />
        </div>

        {/* Card 5 */}
        <div className="md:col-span-3 bg-[#d4f3dc] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-3xl font-bold text-gray-800">
            Internship Opportunities
          </h2>

          <p className="mt-2 text-gray-700">
            Top performers get internship opportunities.
          </p>

          <img
            src={img2}
            alt=""
            className="absolute bottom-0 right-0 w-70"
          />
        </div>

        {/* Card 6 */}
        <div className="md:col-span-2 bg-[#ffe1c9] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-2xl font-bold text-gray-800">
            One-to-One Mentorship
          </h2>

          <p className="mt-2 text-gray-700">
            Learn directly from experienced mentors.
          </p>

          <img
            src={img3}
            alt=""
            className="absolute top-15 left-30 w-70"
          />
        </div>

        {/* Card 7 */}
        <div className="md:col-span-2 bg-[#ffd6e5] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-2xl font-bold text-gray-800">
            Goodies & Rewards
          </h2>

          <p className="mt-2 text-gray-700">
            Earn rewards for completing activities.
          </p>

          <img
            src={img4}
            alt=""
            className="absolute top-20 left-40 w-65 opacity-80"
          />
        </div>

        {/* Card 8 */}
        <div className="md:col-span-2 bg-[#cfe4ff] rounded-3xl p-5 relative overflow-hidden min-h-[220px]">
          <h2 className="text-2xl font-bold text-gray-800">
            Leadership Experience
          </h2>

          <p className="mt-2 text-gray-700">
            Build communication and leadership skills.
          </p>

          <img
            src={img2}
            alt=""
            className="absolute bottom-0 right-0 w-65"
          />
        </div>

      </div>
    </div>
  );
}

export default Perks;