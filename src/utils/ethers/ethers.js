import { ethers } from "ethers";
import { gameFactory } from "../Constants/adress/sCAddress";
import { abiGameFactory } from "../Constants/abi/abiFactory";
import { gameToken } from "../Constants/adress/tokenAddress";
import { toast } from "react-toastify";

export const createNewGame = async (name, symbol, ticketPrice, supply) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factory_abi = abiGameFactory;
    const factory_address = gameFactory;
    const factory_contract = await new ethers.Contract(
      factory_address,
      factory_abi,
      signer
    );

    return await toast.promise(
      () =>
        factory_contract
          .createNewGame(gameToken, name, symbol, ticketPrice, supply)
          .then((ev) => ev.wait()),
      {
        pending: `Creation in progress ...`,
        success: "Your Game is created!",
        error: "Error",
      }
    );
  } catch (error) {
    return false;
  }
};
