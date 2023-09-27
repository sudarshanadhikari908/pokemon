import { IPokemonDetails, IPokemonType } from "@shared/interface/pokemon";
import { getImageURL } from "@shared/utils/get-pokemon-image";
import React from "react";
import { Card, Stack, Badge } from "react-bootstrap";

type IProps = {
  pokemon: IPokemonDetails;
  index: number;
};

export function CardBody({ pokemon, index }: IProps) {
  const colors = ["bg-[#48d0b0]", "bg-[#fb6c6c]", "bg-[#609fb5]"];
  const cardColorClass = colors[Math.floor(index / 3) % colors.length];
  return (
    <Card
      className={`p-4 ${cardColorClass} hover:transform hover:scale-105 h-[96] hover:shadow-lg transform transition-transform perspective-1000 cursor-pointer rounded-3xl`}
    >
      <div className={`p-4 ${cardColorClass}`}>
        <div className="row">
          <div className="col-md-6">
            {/* First column for name, Stack component, and badges */}
            <div className="text-white text-3xl font-extrabold capitalize whitespace-nowrap max-w-full">
              {pokemon?.name}
            </div>
            <Stack direction="vertical" gap={2}>
              {pokemon?.types?.map((type: IPokemonType) => (
                <React.Fragment key={type?.slot}>
                  <Badge
                    bg="hsla(0,0%,100%,.2)"
                    className="bg-[hsla(0,0%,100%,.2)] text-white rounded-lg"
                  >
                    {type?.type?.name}
                  </Badge>
                </React.Fragment>
              ))}
            </Stack>
          </div>
          <div className="col-md-6">
            <img
              src={getImageURL(String(pokemon?.id))}
              alt={pokemon?.name}
              className="w-auto h-96 mx-auto"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
