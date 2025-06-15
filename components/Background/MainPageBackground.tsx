export const MainPageBackground = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen z-[-1] bg-no-repeat"
      style={{
        backgroundImage: "url('/images/stars-background-main.svg')",
        backgroundPosition: "top center",
        backgroundSize: "100% auto",
      }}
    />
  );
};
