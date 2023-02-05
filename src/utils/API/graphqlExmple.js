import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

const Get_GAMENFT_CONTRACT = gql`
  {
    gameNfts(first: 100) {
      id
      addressNFT
      addressMarketplace
    }
  }
`;

export default function GraphExample() {
  const { data, loading } = useQuery(Get_GAMENFT_CONTRACT);
  const [games, setGames] = useState([]);
  useEffect(() => {
    if (!loading) {
      setGames(data.gameNfts);
      // eslint-disable-next-line no-console
      console.log(data.gameNfts.length);
    }
  }, [loading]);

  return (
    <div>
      {games.map((game, i) => {
        return <h2 key={i}>{game.addressNFT}</h2>;
      })}
    </div>
  );
}
