import { DotGothic16, Instrument_Serif } from "next/font/google";

// Initialize fonts at the module scope
const title = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
});

const binary = DotGothic16({
  subsets: ["latin"],
  weight: "400",
});

export default function Hero() {
  return (
    <>
      <h1 className="text-6xl text-primary md:text-9xl ">
        {" "}
        <span className="">BEYOND </span>{" "}
        <span className={`${binary.className} text-[3.3rem] md:text-[7.5rem] tracking-wide md:tracki `}>
          B<span className="md:-mx-4 -mx-2">I</span>NARY
        </span>{" "}
        {/* <span className=" ">Binary</span> */}
      </h1>
      <p className="text-lg md:text-3xl md:w-3/5 my-4">
        Tech is rewriting our realities, blending time and space in ways that
        leave us questioning everything. How does it change the way we think?
        Feel? Live? I&apos;m here to unpack those shifts, challenge the obvious,
        and explore the grey areas where people outside tech don&apos;t look.
      </p>
    </>
  );
}
