import { Suspense } from "react";
import MainRouter from "./MainRouter";

const RootRouter = () => {
  return (
    <Suspense fallback={"loading..."}>
      <MainRouter />
    </Suspense>
  );
};

export default RootRouter;
