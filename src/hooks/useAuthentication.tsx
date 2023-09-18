import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../app/reducers/authReducer";
import { RootState } from "../types/types";

export const useAuthentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.user);

  //Proteccion de rutas
  useEffect(() => {
    const userInCache = localStorage.getItem("auth") === "true";
    if (userInCache) {
      dispatch(login());
    }
  }, []);

  //Flujo de navegacion en base al estado de la autenticacion
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [isLoggedIn]);
};
