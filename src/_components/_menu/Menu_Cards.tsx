import { Typographie } from "@/_design/Typographie";
import { Card } from "./Card";

export const MenuCards = () => {
  return (
    <section className="max-w-[1520px] w-full h-max flex flex-col gap-20 py-16 items-center justify-center">
      <div className="w-max h-max flex flex-col gap-6 items-center justify-center">
        <Typographie variant="h2" color="white" fontFamily="Edo">
          voici notre carte
        </Typographie>
        <Typographie variant="h4" color="white" fontFamily="Montserrat">
          Envie de saveurs authentiques ? Découvrez notre carte et régalez-vous
          !
        </Typographie>
      </div>
      <div className="grid grid-cols-5 max-w-[1520px] w-full h-max place-content-center p-4 gap-2">
        <Card variant="double" />
        <Card variant="simple" />
        <Card variant="simple" />
        <Card variant="simple" />
        <Card variant="simple" />
        <Card variant="simple" />
        <Card variant="simple" />
        <Card variant="simple" />
        <Card variant="simple" />
      </div>
    </section>
  );
};
