interface LogoProps {
  monochrome?: boolean;
}

const Logo = ({ monochrome = false }: LogoProps) => {
  const styles = monochrome ? {
    color: 'var(--color-neutral-600)'
  } : {
    background: "linear-gradient(85.18deg, #2093FE 0.83%, rgba(194, 23, 254, 0.9) 91.48%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text"
  };

  return (
    <span
      className="text-[22px] leading-[22px] tracking-[-1px] font-bold"
      style={styles}
    >
      {"<"}<span className="font-normal hidden md:inline">{"code"}</span>
      <span className="hidden md:inline">{"review/>"}</span>
      <span className="inline md:hidden">{"/>"}</span>
    </span>
  );
};

export default Logo;