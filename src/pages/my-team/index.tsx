import { CardBody } from "@shared/components/card/CardBody";
import Layout from "@shared/layout";
import { useAppSelector } from "@store/redux-Hooks";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function MyTeam() {
  const { pokemonTeam } = useAppSelector((state) => state.pokemon);
  return (
    <>
      <div className="d-flex items-center flex-column  gap-1 justify-center">
        <Layout />
        <Container fluid="md">
          <Row bsPrefix="row">
            {pokemonTeam?.map((pokemon: any, index: number) => (
              <React.Fragment key={pokemon?.id}>
                <Col lg={4} md={6} sm={12} className="mb-5">
                  <CardBody pokemon={pokemon} index={index} />
                </Col>
              </React.Fragment>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MyTeam;
