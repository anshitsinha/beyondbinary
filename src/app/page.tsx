import Container from "@/components/container";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCategories from "@/components/home/top-categories";

import { MainNav } from "@/components/main-nav";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Container className="bg-background">
        <MainNav className="fixed w-screen top-0 left-0" />

        <main className=" mt-16 ">
          <div>
            <Hero />
          </div>
          <div className="flex flex-col items-start justify-evenly md:flex-row">
            <div className="w-full">
              <LatestPosts />
            </div>
            {/* <div className="h-screen w-full pl-1">
              <div className="w-full">
                <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
                <TopCategories />
              </div>
              <div className="mt-10 sticky top-0">
                <h1 className="font-bold mb-4">POPULAR POSTS</h1>
                <PopularPosts />
              </div>
            </div> */}
          </div>
        </main>
      </Container>
    </div>
  );
}
