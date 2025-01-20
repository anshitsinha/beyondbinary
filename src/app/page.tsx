import Container from "@/components/container";
import LatestPosts from "@/components/home/latest-posts";
import PopularPosts from "@/components/home/popular-posts";
import TopCatogories from "@/components/home/top-categories";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <Container className="bg-background">
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div className="pr-1">
          <LatestPosts />
        </div>
        <div className="h-screen pl-1">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts />
          </div>
        </div>
      </main>
    </Container> 
    </div>
   
  );
}
