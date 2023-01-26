import Loader from "./components/loader/Loader";
import { lazy, Suspense } from "react";
import "./App.css";
const ArticlesList = lazy(() => import("./pages/articles/ArticlesList"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ArticlesList />
    </Suspense>
  );
}

export default App;
