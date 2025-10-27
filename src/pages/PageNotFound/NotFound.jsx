import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Background and SVG assets based on device
  const bgImage = isMobile
    ? "/images/pnf-mob.png"
    : "/images/notFoundLandscape.png";

  const svg404 = isMobile
    ? "/assets/404-mobile.svg"
    : "/assets/404-desktop.svg";

  const svgNotFound = isMobile
    ? "/assets/notfound-mobile.svg"
    : "/assets/notfound-desktop.svg";

  return (
    <main
      className="relative min-h-screen flex md:items-start md:justify-start justify-center items-center px-10 md:py-5 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 py-6 max-w-3xl">
        {/* 404 SVG */}
        <img
          src={svg404}
          alt="404 Illustration"
          className="w-[280px] md:w-[400px] mb-4"
          loading="lazy"
        />

        {/* Not Found SVG */}
        <img
          src={svgNotFound}
          alt="Not Found Text"
          className="w-[200px] md:w-[300px] mb-6"
          loading="lazy"
        />

        {/* Text */}
        <p className="uppercase text-base md:text-lg font-bold tracking-wide text-white" style={{ fontFamily: 'var(--font-inter)' }}>
          Oops! This page wandered off the workout plan.
        </p>

        <p className="mt-4 md:text-sm text-xs leading-relaxed max-w-xl text-white" style={{ fontFamily: 'var(--font-inter)' }}>
          Looks like the page you’re looking for doesn’t exist. But don’t worry — your fitness journey doesn’t stop here. Fuel your goals with{" "}
          <span className="text-red-500 font-semibold">CoreX</span> supplements.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 text-base">
          {/* Filled → bordered on hover */}
          <Link
            to="/"
            className="bg-[#F7FAFF] text-[#010409] font-medium uppercase text-sm md:text-base px-10 py-3 rounded-xl border border-[#F7FAFF] transition-all duration-300 hover:bg-transparent hover:text-white shadow-md"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            GO TO HOME PAGE
          </Link>

          {/* Bordered → filled on hover */}
          <Link
            to="/products"
            className="border border-[#F7FAFF] text-white font-medium uppercase text-sm md:text-base px-10 py-3 rounded-xl transition-all duration-300 hover:bg-[#F7FAFF] hover:text-[#010409] shadow-md"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </section>
    </main>
  );
}
