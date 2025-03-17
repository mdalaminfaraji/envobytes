import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-4 pb-20 text-white relative">
      <div
        className="max-w-[1902px] mx-auto px-4 md:px-6 h-[828px] relative"
        style={{
          backgroundImage: "url('/Envobyte/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col items-center text-center py-12 h-[1121px]"
          style={{
            backgroundImage: "url('/Envobyte/hero-bg-1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-3">
            DIGITAL SERVICES
          </h1>
          <p className="text-xl uppercase tracking-wider mb-10">
            BUILDING YOUR EMPIRE DIGITALLY
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <button className="px-8 py-3 rounded-md bg-[#FF693B] text-white hover:bg-orange-600 transition-colors font-medium uppercase">
              See Pricing
            </button>
            <button className="px-8 py-3 rounded-md border border-white text-white hover:bg-white/10 transition-colors font-medium uppercase">
              Book an Appointment
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 w-full max-w-[1256px] pl-18">
            <div className="flex items-center gap-3 border-r-1">
              <div className="p-3 rounded-lg w-12 h-12 border-2">
                <Image
                  src="/Envobyte/global-edit.png"
                  alt="Stats Icon 1"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-start">2k+</p>
                <p className="text-sm opacity-80">Websites build</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-r-1">
              <div className="p-3 rounded-lg w-12 h-12 border-2">
                <Image
                  src="/Envobyte/like.png"
                  alt="Stats Icon 1"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-start">97%</p>
                <p className="text-sm opacity-80">Client satisfaction</p>
              </div>
            </div>
            <div className="flex items-center gap-3 border-r-1">
              <div className="p-3 rounded-lg w-12 h-12 border-2">
                <Image
                  src="/Envobyte/people.png"
                  alt="Stats Icon 1"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-start">25+</p>
                <p className="text-sm opacity-80">Team members</p>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <div className="p-3 rounded-lg w-12 h-12 border-2">
                <Image
                  src="/Envobyte/profile-circle.png"
                  alt="Stats Icon 1"
                  width={24}
                  height={24}
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-start">500+</p>
                <p className="text-sm opacity-80">Amazing clients</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center absolute top-5/6 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
          <div className="relative w-full max-w-5xl rounded-lg overflow-hidden">
            <Image
              src="/Envobyte/image.png"
              alt="Envobyte Team"
              width={1000}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
