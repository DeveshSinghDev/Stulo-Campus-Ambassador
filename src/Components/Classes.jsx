function Classes() {
  const images = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  ];

  const rotations = [
    "-rotate-3",
    "rotate-2",
    "-rotate-2",
    "rotate-3",
    "-rotate-1",
    "rotate-2",
  ];

  return (
    <div className="bg-white py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-700">
          The Classes, Catchups, & Gupshup
        </h1>

        <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
          Podcasts, awards, goodies, catch-ups and unforgettable moments
          from our Stulo Ambassador Program.
        </p>
      </div>

      {/* Images */}
      <div className="mt-16 overflow-hidden">
        <div className="flex items-center gap-15 -space-x-4 gallery-animation w-max">

         {[...images, ...images].map((img, index) => (
  <img
    key={index}
    src={img}
    alt=""
    className={`
      w-[260px]
      h-[220px]
      object-cover
      rounded-3xl
      shadow-lg
      flex-shrink-0
      -mr-8

      ${index % 5 === 0 ? "-rotate-6 mt-6" : ""}
      ${index % 5 === 1 ? "rotate-3 -mt-4" : ""}
      ${index % 5 === 2 ? "-rotate-3 mt-3" : ""}
      ${index % 5 === 3 ? "rotate-5 -mt-5" : ""}
      ${index % 5 === 4 ? "-rotate-2 mt-4" : ""}

      hover:rotate-0
      hover:scale-105
      transition-all
      duration-500
    `}
  />
))}
        </div>
      </div>

    </div>
  );
}

export default Classes;