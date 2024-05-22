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

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Monitoreo&nbsp;</h1>
          <h1 className={title({ color: "violet" })}>&nbsp;</h1>
          <br />
          <h2 className={subtitle({ class: "mt-4" })}>
            Dashboard
          </h2>
        </div>

        <div className="flex gap-3">
          <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
            shadow="sm"
          >
            <CardBody>
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                <div className="relative col-span-6 md:col-span-4 shadow-lg rounded-3xl p-4 bg-background/60 dark:bg-default-100/50">
                  <TempIcon height={60} />
                </div>
                <div className="col-span-6 md:col-span-8">
                  <div className="flex flex-col justify-between items-center">
                    <h3 className="font-bold text-foreground/90 text-xl">Temperatura - Entrada</h3>
                    <div className="grid grid-cols-4 relative w-full items-end grid-col">
                      <h1 className="text-large font-medium mt-2 justify-self-center col-start-2 col-span-2"><span className="text-5xl">13</span>°C</h1>
                      <div className="col-span-1 justify-self-end">
                        <h1 className="text-large font-medium mt-2">H:10</h1>
                        <h1 className="text-large font-medium mt-2">L:10</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="text-small justify-between flex-col">
              <Accordion>
                <AccordionItem key="1" aria-label="Accordion 1" subtitle="Ultimas entradas" title="Log">
                  <Table aria-label="Example empty table" isCompact hideHeader>
                    <TableHeader>
                      <TableColumn>Fecha</TableColumn>
                      <TableColumn>Mensaje</TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="2">
                        <TableCell>12/05/2024 12:55:03</TableCell>
                        <TableCell>Temperatura normal</TableCell>
                      </TableRow>
                      <TableRow key="1">
                        <TableCell >12/05/2024 12:54:01</TableCell>
                        <TableCell>Fuera de temperatura</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </AccordionItem>
              </Accordion>
            </CardFooter>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}
