import {
    Accordion,
    AccordionItem,
    Card,
    CardBody,
    CardFooter,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
  } from "@nextui-org/react";
  
  import { DashboardCardProps } from "@/types";
  
  export const DashboardTempCard: React.FC<DashboardCardProps> = ({ icon, title, temperature, high, low, log }) => {
    return (
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4 shadow-lg rounded-3xl p-4 bg-background/60 dark:bg-default-100/50">
              {icon}
            </div>
            <div className="col-span-6 md:col-span-8">
              <div className="flex flex-col justify-between items-center">
                <h3 className="font-bold text-foreground/90 text-xl">{title}</h3>
                <div className="grid grid-cols-4 relative w-full items-end grid-col">
                  <h1 className="text-large font-medium mt-2 justify-self-center col-start-2 col-span-2">
                    <span className="text-5xl">{temperature}</span>°C
                  </h1>
                  <div className="col-span-1 justify-self-end">
                    <h1 className="text-large font-medium mt-2">H:{high}</h1>
                    <h1 className="text-large font-medium mt-2">L:{low}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="text-small justify-between flex-col">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Ultimas entradas" title="Log">
              <Table aria-label="Example table" isCompact hideHeader>
                <TableHeader>
                  <TableColumn>Fecha</TableColumn>
                  <TableColumn>Mensaje</TableColumn>
                </TableHeader>
                <TableBody>
                  {log.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    );
  };


  export const DashboardPressureCard: React.FC<DashboardCardProps> = ({ icon, title, temperature, high, low, log }) => {
    return (
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4 shadow-lg rounded-3xl p-4 bg-background/60 dark:bg-default-100/50">
              {icon}
            </div>
            <div className="col-span-6 md:col-span-8">
              <div className="flex flex-col justify-between items-center">
                <h3 className="font-bold text-foreground/90 text-xl">{title}</h3>
                <div className="grid grid-cols-4 relative w-full items-end grid-col">
                  <h1 className="text-large font-medium mt-2 justify-self-center col-start-2 col-span-2">
                    <span className="text-5xl">{temperature}</span>°C
                  </h1>
                  <div className="col-span-1 justify-self-end">
                    <h1 className="text-large font-medium mt-2">H:{high}</h1>
                    <h1 className="text-large font-medium mt-2">L:{low}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="text-small justify-between flex-col">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Ultimas entradas" title="Log">
              <Table aria-label="Example table" isCompact hideHeader>
                <TableHeader>
                  <TableColumn>Fecha</TableColumn>
                  <TableColumn>Mensaje</TableColumn>
                </TableHeader>
                <TableBody>
                  {log.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    );
  };

  export const DashboardFlowCard: React.FC<DashboardCardProps> = ({ icon, title, temperature, high, low, log }) => {
    return (
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-4 shadow-lg rounded-3xl p-4 bg-background/60 dark:bg-default-100/50">
              {icon}
            </div>
            <div className="col-span-6 md:col-span-8">
              <div className="flex flex-col justify-between items-center">
                <h3 className="font-bold text-foreground/90 text-xl">{title}</h3>
                <div className="grid grid-cols-4 relative w-full items-end grid-col">
                  <h1 className="text-large font-medium mt-2 justify-self-center col-start-2 col-span-2">
                    <span className="text-5xl">{temperature}</span>°C
                  </h1>
                  <div className="col-span-1 justify-self-end">
                    <h1 className="text-large font-medium mt-2">H:{high}</h1>
                    <h1 className="text-large font-medium mt-2">L:{low}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="text-small justify-between flex-col">
          <Accordion>
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Ultimas entradas" title="Log">
              <Table aria-label="Example table" isCompact hideHeader>
                <TableHeader>
                  <TableColumn>Fecha</TableColumn>
                  <TableColumn>Mensaje</TableColumn>
                </TableHeader>
                <TableBody>
                  {log.map((entry, index) => (
                    <TableRow key={index}>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.message}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionItem>
          </Accordion>
        </CardFooter>
      </Card>
    );
  };