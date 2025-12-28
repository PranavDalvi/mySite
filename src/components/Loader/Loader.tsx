import { Loader2 } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-svh">
      <Loader2 className="w-8 h-8 text-[#EBF3FA] animate-spin" />
      <span className="ml-2">Loading</span>
    </div>
  );
};

export default Loader;
