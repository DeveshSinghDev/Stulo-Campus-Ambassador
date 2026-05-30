import P1 from "../assets/P1.png";
import R2 from "../assets/R2.png";
import R3 from "../assets/R3.png";
import R4 from "../assets/R4.png";


function ApplicationProcess() {
  const steps = [
    {
      number: "1",
      title: "Registration",
      desc: "Fill out the Stulo Ambassador application form.",
      image:
        P1, 
    },
    {
      number: "2",
      title: "Profile Shortlisting",
      desc: "Our team reviews applications and selects candidates.",
      image:
        R2,
    },
    {
      number: "3",
      title: "Interview",
      desc: "A short online interaction with the Stulo team.",
      image:
        R3,
    },
    {
      number: "4",
      title: "Welcome to Stulo",
      desc: "Congratulations! You're now a Campus Ambassador.",
      image:
        R4,
    },
  ];

  return (
    <div className="bg-[#f5f7fa] py-12 md:py-20 px-4">

      <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-700">
        Application Process
      </h1>

      <div className="max-w-6xl mx-auto mt-10 md:mt-14 relative">

        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-[-38px] top-[90px] bottom-[90px] border-l-2 border-dashed border-gray-300"></div>

        {steps.map((step, index) => (
          <div key={index} className="relative">

            {/* Black Dot */}
            <div className="hidden lg:block absolute -left-[45px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#333] rounded-full z-10"></div>

            {/* Card */}
            <div className="flex flex-row bg-white rounded-3xl shadow-md overflow-hidden mb-6 hover:shadow-xl transition-all duration-300">

              {/* Number */}
              <div className="bg-yellow-400 w-[60px] sm:w-[70px] md:w-[90px] lg:w-[100px] h-[140px] sm:h-[160px] lg:h-[180px] flex items-center justify-center flex-shrink-0">

                <h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333]"
                  style={{
                    textShadow: `
                      -2px -2px 0 white,
                       2px -2px 0 white,
                      -2px  2px 0 white,
                       2px  2px 0 white
                    `,
                  }}
                >
                  {step.number}
                </h1>

              </div>

              {/* Text */}
              <div className="flex-1 px-3 sm:px-5 py-4 flex flex-col justify-center min-w-0">

                <h2 className="text-sm sm:text-lg md:text-2xl font-bold text-gray-700">
                  {step.title}
                </h2>

                <p className="mt-1 text-[11px] sm:text-sm md:text-base text-gray-500">
                  {step.desc}
                </p>

              </div>

              {/* Image */}
              <div className="w-[140px] sm:w-[180px] md:w-[280px] lg:w-[320px] h-[140px] sm:h-[160px] lg:h-[180px] overflow-hidden flex-shrink-0">

                <img
                  src={step.image}
                  alt=""
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                />

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ApplicationProcess;