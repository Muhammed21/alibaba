import ReviewPage from "@/_components/_avis/ReviewPage";
import { Header } from "@/_components/_header/Header";
import { MenuCards } from "@/_components/_menu/Menu_Cards";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <MenuCards />
      <ReviewPage />
    </section>
  );
}
