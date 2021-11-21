import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Comic() {
  const [data, setData] = useState();
  const [charId, setCharId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fechtData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
        setData(response.data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fechtData();
  }, [data]);

  return isLoading ? (
    <span>processing ...</span>
  ) : (
    <div className="maincomic">
      <div className="comicflex" style={{ color: "white" }}>
        {data.results.map((comic, index) => {
          return (
            <div>
              <div className="comiccard">
                <div style={{ width: 260 }}>{comic.title}</div>
                <div>
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt=""
                  />
                </div>
                <div style={{ width: 260 }}>{comic.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comic;
