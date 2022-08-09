import { Home, NotFound } from "./pages/index";
import { MainLayout } from "./layouts";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  // {
  //   element: <MainLayout searchBar />,
  //   children: [
  //     {
  //       path: "/:category/search/:queryParam",
  //       element: <SearchPage />,
  //     },
  //     {
  //       path: "/:category/:id",
  //       element: (
  //         <ItemPage
  //           breadcrumbs={[
  //             { label: "Hem", path: "/" },
  //             { label: ":id", path: "/gallery" },
  //           ]}
  //         />
  //       ),
  //     },
  //   ],
  // },
];
