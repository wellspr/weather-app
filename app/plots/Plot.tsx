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
    x: number[];
    y: (number | null)[] | (number | null)[][];
    xLabel?: string;
    yLabel?: string;
    dataLabel?: string;
    title?: string;
    backgroundColor?: string | string[];
    borderColor?: string | string[];
}

const Plot: FC<PlotProps> = ({ x, y, xLabel, yLabel, dataLabel, title, backgroundColor, borderColor }) => {

    const [labels, setLabels] = useState<number[]>([]);
    const [dataSet, setDataSet] = useState<(number | null)[] | (number | null)[][]>([]);
    const [min, setMin] = useState<number>(0);
    const [max, setMax] = useState<number>(0);

    const plotRef = useRef<ChartJSOrUndefined<"bar", number[] | undefined, number>>(null);

    useEffect(() => {
        setLabels(x);
        setDataSet(y);

        setMin(x[0]);
        setMax(x[10]);

        console.log("updated graph data...", x[0], y[0]);
    }, [x, y]);

    return (
        <Bar
            ref={plotRef}
            data={{
                labels: labels,
                datasets: dataSet.map((data, i) => { 
                    return {
                        label: dataLabel,
                        data: data,
                        borderWidth: 1,
                        type: "bar",
                        backgroundColor: backgroundColor && backgroundColor[i],
                        borderColor: borderColor && borderColor[i],
                    }
                }),
            }}
            height={250}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                skipNull: true,
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
                        display: dataLabel ? true : false,
                        position: 'top' as const,

                    },
                    title: {
                        display: title ? true : false,
                        text: title,
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: xLabel
                        },
                        suggestedMin: x[0],
                        max: x[0] + 10,

                    },
                    y: {
                        title: {
                            display: true,
                            text: yLabel
                        },

                    },
                },
            }}
        />
    );
};

export default Plot;