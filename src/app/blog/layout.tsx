import Container from "@/components/container";
import { MainNav } from "@/components/main-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MainNav />
      {children}
    </>
  );
}
