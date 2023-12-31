import React, { useEffect, useState } from "react";

interface Forecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface ForecastsProps {
  forecasts: Forecast[];
}

const ForecastsTable: React.FC<ForecastsProps> = ({ forecasts }) => {
  return (
    <table className='table table-striped' aria-labelledby='tableLabel'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {forecasts.map((forecast) => (
          <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const FetchData: React.FC = () => {
  const [forecasts, setForecasts] = useState<Forecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const populateWeatherData = async () => {
    const response = await fetch("weatherforecast");
    const data = await response.json();
    setForecasts(data);
    setLoading(false);
  };

  useEffect(() => {
    populateWeatherData();
  }, []);

  const contents = loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    <ForecastsTable forecasts={forecasts} />
  );

  return (
    <div>
      <h1 id='tableLabel'>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
};
