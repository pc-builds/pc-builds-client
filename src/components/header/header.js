import { SpaceBetween} from "../../components-stateless";
import { HeaderWrapper } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <SpaceBetween fullHeight>
        <p>Gizmo</p>
        <SpaceBetween>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </SpaceBetween>
      </SpaceBetween>
    </HeaderWrapper>
  );
}
