import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

import {
  Tab,
  Tabs
} from "@nextui-org/react";
import { ChillerPlantTab, ConfigurationTab, RackTab, WaterSideTab } from "@/components/tabs";

export default function IndexPage() {
  const logData = [
    { date: '12/05/2024 12:55:03', message: 'Temperatura normal' },
    { date: '12/05/2024 \ 12:54:01', message: 'Fuera de temperatura' },
  ];
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-2">

        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Cadena de frio - RMI GE Sigma&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Sanatorio Mater Dei
          </h2>
        </div>
        <Tabs aria-label="Options">
          <Tab key="WaterSideTab" title="Lado Agua">
            <WaterSideTab />
          </Tab>
          <Tab key="RackTab" title="Racks">
            <RackTab />
          </Tab>
          <Tab key="ChillerPlantTab" title="Chiller - Planta">
            <ChillerPlantTab />
          </Tab>
          <Tab key="ConfigurationTab" title="Configuracion">
            <ConfigurationTab />
          </Tab>
        </Tabs>
      </section>
    </DefaultLayout>
  );
}
