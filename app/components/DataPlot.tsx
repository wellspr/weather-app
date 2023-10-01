import { FC, Suspense, lazy, useState } from "react";

const Plot = lazy(() => import("../plots/Plot"));

type Plot = {
    plotID: string;
    plotName: string;
    label?: string;
    title?: string;
    unit: string;
    x: number[];
    y: (number | null)[] | (number | null)[][];
    xLabel?: string;
    yLabel?: string;
    backgroundColor: string | string[];
    borderColor: string | string[];
}

interface DataPlotProps {
    plots: Plot[]
}

export type Plots = Plot[];

const DataPlot: FC<DataPlotProps> = ({ plots }) => {

    const [visible, setVisible] = useState<string>(plots[0].plotID);

    const renderPlot = () => {

        if (window !== undefined) {
            return (
                <Suspense fallback={"Loading Graph..."}>
                    {
                        plots.map(plot => {
                            if (visible === plot.plotID) {
                                return (
                                    <Plot
                                        key={plot.plotID}
                                        yLabel={`${plot.yLabel} (${plot.unit})`}
                                        xLabel={plot.xLabel}
                                        x={plot.x}
                                        y={plot.y}
                                        dataLabel={plot.label}
                                        title={plot.title}
                                        backgroundColor={plot.backgroundColor}
                                        borderColor={plot.borderColor}
                                    />
                                )
                            }
                        })
                    }
                </Suspense>
            );
        };
    };

    return (
        <div className="bar-plot">
            {
                plots.map(plot => {
                    return (
                        <button
                            key={plot.plotID}
                            className={visible === plot.plotID ? "button button-plot button-plot--active" : "button button-plot"}
                            disabled={visible === plot.plotID}
                            onClick={() => {
                                setVisible(plot.plotID);
                            }}>
                            { plot.plotName }
                        </button>
                    );
                })
            }

            {renderPlot()}
        </div>
    );
};

export default DataPlot;