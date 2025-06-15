const Logo = () => {
  return (
    <span
      className="font-semibold text-[22px] leading-[22px] tracking-[-1px]"
      style={{
        background: "linear-gradient(85.18deg, #2093FE 0.83%, rgba(194, 23, 254, 0.9) 91.48%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text"
      }}
    >
      {"<"}<span className="font-normal">code</span>{"review/>"}
    </span>
  );
};

export default Logo;