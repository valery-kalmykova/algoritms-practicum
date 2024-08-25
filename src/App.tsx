import styles from "./app.module.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./components/main-page/main-page";
import { StringComponent } from "./components/string/string";
import { FibonacciPage } from "./components/fibonacci-page/fibonacci-page";
import { SortingPage } from "./components/sorting-page/sorting-page";
import { StackPage } from "./components/stack-page/stack-page";
import { QueuePage } from "./components/queue-page/queue-page";
import { ListPage } from "./components/list-page/list-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/algoritms",
    element: <MainPage />,
  },
  {
    path: "/recursion",
    element: <StringComponent />,
  },
  {
    path: "/fibonacci",
    element: <FibonacciPage />,
  },
  {
    path: "/sorting",
    element: <SortingPage />,
  },
  {
    path: "/stack",
    element: <StackPage />,
  },
  {
    path: "/queue",
    element: <QueuePage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
]);

function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
