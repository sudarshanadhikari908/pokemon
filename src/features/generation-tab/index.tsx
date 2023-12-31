import { setOffsetValue } from "@shared/utils/set-offset";
import { resetPokemonDetail } from "@store/reducers/pokemon";
import { useAppDispatch } from "@store/redux-Hooks";
import { Tab, Tabs } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {
  generationKey: string;
  setGenerationKey: (value: string) => void;
  setOffset: (value: number) => void;
}

function GenerationTab({ generationKey, setGenerationKey, setOffset }: IProps) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabSelect = async (k: any) => {
    dispatch(resetPokemonDetail());
    setGenerationKey(k);
    setOffset(setOffsetValue(k));
    if (location.pathname !== "/") navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <Tabs
        id="controlled-tab-example"
        activeKey={generationKey}
        onSelect={handleTabSelect}
        className="mb-3 md:w-full md:flex md:flex-row"
      >
        <Tab eventKey="1" title="I" />
        <Tab eventKey="2" title="II" />
        <Tab eventKey="3" title="III" />
        <Tab eventKey="4" title="IV" />
        <Tab eventKey="5" title="V" />
        <Tab eventKey="6" title="VI" />
        <Tab eventKey="7" title="VII" />
        <Tab eventKey="8" title="VIII" />
      </Tabs>
    </div>
  );
}

export default GenerationTab;
