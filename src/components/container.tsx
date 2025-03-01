import { cn } from "@/lib/utils";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full xl:w-[90%] px-3",
        className
      )}
    >
      {children}
    </div>
  );
}