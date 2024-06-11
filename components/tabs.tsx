import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Radio,
  RadioGroup,
  Switch,
} from "@nextui-org/react";
import {
  DashboardTempCard,
  DashboardFlowCard,
  DashboardPressureCard,
} from "./card";
import { title } from "@/components/primitives";
import { useEffect, useState } from "react";
import { DataProps } from "@/types";
import useWebSocket from "@/hook/useWebSocket";
import { SiteConfig, siteConfig } from "@/config/site";

const logData = [
  { date: "12/05/2024 12:55:03", message: "Temperatura normal" },
  { date: "12/05/2024  12:54:01", message: "Fuera de temperatura" },
];

const PerChiller: React.FC<{
  name: string,
  pressureIn: {
      pressure: number,
      max: number,
      min: number
  },
  pressureOut: {
      pressure: number,
      max: number,
      min: number
  }
}> = ({ name,  pressureIn, pressureOut }) => {
  return (
    <div className="flex flex-col justify-start md:justify-center gap-3">
      <h1 className={title({ size: "sm", alignText: "auto" })}>
        {name}
      </h1>
      <div className="flex flex-row gap-3 flex-wrap justify-center">
        <DashboardPressureCard
          title="Presion de descarga"
          temperature={pressureIn.pressure}
          high={pressureIn.max}
          low={pressureIn.min}
          log={logData}
          unit=" PSI"
        />
        <DashboardPressureCard
          title="Presion de succion"
          temperature={pressureOut.pressure}
          high={pressureOut.max}
          low={pressureOut.min}
          log={logData}
          unit=" PSI"
        />
        <Card>
          <CardHeader className="justify-center">
            <h1 className="font-bold">Sistema de bombeo</h1>
          </CardHeader>
          <CardBody>
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center">
                <h1 className="">Primario</h1>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-col items-center">
                    <h1 className="text-center">Bomba 1</h1> <Switch color="success"></Switch>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-center">Bomba 2</h1> <Switch color="success"></Switch>
                  </div>
                </div>
              </div>
              <Divider orientation="vertical" />
              <div className="flex flex-col items-center">
                <h1>Secundario</h1>
                <div className="flex flex-row gap-2 ">
                  <div className="flex flex-col items-center">
                    <h1 className="text-center">Bomba 1</h1> <Switch color="success"></Switch>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-center">Bomba 2</h1> <Switch color="success"></Switch>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="flex flex-col gap-2 justify-center items-center">
              <h1 className="font-bold">Fuerza Motriz</h1>
              <div className="flex flex-row gap-2">
                <Chip color="success">R</Chip>
                <Chip color="success">S</Chip>
                <Chip color="success">T</Chip>
              </div>
              <Divider />
              <h1 className="font-bold">Compresor</h1>
              <Chip color="success">Habilitado</Chip>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export const WaterSideTab = () => {
  const [data, setData] = useState<DataProps>();

  useWebSocket('wss://node-red.frank4.com.ar/areascontroladas/' + siteConfig.route, setData);

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <DashboardTempCard
        title="Temperatura - Entrada"
        temperature={ data?.waterSide.tempIn.temp}
        high={data?.waterSide.tempIn.max}
        low={data?.waterSide.tempIn.min}
        log={logData}
      />
      <DashboardTempCard
        title="Temperatura - Salida"
        temperature={ data?.waterSide.tempOut.temp}
        high={data?.waterSide.tempOut.max}
        low={data?.waterSide.tempOut.min}
        log={logData}
      />
      <DashboardFlowCard
        title="Flujo"
        temperature={data?.waterSide.flow.flow}
        low={data?.waterSide.flow.min}
        log={logData}
      />
      <DashboardPressureCard
        title="Presion Retorno"
        temperature={data?.waterSide.pressureOut.pressure}
        high={data?.waterSide.pressureOut.max}
        low={data?.waterSide.pressureOut.min}
        log={logData}
      />
      <DashboardPressureCard
        title="Presion Entrada"
        temperature={data?.waterSide.pressureIn.pressure}
        high={data?.waterSide.pressureIn.max}
        low={data?.waterSide.pressureIn.min}
        log={logData}
      />
      <Card className="order-first sm:order-last">
        <CardHeader>
          <h1 className="font-bold">Modo Emergencia (Agua de red)</h1>
        </CardHeader>
        <CardBody className="items-center">
          <Switch color="danger"></Switch>
        </CardBody>
      </Card>
    </div>
  );
};

export const RackTab = () => {
  const [data, setData] = useState<DataProps>();

  useWebSocket('wss://node-red.frank4.com.ar/areascontroladas/' + siteConfig.route, setData);

  return (
    <div className="flex gap-3 flex-wrap justify-center">
      <DashboardTempCard
        title="Temperatura de sala"
        temperature={data?.rack.tempRoom.temp}
        high={data?.rack.tempRoom.max}
        low={data?.rack.tempRoom.min}
        log={logData}
      />
      <Card>
        <CardHeader>
          <h1 className="font-bold">Estado de compresor de helio</h1>
        </CardHeader>
        <CardBody className="flex flex-row justify-evenly pb-8">
          <Chip color="success">Marcha</Chip>
          <Chip color="default">Detenido</Chip>
        </CardBody>
      </Card>
    </div>
  );
};

export const ChillerPlantTab = () => {
  const [data, setData] = useState<DataProps>();

  useWebSocket('wss://node-red.frank4.com.ar/areascontroladas/' + siteConfig.route, setData);

  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {data?.chillers.map((chiller, index) => (
        <PerChiller
          key={index}
          name={chiller.name}
          pressureIn={chiller.pressureIn}
          pressureOut={chiller.pressureOut}
        />
      ))}
    </div>
  );
};

