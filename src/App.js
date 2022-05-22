import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

const App = () => {
  const API_URL = "https://www.omdbapi.com/?apikey=4e9c87ac";

  const [data, setData] = React.useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setData(data);
  };

  // React.useEffect(() => {
  //   searchMovies("sex and the city");
  // }, []);

  return (
    <div className="app">
      <Header />
      <Search function={searchMovies} />
      <div className="container">
        {data.Response === "True" &&
          data.Search.map((items) => {
            return (
              <Card
                id={items.imdbID}
                title={items.Title}
                imgurl={items.Poster}
                year={items.Year}
                type={items.Type}
              />
            );
          })}
        {data.Response == "False" && (
          <h2 className="empty">Movie not Found!</h2>
        )}
      </div>
    </div>
  );
};

export default App;
