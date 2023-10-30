import React from "react";
import { Route, Routes } from "react-router-dom";
import { Text } from "../shared";

const StarTrekPeople = React.lazy(
  () => import("../features/StarTrekPeople/components/StarTrekPeopleWrapper")
);
const StarTrekPersonDetails = React.lazy(
  () => import("../features/StarTrekPersonDetails")
);

const StarTrekCharactersForFilmsChart = React.lazy(
  () => import("../features/StarTrekCharactersForFilmsChart")
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={
          <React.Suspense fallback={<Text>.....</Text>}>
            <StarTrekPeople />
          </React.Suspense>
        }
      />
      <Route
        index
        path="/chart"
        element={
          <React.Suspense fallback={<Text>.....</Text>}>
            <StarTrekCharactersForFilmsChart />
          </React.Suspense>
        }
      />
      <Route
        index
        path="/details/:id"
        element={
          <React.Suspense fallback={<Text>.....</Text>}>
            <StarTrekPersonDetails />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
