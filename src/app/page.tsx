import Container from "@/components/container";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCategories from "@/components/home/top-categories";

import { MainNav } from "@/components/main-nav";
import Hero from "@/components/home/hero";
import { EB_Garamond, Instrument_Serif } from "next/font/google";
import { Xanh_Mono } from "next/font/google";

const summary = EB_Garamond({ subsets: ["latin"] });
const topic = Xanh_Mono({ subsets: ["latin"], weight: "400" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <MainNav />

      <Container>
        <main>
          <div className="mt-4 mb-8">
            <Hero />
          </div>
          <div className="flex flex-col  items-start justify-evenly md:flex-row">
            <div className=" md:w-2/3">
              <LatestPosts />
            </div>
            <div className="md:h-screen md:w-1/3 w-full md:pl-8 mt-12 md:mt-0">
              <div className="md:sticky md:top-8">
                <div
                  className={`${topic.className} flex border-b border-border`}
                >
                  <div className="mb-1">
                    <span className="-mr-1">/</span> Topics
                  </div>
                </div>
                <TopCategories />
              </div>
              {/* <div className="mt-10 sticky top-0">
                <h1 className="font-bold mb-4">POPULAR POSTS</h1>
                <PopularPosts />
              </div> */}
            </div>
          </div>
        </main>
      </Container>
    </>
  );
}

