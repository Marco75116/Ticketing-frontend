import React from "react";
import { Card, Input, Title, Form } from "./FormGame.styled";
import { useForm } from "react-hook-form";
import { createNewGame } from "../../../../utils/ethers/ethers";

const FormGame = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => {
    createNewGame(
      data.gameName,
      data.gameSymbol,
      data.priceTicket,
      data.totalSupply
    );
    reset();
  };

  return (
    <Card>
      <Title>Create Your Game</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Name"
          {...register("gameName", {
            required: {
              value: true,
              message: "Please enter a name",
            },
          })}
        />
        {errors.gameName && <span>{errors.gameName.message}</span>}

        <Input
          placeholder="Symbol"
          {...register("gameSymbol", {
            required: {
              value: true,
              message: "Please enter a symbol",
            },
          })}
        />
        {errors.gameSymbol && <span>{errors.gameSymbol.message}</span>}

        <Input
          type="number"
          placeholder="Price Ticket"
          {...register("priceTicket", {
            required: {
              value: true,
              message: "Please enter an amount",
            },
            min: {
              value: 1,
              message: `Please enter an amount greater than 0.`,
            },
          })}
        />
        {errors.priceTicket && <span>{errors.priceTicket.message}</span>}

        <Input
          type="number"
          placeholder="Total Supply"
          {...(register &&
            register("totalSupply", {
              required: {
                value: true,
                message: "Please enter an amount",
              },
              min: {
                value: 1,
                message: `Please enter an amount greater than 0.`,
              },
            }))}
        />
        {errors.totalSupply && <span>{errors.totalSupply.message}</span>}
        <input type="submit" />
      </Form>
    </Card>
  );
};

export default FormGame;
