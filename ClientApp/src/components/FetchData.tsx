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
    try {
      const response = await fetch(
        "https://localhost:7068/api/weatherforecast"
      );
      console.log("response", response);
      const data = await response.json();
      // console.log("data", data);
      return data;
    } catch (e) {
      console.log("error", e);
      return [];
    }
  };

  useEffect(() => {
    console.log("useEffect");
    populateWeatherData().then((data) => {
      console.log("data", data);
      setForecasts(data);
      setLoading(false);
    });
  }, []);

  console.log("forecasts", forecasts);

  return (
    <div>
      <h1 id='tableLabel'>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {loading ? (
        <p>
          <em>Loading...</em>
        </p>
      ) : (
        <ForecastsTable forecasts={forecasts} />
      )}
    </div>
  );
};
