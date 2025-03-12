import { Bottom_Navigation_Bar } from "./Bottom_Navigation_Bar";
import { Top_Navigation_Bar } from "./Top_Navigation_Bar";

export const Navigations_Container = () => {
  return (
    <section className="relative flex flex-col w-full h-screen">
      {/* DEBUT NAVIGATION _components */}
      <Top_Navigation_Bar />
      <Bottom_Navigation_Bar />
      {/* FIN NAVIGATION _components */}
    </section>
  );
};
