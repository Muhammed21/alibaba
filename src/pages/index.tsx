import ReviewPage from "@/_components/_avis/ReviewPage";
import { CountrySwitch } from "@/_components/_country/Coutry";
import { Header } from "@/_components/_header/Header";
import { MenuCards } from "@/_components/_menu/Menu_Cards";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <Header />
      <MenuCards />
      <ReviewPage />
      <div className="lg:hidden fixed bottom-4 right-2.5 w-max h-max z-50">
        <CountrySwitch size={12} />
      </div>
    </section>
  );
}
