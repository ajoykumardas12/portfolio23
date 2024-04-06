import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

const DevFeature = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();

  const dev = searchParams.get("dev") === "true";

  if (!dev) return;

  return children;
};

export default DevFeature;
