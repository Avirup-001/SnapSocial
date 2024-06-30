import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10 select-none">
            <Outlet />
          </section>

          <img
            loading="lazy"
            src="/assets/images/pewds.png"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat animate-in fade-in duration-700"
          />
        </>
      )}
    </>
  );
}
