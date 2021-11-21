import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Characters() {
  const [data, setData] = useState();
  const [charId, setCharId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fechtData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
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
    <div className="charmainspace">
      <div className="cardcontainer">
        {data.results.map((character) => {
          return (
            <Link
              onClick={() => {
                setCharId(character._id);
              }}
              className="charidcard"
              to="`/comics/:characterId`"
            >
              <p> {character.name}</p>
              <div className="bottomcard">
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                />
                <span>{character.description}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;
