import { createBrowserRouter, RouterProvider } from "react-router";
import { lazy, Suspense } from "react";
import LoadingPage from "@src/pages/Loading/loading-page";

const Dashboard = lazy(() => import('@src/pages/dashboard/dashboard'))
const SignIn = lazy(() => import('@src/pages/auth/sign-in'))
const SignUp = lazy(() => import('@src/pages/auth/sign-up'))
const PageNotFound = lazy(() => import('@src/pages/404/page-not-found'))
const DashboardLayout = lazy(() => import('@src/layouts/dashboard-layout'))

const withSuspense = (Component: React.FC) => {
  return () => (
    <Suspense fallback={<LoadingPage />}>
      <Component />
    </Suspense>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: withSuspense(DashboardLayout)(),
    children: [
      { path: "", element: <Dashboard /> }
    ]
  },
  {
    path: '/sign-in',
    element: withSuspense(SignIn)()
  },
  {
    path: '/sign-up',
    element: withSuspense(SignUp)()
  },
  {
    path: '*',
    element: <PageNotFound />
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}