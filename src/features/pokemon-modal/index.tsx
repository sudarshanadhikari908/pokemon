import TabbedNavigation from "@features/pokemon-detail-tab";
import { getImageURL } from "@shared/utils/get-pokemon-image";
import { ArrowLeft } from "lucide-react";
import React from "react";
import "./pokemonModal.css";
import { Badge, Button, Modal, Stack } from "react-bootstrap";
import { useAppDispatch } from "@store/redux-Hooks";
import { setPokemonTeam } from "@store/reducers/pokemon";

type IProps = {
  show: boolean;
  handleClose: () => void;
  modalId: number | null;
  cardColorClass: string;
  pokemon: any;
};

function PokemonModal({
  show,
  handleClose,
  modalId,
  cardColorClass,
  pokemon,
}: IProps) {
  const dispatch = useAppDispatch();
  return (
    <>
      {pokemon?.id === modalId && (
        <>
          <Modal show={show} onHide={handleClose} keyboard>
            <div>
              <Modal.Header
                closeButton
                className={`${cardColorClass} h-[280px] flex flex-col justify-start items-baseline`}
              >
                <div className={`p-4 ${cardColorClass} text-white`}>
                  <ArrowLeft
                    color="#ffffff"
                    size={30}
                    className="cursor-pointer mb-4"
                    onClick={handleClose}
                  />
                  <div className="ml-2">
                    <Modal.Title className="text-white text-3xl font-extrabold capitalize whitespace-nowrap max-w-full">
                      <div className="flex items-start justify-center">
                        {pokemon?.name}
                      </div>
                    </Modal.Title>
                    <Stack direction="vertical" gap={2}>
                      {pokemon?.types?.map((type: any) => (
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
                  <Button
                    onClick={() => {
                      dispatch(setPokemonTeam(pokemon));
                    }}
                    className="absolute top-2 right-2 bg-[#ffffff] text-black border-[#ffffff] rounded-md transition-transform hover:scale-105 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-800"
                  >
                    Add to Team
                  </Button>
                </div>
              </Modal.Header>

              <Modal.Body className="text-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-[10rem]">
                  <img
                    src={getImageURL(pokemon?.id)}
                    alt={pokemon?.name}
                    className="max-h-48 w-auto"
                  />
                </div>
                <TabbedNavigation pokemon={pokemon} />
              </Modal.Body>
            </div>
          </Modal>
        </>
      )}
    </>
  );
}

export default PokemonModal;
