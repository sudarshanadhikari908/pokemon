import GenerationTab from "@features/generation-tab";
import useLayoutHook from "@hooks/layouts";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const { generationKey, setGenerationKey, setOffset } = useLayoutHook();
  return (
    <>
      <p className="font-bold text-primary">Select Generation:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
        <div className="md:col-span-1" />{" "}
        <div className="md:col-span-1 col-span-2">
          <GenerationTab
            generationKey={generationKey}
            setGenerationKey={setGenerationKey}
            setOffset={setOffset}
          />
        </div>
        <div className="md:col-span-1 col-span-2 flex items-start justify-end md:justify-start">
          <Button className="bg-primary" onClick={() => navigate("/my-team")}>
            My Team
          </Button>
        </div>
      </div>
    </>
  );
}

export default Layout;
