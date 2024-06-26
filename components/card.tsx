import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { DashboardCardProps } from "@/types";
import {
  FlowIcon,
  LimitHighIcon,
  LimitLowIcon,
  PressureIcon,
  TempIcon,
} from "./icons";

export const DashboardTempCard: React.FC<DashboardCardProps> = ({
  title,
  temperature,
  high,
  low,
  log,
  unit = "°C"
}) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 md:w-[360px] w-[260px]"
      shadow="sm"
    >
      <CardBody className="pb-1 h-fit">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4 shadow-md rounded-3xl p-4 bg-background/60 dark:bg-default-100/50 flex justify-center">
            <TempIcon height={60} />
          </div>
          <div className="col-span-6 md:col-span-8">
            <div className="flex flex-col justify-between items-center">
              <h3 className="font-bold text-foreground/90 text-xl">{title}</h3>
              <div className="grid grid-cols-4 relative w-full items-end grid-col">
                <h1 className="text-large font-medium mt-2 justify-self-center col-span-3 place-self-center">
                  <span className="text-5xl">{temperature?temperature:"--"}</span>{unit}
                </h1>
                <div className="col-span-1 justify-self-end">
                  <div className="flex flex-row items-center">
                    <LimitHighIcon height={24} />
                    <h1 className="text-large font-medium text-center">
                      {high?high:"--"}
                    </h1>
                  </div>
                  <div className="flex flex-row items-center">
                    <LimitLowIcon height={24} />
                    <h1 className="text-large font-medium text-center">
                      {low?low:"--"}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between flex-col pt-0.5">
        <Dropdown>
          <DropdownTrigger>
            <Button
              type="button"
              variant="light"
              size="sm"
              className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
            >
              <div className="flex-1 flex flex-col text-start">
                <span className="text-foreground text-medium">Log</span>
                <span className="text-foreground-500 font-normal text-small">
                  Ultimas entradas
                </span>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            {log.map((l, index) => (
              <DropdownItem
                key={index}
                //shortcut="⌘N"
                description={"Fecha: " + l.date}
                //startContent={<AddNoteIcon className={iconClasses} />}
              >
                {l.message}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </CardFooter>
    </Card>
  );
};

export const DashboardPressureCard: React.FC<DashboardCardProps> = ({
  title,
  temperature,
  high,
  low,
  log,
  unit = " Kg/cm2"
}) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 md:w-[360px] w-[260px]"
      shadow="sm"
    >
      <CardBody className="pb-1">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4 shadow-md rounded-3xl p-4 bg-background/60 dark:bg-default-100/50 flex justify-center">
            <PressureIcon height={60} />
          </div>
          <div className="col-span-6 md:col-span-8">
            <div className="flex flex-col justify-between items-center">
              <h3 className="font-bold text-foreground/90 text-xl">{title}</h3>
              <div className="grid grid-cols-4 relative w-full items-end grid-col">
                <h1 className="text-large font-medium mt-2 justify-self-center col-span-3 place-self-center">
                  <span className="text-5xl">{temperature? (temperature):"--"}</span>{unit}
                </h1>
                <div className="col-span-1 justify-self-end">
                  <div className="flex flex-row items-center">
                    <LimitHighIcon height={24} />
                    <h1 className="text-large font-medium text-center">
                      {high ? high : "--"}
                    </h1>
                  </div>
                  <div className="flex flex-row items-center">
                    <LimitLowIcon height={24} />
                    <h1 className="text-large font-medium text-center">
                      {low? low:"--"}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between flex-col pt-0.5">
        <Dropdown>
          <DropdownTrigger>
            <Button
              type="button"
              variant="light"
              size="sm"
              className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
            >
              <div className="flex-1 flex flex-col text-start">
                <span className="text-foreground text-medium">Log</span>
                <span className="text-foreground-500 font-normal text-small">
                  Ultimas entradas
                </span>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            {log.map((l, index) => (
              <DropdownItem
                key={index}
                //shortcut="⌘N"
                description={"Fecha: " + l.date}
                //startContent={<AddNoteIcon className={iconClasses} />}
              >
                {l.message}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </CardFooter>
    </Card>
  );
};

export const DashboardFlowCard: React.FC<DashboardCardProps> = ({
  title,
  temperature,
  high,
  low,
  log,
  unit = " Lts/hr"
}) => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 md:w-[360px] w-[260px]"
      shadow="sm"
    >
      <CardBody className="pb-1">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4 shadow-md rounded-3xl p-4 bg-background/60 dark:bg-default-100/50 flex justify-center ">
            <FlowIcon height={60} />
          </div>
          <div className="col-span-6 md:col-span-8">
            <div className="flex flex-col justify-between items-center">
              <h3 className="font-bold text-foreground/90 text-xl">{title}</h3>
              <div className="grid grid-cols-4 relative w-full items-end grid-col">
                <h1 className="text-large font-medium mt-2 justify-self-center col-span-3 place-self-center">
                  <span className="text-5xl">{temperature? temperature:"--"}</span>{unit}
                </h1>
                <div className="col-span-1 justify-self-end h-full">
                  <div className="flex flex-row items-center">
                    <LimitLowIcon height={24} />
                    <h1 className="text-large font-medium text-center">
                      {low?low:"--"}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between flex-col pt-0.5">
        <Dropdown>
          <DropdownTrigger>
            <Button
              type="button"
              variant="light"
              size="sm"
              className="flex w-full h-full gap-3 items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 py-2 transition-opacity"
            >
              <div className="flex-1 flex flex-col text-start">
                <span className="text-foreground text-medium">Log</span>
                <span className="text-foreground-500 font-normal text-small">
                  Ultimas entradas
                </span>
              </div>
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="faded"
            aria-label="Dropdown menu with description"
          >
            {log.map((l, index) => (
              <DropdownItem
                key={index}
                //shortcut="⌘N"
                description={"Fecha: " + l.date}
                //startContent={<AddNoteIcon className={iconClasses} />}
              >
                {l.message}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </CardFooter>
    </Card>
  );
};
