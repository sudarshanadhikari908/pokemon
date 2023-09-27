import CardBody from "@shared/components/card";
import { IPokemonDetails } from "@shared/interface/pokemon";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";

type IProps = {
  pokemonDetail: IPokemonDetails[];
  show: boolean;
  setShow: (value: boolean) => void;
  modalId: number | null;
  setModalId: (value: number) => void;
  handleClose: () => void;
};

function PokemonCard({
  pokemonDetail,
  show,
  setShow,
  modalId,
  setModalId,
  handleClose,
}: IProps) {
  const handleCardClick = (id: number) => {
    setModalId(id);
    setShow(true);
  };

  return (
    <>
      <Container fluid="md">
        <Row bsPrefix="row">
          {pokemonDetail?.map((pokemon: IPokemonDetails, index: number) => (
            <React.Fragment key={pokemon?.id}>
              <Col lg={4} md={6} sm={12} className="mb-5">
                <CardBody
                  pokemon={pokemon}
                  index={index}
                  handleCardClick={handleCardClick}
                  show={show}
                  modalId={modalId}
                  handleClose={handleClose}
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default PokemonCard;
