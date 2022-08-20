import { Outlet } from "react-router-dom";
import { Header } from "../components"
import { FlexContainer, FlexItem } from "../components-stateless";

export default function MainLayout() {
  return (
    <FlexContainer flexDirection="column" height="100vh">
      <FlexItem>
        <Header />
      </FlexItem>
      <FlexItem flexGrow={1}>
        <Outlet />
      </FlexItem>

      {/* <Footer /> */}
    </FlexContainer>
  );
}