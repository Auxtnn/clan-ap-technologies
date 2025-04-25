import Image from "next/image";

const ServicesPartnerLogos = () => {
  const partnersRow1 = [
    { name: "Analyst", path: "/images/partners/analyst.png" },
    { name: "Joules", path: "/images/partners/joules.png" },
    { name: "Scaura", path: "/images/partners/scaura.jpg" },
    { name: "Bittewallet", path: "/images/partners/bittewallet.jpg" },
    { name: "Cinelytic", path: "/images/partners/cinelytic.png" },
  ];

  const partnersRow2 = [
    { name: "Dashy", path: "/images/partners/dashy.jpg" },
    { name: "Flatirons", path: "/images/partners/flatirons.png" },
    { name: "Uprise", path: "/images/partners/uprise.png" },
    { name: "Wholesome", path: "/images/partners/wholesome.jpg" },
    { name: "Yayloh", path: "/images/partners/yayloh.jpg" },
  ];

  const LogoItem = ({ partner }) => (
    <div className="w-24 h-12 relative flex items-center justify-center">
      <Image
        src={partner.path}
        alt={`${partner.name} logo`}
        width={96}
        height={48}
        className="object-contain"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  );

  return (
    <div className="pt-6 mt-6">
      <p className="text-center text-gray-300 text-sm mb-6">
        Trusted by innovative companies worldwide
      </p>
      <div className="flex flex-col space-y-8 lg:w-11/12 mx-auto">
        {/* First row */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 px-4">
          {partnersRow1.map((partner) => (
            <LogoItem key={partner.name} partner={partner} />
          ))}
        </div>

        {/* Second row */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 px-4">
          {partnersRow2.map((partner) => (
            <LogoItem key={partner.name} partner={partner} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPartnerLogos;
