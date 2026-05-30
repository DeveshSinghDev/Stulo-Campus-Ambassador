function Perks() {
  return (
    <div className="bg-[#eef3f8] py-10 md:py-16 px-4 md:px-6">

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800">
        Perks & Incentives
      </h1>

      {/* Grid */}
      <div className="mt-8 md:mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">

        {/* Top Row */}
        <div className="md:col-span-2 bg-yellow-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">🎁</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-bold">
            Exclusive Merchandise
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Earn Stulo goodies and branded merchandise.
          </p>
        </div>

        <div className="md:col-span-2 bg-blue-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">🤝</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-bold">
            Networking
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Connect with students and industry leaders.
          </p>
        </div>

        <div className="md:col-span-2 bg-pink-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">🏆</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-bold">
            Certificate of Excellence
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Receive an official certificate after completion.
          </p>
        </div>

        {/* Middle Row */}
        <div className="md:col-span-3 bg-purple-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">📄</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-3xl font-bold">
            Letter of Recommendation
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Outstanding ambassadors receive LORs.
          </p>
        </div>

        <div className="md:col-span-3 bg-green-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">💼</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-3xl font-bold">
            Internship Opportunities
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Top performers get internship opportunities.
          </p>
        </div>

        {/* Bottom Row */}
        <div className="md:col-span-2 bg-orange-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">🎯</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-bold">
            One-to-One Mentorship
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Learn directly from experienced mentors.
          </p>
        </div>

        <div className="md:col-span-2 bg-rose-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">🎉</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-bold">
            Goodies & Rewards
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Earn rewards for completing activities.
          </p>
        </div>

        <div className="md:col-span-2 bg-cyan-100 rounded-2xl md:rounded-3xl p-4 md:p-6 min-h-[180px] md:min-h-[220px] hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl">🚀</div>

          <h2 className="mt-3 md:mt-5 text-xl md:text-2xl font-bold">
            Leadership Experience
          </h2>

          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-600">
            Build communication and leadership skills.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Perks;