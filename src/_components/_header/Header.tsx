import { Typographie } from "@/_design/Typographie";
import { Navigations_Container } from "../_navigation/Navigations_Container";
import Image from "next/image";
import ScrollVelocity from "../_text/Text_Scroll_Horizontal";
import { tagTable } from "@/_utils/Tag_Table";

export const Header = () => {
  return (
    <section className="relative flex flex-col w-full h-screen bg-[url('/_img/_png/alibaba-resto-img.png')] bg-cover bg-center">
      {/* DEBUT NAVIGATION CONTAINER _components */}
      <Navigations_Container />
      {/* FIN NAVIGATION CONTAINER _components */}

      <Typographie
        variant="h1"
        color="white"
        fontFamily="Edo"
        className="absolute -translate-2/4 left-2/4 top-2/4 max-w-[370px] w-max sm:max-w-[775px] text-center"
      >
        Bienvenue chez Ali Baba kebab
      </Typographie>

      <Image
        src={"/_img/_pattern/pattern-montain.png"}
        alt="Pattern"
        width={1920}
        height={500}
        className="absolute bottom-0 lg:h-max sm:h-[800px] h-[600px] left-0 pointer-events-none"
      />

      <ScrollVelocity
        velocity={70}
        texts={tagTable}
        parallaxClassName="absolute left-0 bottom-0"
      />
    </section>
  );
};
