import { useRoutes } from "react-router-dom";
import { routes } from "../routes";

export default function Router() {
  let element = useRoutes(routes);

  return element;
}
