import React, { useState } from "react";
import { Nav, ProgressBar } from "react-bootstrap";

type IProps = {
  pokemon: any;
};

function TabbedNavigation({ pokemon }: IProps) {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white p-4">
      <Nav variant="tabs" className="border-b-2 border-gray-400">
        <Nav.Item>
          <Nav.Link
            eventKey="tab1"
            active={activeTab === "tab1"}
            onClick={() => handleTabClick("tab1")}
            className={`${
              activeTab === "tab1"
                ? "border-b-2 border-purple-500 font-bold text-primary"
                : "text-black"
            }`}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="tab2"
            active={activeTab === "tab2"}
            onClick={() => handleTabClick("tab2")}
            className={`${
              activeTab === "tab2"
                ? "border-b-2 border-purple-500 font-bold text-primary"
                : "text-black"
            }`}
          >
            Base Stats
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="mt-4">
        {activeTab === "tab1" && (
          <>
            <div className="flex flex-row">
              <span className="w-20 text-left">Species</span>
              {pokemon?.types?.map((type: any, index: number) => (
                <React.Fragment key={type?.type?.name}>
                  <span className="font-extrabold capitalize">
                    {type?.type?.name}
                  </span>
                  {index < Number(pokemon?.types?.length) - 1 && (
                    <span className="font-extrabold mr-2">, </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-row">
              <span className="w-20 text-left">Height</span>
              <span className="font-extrabold">{pokemon?.height}cm</span>
            </div>
            <div className="flex flex-row">
              <span className="w-20 text-left">Weight</span>
              <span className="font-extrabold">{pokemon?.weight}kg</span>
            </div>
            <div className="flex flex-row">
              <span className="w-20 text-left">Abilties</span>
              {pokemon?.abilities?.map((ability: any, index: number) => (
                <React.Fragment key={ability?.ability?.name}>
                  <span className="font-extrabold capitalize">
                    {ability?.ability?.name}
                  </span>
                  {index < Number(pokemon?.abilities?.length) - 1 && (
                    <span className="font-extrabold mr-2">, </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </>
        )}
        {activeTab === "tab2" && (
          <>
            <div className="flex flex-row items-center">
              <span className="w-20 text-left">HP</span>
              <span className="font-extrabold mr-2">
                {pokemon?.stats[0]?.base_stat}
              </span>
              <ProgressBar
                variant="success"
                className="w-[100%]"
                now={pokemon?.stats[0]?.base_stat}
              />
            </div>
            <div className="flex flex-row items-center">
              <span className="w-20 text-left">Attack</span>
              <span className="font-extrabold mr-2">
                {pokemon?.stats[1]?.base_stat}
              </span>
              <ProgressBar
                className="w-[100%]"
                variant="success"
                now={pokemon?.stats[1]?.base_stat}
              />
            </div>
            <div className="flex flex-row items-center">
              <span className="w-20 text-left">Defense</span>
              <span className="font-extrabold mr-2">
                {pokemon?.stats[2]?.base_stat}
              </span>
              <ProgressBar
                variant="success"
                now={pokemon?.stats[2]?.base_stat}
                className="w-[100%]"
              />
            </div>
            <div className="flex flex-row items-center">
              <span className="w-20 text-left">Sp. Atk</span>
              <span className="font-extrabold mr-2">
                {pokemon?.stats[3]?.base_stat}
              </span>
              <ProgressBar
                variant="success"
                now={pokemon?.stats[3]?.base_stat}
                className="w-[100%]"
              />
            </div>
            <div className="flex flex-row items-center">
              <span className="w-20 text-left">Sp. Def</span>
              <span className="font-extrabold mr-2">
                {pokemon?.stats[4]?.base_stat}
              </span>
              <ProgressBar
                variant="success"
                now={pokemon?.stats[4]?.base_stat}
                className="w-[100%]"
              />
            </div>
            <div className="flex flex-row items-center">
              <span className="w-20 text-left">Speed</span>
              <span className="font-extrabold mr-2">
                {pokemon?.stats[5]?.base_stat}
              </span>
              <ProgressBar
                variant="success"
                now={pokemon?.stats[5]?.base_stat}
                className="w-[100%]"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TabbedNavigation;
