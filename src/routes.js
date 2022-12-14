import { HomePage, NotFound, FunnelPage, FunnelResultsPage } from "./pages/index";
import { MainLayout } from "./layouts";

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/funnel/:id/results", element: <FunnelResultsPage />},
      { path: "/funnel/:id", element: <FunnelPage /> },
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
