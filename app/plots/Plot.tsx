import { FC, useEffect, useRef, useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// https://react-chartjs-2.js.org/faq/typescript
//import type { ChartData, ChartOptions } from "chart.js";

import Zoom from "chartjs-plugin-zoom";

import { Bar, Chart } from "react-chartjs-2";
import { ChartJSOrUndefined } from "react-chartjs-2/dist/types";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Zoom,
);

interface PlotProps {
    y: number[];
    x: number[];
    dataLabel: string;
    title: string;
}

const Plot: FC<PlotProps> = ({ x, y, dataLabel, title }) => {

    const [labels, setLabels] = useState<number[]>([]);
    const [data, setData] = useState<number[]>([]);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);

    const plotRef = useRef<ChartJSOrUndefined<"bar", number[] | undefined, number>>(null);

    useEffect(() => {
        setLabels(x);
        setData(y);

        setMin(x[0]);
        setMax(x[10]);

        console.log("updated graph data...", x[0], y[0]);
    }, [x, y]);

    return (
        <Bar
            ref={plotRef}
            data={{
                labels: labels,
                datasets: [{
                    label: dataLabel,
                    data: data,
                    borderWidth: 1,
                    type: "bar"
                }],
            }}
            height={250}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                skipNull: true,
                backgroundColor: "slateblue",
                plugins: {
                    zoom: {
                        zoom: {
                            drag: {
                                enabled: false,
                            },
                            pinch: {
                                enabled: true,
                            },
                            wheel: {
                                enabled: true
                            },
                            mode: "x"
                        },
                        pan: {
                            enabled: true,
                            mode: "x"
                        }
                    },
                    legend: {
                        position: 'top' as const,
                        display: false,

                    },
                    title: {
                        display: false,
                        text: title,
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: title
                        },
                        suggestedMin: x[0],
                        max: x[0]+10
                    },
                    y: {
                        title: {
                            display: true,
                            text: dataLabel
                        },
                        
                    },
                }
            }}
        />
    );
};

export default Plot;