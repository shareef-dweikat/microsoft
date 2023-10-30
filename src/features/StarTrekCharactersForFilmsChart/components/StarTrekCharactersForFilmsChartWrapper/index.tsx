import { Chart, ReactGoogleChartEvent } from "react-google-charts";
import useApiData from "../../hooks";
import { getRandomColor } from "../../utils";
import { Error, ChartFilm } from "../../types";
import { Text, Title } from "../";
import { ERROR, LOADING, TITLE } from "../../constants";

type state = {
  films: ChartFilm[];
  isLoading: boolean;
  error: Error;
};

function StarTrekCharactersForFilmsChartWrapper() {
  const { films, isLoading, error }: state = useApiData();

  const bars = films.map((film: ChartFilm, index: number) => {
    const randomColor = getRandomColor(index);

    return [film.title, film.charactersCount, `color: ${randomColor}`];
  });

  const options = {
    legend: "none",
  };

  const chartEvents: ReactGoogleChartEvent[] = [
    {
      eventName: "select",
      callback: () => {
        // Prevent any action when a data point is clicked
      },
    },
  ];

  const dataToShow = [["Film", "Characters", { role: "style" }], ...bars];

  if (isLoading) return <Text block>{LOADING}</Text>;

  if (error) {
    return (
      <Text block>
        {ERROR} {error?.message}
      </Text>
    );
  }

  return (
    <>
      <Title>{TITLE}</Title>
      <Chart
        chartType="ColumnChart"
        data={dataToShow}
        options={options}
        height="400px"
        chartEvents={chartEvents}
        legendToggle
      />
    </>
  );
}

export default StarTrekCharactersForFilmsChartWrapper;
