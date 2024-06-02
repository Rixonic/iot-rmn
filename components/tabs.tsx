import { Card, CardBody, CardFooter, CardHeader, Chip, Divider, Radio, RadioGroup, Switch } from "@nextui-org/react";
import { DashboardTempCard, DashboardFlowCard, DashboardPressureCard } from "./card";

const logData = [
    { date: '12/05/2024 12:55:03', message: 'Temperatura normal' },
    { date: '12/05/2024 \ 12:54:01', message: 'Fuera de temperatura' },
];

const state = {
    options: {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
    },
    series: [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]
};

const PerChiller: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="flex flex-col justify-start">
            <h1 className="tracking-tight inline font-semibold">{title}</h1>
            <div className="flex flex-row gap-3">
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
                <Card>
                    <CardBody>
                        <div className="flex flex-col gap-2">
                            <h1>Fuerza Motriz</h1>
                            <div className="flex flex-row gap-2">
                                <Chip color="success">R</Chip><Chip color="success">S</Chip><Chip color="success">T</Chip>
                            </div>
                            <Divider />
                            <h1>Compresor</h1>
                            <Chip color="success">Habilitado</Chip>
                        </div>
                    </CardBody>
                </Card>

                <Card>
                    <CardHeader className="justify-center">
                        <h1>Sistema de bombeo</h1>
                    </CardHeader>
                    <CardBody>
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
                            <Divider orientation="vertical" />
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
                    </CardBody>
                </Card>

            </div>
        </div>
    )
}

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
        <div className="flex gap-3 flex-wrap justify-center">
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
            <Card>
                <CardBody>
                    <h1>Estado de compresor de helio</h1>
                    <div className="flex flex-row">
                        Marcha/Detenido
                    </div>
                </CardBody>
            </Card>

        </div>
    );
};

export const ChillerPlantTab = () => {
    return (
        <div className="flex gap-3 flex-wrap">
            <PerChiller title="Chiller 1" />
            <PerChiller title="Chiller 2" />
        </div>
    );
};

export const ConfigurationTab = () => {
    return (
        <div className="flex gap-3 flex-wrap">

            <Card>
                <CardBody className="flex flex-row gap-10 pl-10 pr-10">
                    <div className="flex flex-col gap-4 min-w-[200px]" >
                        <h1 className="text-center">Planta de Chillers</h1>
                        <RadioGroup>
                            <Radio value="buenos-aires">Chiller Unico</Radio>
                            <Radio value="sydney">Principal + Backup</Radio>
                            <Radio value="buenos">Redundancia 3/2</Radio>
                            <Radio value="sydy">2 Chillers</Radio>
                        </RadioGroup>
                    </div>
                    <Divider orientation="vertical" />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-center">Sistema</h1>
                        <RadioGroup>
                            <Radio value="buenos">Volumen <br />Refrigeracion Constante</Radio>
                            <Radio value="sydney">Volumen <br />Refrigeracion Variable</Radio>

                        </RadioGroup>
                    </div>
                    <Divider orientation="vertical" />
                    <div className="flex flex-col gap-4 min-w-[200px]">
                        <h1 className="text-center">Sistema de bombeo</h1>
                        <RadioGroup
                            label="Circulacion Simple"
                        >
                            <Radio value="buenos-aires">1 Bomba</Radio>
                            <Radio value="sydney">2 Bombas</Radio>
                        </RadioGroup>
                        <RadioGroup
                            label="Circulacion Doble"
                        >
                            <Radio value="buenos-aires">1 Bomba</Radio>
                            <Radio value="sydney">2 Bombas</Radio>
                        </RadioGroup>
                        <RadioGroup
                            label="Acumulador"
                        >
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