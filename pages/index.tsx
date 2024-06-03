import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import {
  Tab,
  Tabs
} from "@nextui-org/react";
import { ChillerPlantTab, ConfigurationTab, RackTab, WaterSideTab } from "@/components/tabs";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-2">

        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({size:"md"})}> {siteConfig.title}</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            {siteConfig.institution}
          </h2>
        </div>
        <Tabs 
          aria-label="Options"
          classNames={{base:"max-w-full overflow-x-auto",}}
        >
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
