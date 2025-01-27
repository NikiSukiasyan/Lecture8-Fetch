import { useEffect, useState } from "react";
import "./App.css";
import { FetchData } from "./services/api";
import Paragraph from "./components/paragraph/Paragraph";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(setData);
  }, []);

  return (
    <>
      <ul>
        {data.map((product, key) => {
          return <Paragraph text={product.title} />;
        })}
      </ul>
    </>
  );
}

export default App;
