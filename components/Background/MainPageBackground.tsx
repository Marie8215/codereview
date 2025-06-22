export const MainPageBackground = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen z-[-1] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/stars-background-main.svg')",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    />
  );
};

export const DefaultPageBackground = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen z-[-1] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/stars-background-main.svg')",
        backgroundPosition: "center -240px",
        backgroundSize: "100% auto",
      }}
    />
  );
};