export const ConfigurationTab = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <Card>
        <CardBody className="flex flex-row gap-4 md:gap-10 pl-10 pr-10 flex-wrap justify-center">
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h1 className="text-center">Planta de Chillers</h1>
            <RadioGroup>
              <Radio value="buenos-aires">Chiller Unico</Radio>
              <Radio value="sydney">Principal + Backup</Radio>
              <Radio value="buenos">Redundancia 3/2</Radio>
              <Radio value="sydy">2 Chillers</Radio>
            </RadioGroup>
          </div>
          <Divider orientation="horizontal" className="md:hidden" />
          <Divider orientation="vertical" className="hidden md:block" />
          <div className="flex flex-col gap-4">
            <h1 className="text-center">Sistema</h1>
            <RadioGroup>
              <Radio value="buenos">
                Volumen <br />
                Refrigeracion Constante
              </Radio>
              <Radio value="sydney">
                Volumen <br />
                Refrigeracion Variable
              </Radio>
            </RadioGroup>
          </div>
          <Divider orientation="horizontal" className="lg:hidden" />
          <Divider orientation="vertical" className="hidden lg:block" />
          <div className="flex flex-col gap-4 min-w-[200px]">
            <h1 className="text-center">Sistema de bombeo</h1>
            <RadioGroup label="Circulacion Simple">
              <Radio value="buenos-aires">1 Bomba</Radio>
              <Radio value="sydney">2 Bombas</Radio>
            </RadioGroup>
            <RadioGroup label="Circulacion Doble">
              <Radio value="buenos-aires">1 Bomba</Radio>
              <Radio value="sydney">2 Bombas</Radio>
            </RadioGroup>
            <RadioGroup label="Acumulador">
              <Radio value="buenos-aires">Presurizado</Radio>
              <Radio value="sydney">Atmosferico</Radio>
            </RadioGroup>
          </div>
        </CardBody>
        <Divider orientation="horizontal" />
        <CardFooter className="justify-center flex-col">
          <h2>Kit Hidronico</h2>
          <div className="flex flex-row gap-1">
            <h1>No</h1>
            <Switch />
            <h1>Si</h1>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
