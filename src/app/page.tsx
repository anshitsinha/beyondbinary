import Container from "@/components/container";
import LatestPosts from "@/components/home/latestPosts";
import PopularPosts from "@/components/home/popularPosts";
// import PopularPosts from "@/components/home/popular-posts";
import TopCatogories from "@/components/home/topCategories";
import { MainNav } from "@/components/mainNav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
        <div>
          <LatestPosts />
        </div>
        <div className="h-screen">
          <div>
            <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
            <TopCatogories />
          </div>
          <div className="mt-10 sticky top-0">
            <h1 className="font-bold mb-4">POPULAR POSTS</h1>
            <PopularPosts/>
          </div>
        </div>
      </main>
    </Container>
  );
}
