import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { FlowIcon, GithubIcon, TempIcon } from "@/components/icons";
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
  AccordionItem,
  Button,
  Switch,
  Chip,
  Divider
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
          <h1 className={title()}>Cadena de frio - RMI GE Sigma&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Sanatorio Mater Dei
          </h2>
        </div>
        <div className="flex flex-row gap-4"> <h1>Lado Agua</h1> <h1>Racks</h1> <h1>Chiller Plant</h1> <h1>Configuracion</h1> </div>
        {/* 
        <div className="flex gap-3 flex-wrap">
            <DashboardTempCard
              icon = {<TempIcon height={60}/>}
              title = 'Temperatura - Entrada'
              temperature = {10} 
              high = {18}
              low = {8}
              log={logData}
            />
            <DashboardTempCard
              icon = {<TempIcon height={60}/>}
              title = 'Temperatura - Salida'
              temperature = {14} 
              high = {23.5}
              low = {13.5} 
              log={logData}
            />
            <DashboardFlowCard
              icon = {<FlowIcon height={60}/>}
              title = 'Flujo'
              temperature = {4324}
              high = {0}
              low = {2800} 
              log={logData}
            />
            <DashboardPressureCard
              icon = {<TempIcon height={60}/>}
              title = 'Presion Retorno'
              temperature = {14} 
              high = {12}
              low = {14} 
              log={logData}
            />
            <DashboardPressureCard
              icon = {<TempIcon height={60}/>}
              title = 'Presion Entrada'
              temperature = {14} 
              high = {12}
              low = {14} 
              log={logData}
            />
            <div className="flex flex-col">
              <h1>Modo Emergencia (Agua de red)</h1>
              <div className="flex flex-row">
                <Switch color="danger"></Switch>
              </div>
              
              <h1></h1>
            </div>
        </div>
*/}
        {/*
        <div className="flex gap-3 flex-wrap">
        <DashboardTempCard
              icon = {<TempIcon height={60}/>}
              title = 'Temperatura de sala'
              temperature = {10} 
              high = {18}
              low = {8}
              log={logData}
            />
           <div className="flex flex-col">
              <h1>Estado de compresor de helio</h1>
              <div className="flex flex-row">
                Marcha/Detenido
              </div>
              
              <h1></h1>
            </div>
        </div>

 */}
        {/*
        <div className="flex gap-3 flex-wrap">
          <div className="flex flex-row">
                      <DashboardPressureCard
            icon={<TempIcon height={60} />}
            title='Presion de descarga'
            temperature={10}
            high={18}
            low={8}
            log={logData}
          />
          <DashboardPressureCard
            icon={<TempIcon height={60} />}
            title='Presion de succion'
            temperature={10}
            high={18}
            low={8}
            log={logData}
          />
          <div className="flex flex-col gap-2">
            <h1>Fuerza Motriz</h1>
            <div className="flex flex-row gap-2">
              <Chip color="success">R</Chip><Chip color="success">S</Chip><Chip color="success">T</Chip>
            </div>
            <Divider />
            <h1>Compresor</h1>
            <Chip color="success">Habilitado</Chip>
            <h1></h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Sistema de bombeo</h1>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <h1>Primario</h1>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1>Bomba 1</h1> <Switch color="success"></Switch>
                  </div>
                  <div className="flex flex-col">
                    <h1>Bomba 2</h1> <Switch color="success"></Switch>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1>Secundario</h1>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1>Bomba 1</h1> <Switch color="success"></Switch>
                  </div>
                  <div className="flex flex-col">
                    <h1>Bomba 2</h1> <Switch color="success"></Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
 */}
        <div className="flex gap-3 flex-wrap">

        <div className="flex flex-col gap-2">
            <h1>Planta de Chiller</h1>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col">
                <h1>Primario</h1>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1>Bomba 1</h1> <Switch color="success"></Switch>
                  </div>
                  <div className="flex flex-col">
                    <h1>Bomba 2</h1> <Switch color="success"></Switch>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h1>Secundario</h1>
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <h1>Bomba 1</h1> <Switch color="success"></Switch>
                  </div>
                  <div className="flex flex-col">
                    <h1>Bomba 2</h1> <Switch color="success"></Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
