import Hero from "../components/Hero";
import { Navbar } from "../components";
function MainLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}

export default MainLayout;
