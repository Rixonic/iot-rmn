import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, TempIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Card,
  CardBody,
  CardFooter,
  Accordion,
  AccordionItem
} from "@nextui-org/react";
import { DashboardFlowCard, DashboardPressureCard, DashboardTempCard } from "@/components/card";

export default function IndexPage() {
  const logData = [
    { date: '12/05/2024 12:55:03', message: 'Temperatura normal' },
    { date: '12/05/2024 \ 12:54:01', message: 'Fuera de temperatura' },
  ];
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-2">

        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Monitoreo&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Dashboard
          </h2>
        </div>

        <div className="flex gap-3 flex-wrap">
            <DashboardTempCard
              icon = {<TempIcon height={60}/>}
              title = 'Temperatura - Entrada'
              temperature = {13}
              high = {12}
              low = {14} 
              log={logData}
            />
            <DashboardTempCard
              icon = {<TempIcon height={60}/>}
              title = 'Temperatura - Entrada'
              temperature = {13}
              high = {12}
              low = {14} 
              log={logData}
            />
            <DashboardPressureCard
              icon = {<TempIcon height={60}/>}
              title = 'Presion - Entrada'
              temperature = {13}
              high = {12}
              low = {14} 
              log={logData}
            />
            <DashboardPressureCard
              icon = {<TempIcon height={60}/>}
              title = 'Presion - Salida'
              temperature = {13}
              high = {12}
              low = {14} 
              log={logData}
            />
            <DashboardFlowCard
              icon = {<TempIcon height={60}/>}
              title = 'Flujo'
              temperature = {13}
              high = {12}
              low = {14} 
              log={logData}
            />
        </div>
      </section>
    </DefaultLayout>
  );
}
