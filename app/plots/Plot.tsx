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
    y: number[] | undefined;
    x: number[] | undefined;
    dataLabel: string;
    title: string;
}

const Plot: FC<PlotProps> = ({ x, y, dataLabel, title }) => {

    const [labels, setLabels] = useState<number[] | undefined>(undefined);
    const [data, setData] = useState<number[] | undefined>(undefined);

    const plotRef = useRef(null);

    useEffect(() => {
        setLabels(x);
        setData(y);

        console.log("updated graph data...");
    }, [x, y]);

    useEffect(() => {
        const chartRef = plotRef.current;
        console.log(chartRef);
        if (chartRef) {
            chartRef.zoom({x: 13});
        }
    }, []);

    return (
        <Bar
            ref={plotRef}
            data={{
                labels: labels,
                datasets: [{
                    label: dataLabel,
                    data: data,
                    borderWidth: 2                    
                }],
            }}
            height={250}
            options={{
                responsive: true,
                maintainAspectRatio: false,
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
                    },
                    title: {
                        display: true,
                        text: title,
                    },
                },
            }}
        />
    );
};

export default Plot;