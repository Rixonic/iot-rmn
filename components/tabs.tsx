import { Card, CardBody, CardHeader, Chip, Divider, Switch } from "@nextui-org/react";
import { DashboardTempCard, DashboardFlowCard, DashboardPressureCard } from "./card";
import { TempIcon, FlowIcon, PressureIcon } from "./icons";
import { DoubleLineChart } from "./charts";

const logData = [
    { date: '12/05/2024 12:55:03', message: 'Temperatura normal' },
    { date: '12/05/2024 \ 12:54:01', message: 'Fuera de temperatura' },
];

const tempData = {
    categories: ['10:00', '10:30', '11:00', '11:30', '12:00'],
    series: [
      {
        name: 'Temperatura Entrada',
        data: [10, 12, 15, 14, 13],
      },
      {
        name: 'Temperatura Salida',
        data: [8, 9, 11, 10, 9],
      },
    ],
  };

export const WaterSideTab = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <DashboardTempCard
                title='Temperatura - Entrada'
                temperature={10}
                high={18}
                low={8}
                log={logData}
            />
            <DashboardTempCard
                title='Temperatura - Salida'
                temperature={14}
                high={23.5}
                low={13.5}
                log={logData}
            />
            <DashboardFlowCard
                title='Flujo'
                temperature={4324}
                high={0}
                low={2800}
                log={logData}
            />
            <DashboardPressureCard
                title='Presion Retorno'
                temperature={14}
                high={12}
                low={14}
                log={logData}
            />
            <DashboardPressureCard
                title='Presion Entrada'
                temperature={14}
                high={12}
                low={14}
                log={logData}
            />
            <Card>
                <CardHeader>
                    <h1>Modo Emergencia (Agua de red)</h1>
                </CardHeader>
                <CardBody>
                    <Switch color="danger"></Switch>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>
                    <h1>Grafico</h1>
                </CardHeader>
                <CardBody>
                <DoubleLineChart series={tempData.series} categories={tempData.categories} />
                </CardBody>
            </Card>

        </div>
    );
};

export const RackTab = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <DashboardTempCard
                title='Temperatura de sala'
                temperature={10}
                high={18}
                low={8}
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
    );
};

export const ChillerPlantTab = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <div className="flex flex-row">
                <DashboardPressureCard
                    title='Presion de descarga'
                    temperature={10}
                    high={18}
                    low={8}
                    log={logData}
                />
                <DashboardPressureCard
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
                <Card>
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
                </Card>

            </div>
        </div>
    );
};

export const ConfigurationTab = () => {
    return (
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
    );
};