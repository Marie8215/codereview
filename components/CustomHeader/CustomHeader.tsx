import { Header } from "../Header/Header";

interface CustomHeaderProps {
  rightSlot?: React.ReactNode;
}

export const CustomHeader = ({ rightSlot }: CustomHeaderProps) => (
  <div className="flex justify-center w-full">
    <div className="relative flex items-center">
      <Header />
      {rightSlot && (
        <div className="hidden md:block absolute bottom-0 left-full ml-[10px]">
          {rightSlot}
        </div>
      )}
    </div>
  </div>
);