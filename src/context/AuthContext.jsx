import { createContext, useContext, useEffect, useReducer } from "react";
import { validateJWT } from "../services/authService";

// Initial state - focused only on authentication status
const initialState = {
  isAuthenticated: false,
  loading: true,
  error: null,
};

// Simplified auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    // Session validation (on app start)
    case "SESSION_VALIDATE_REQUEST":
      return { ...state, loading: true, error: null };
    case "SESSION_VALIDATE_SUCCESS":
      return { ...state, isAuthenticated: true, loading: false, error: null };
    case "SESSION_VALIDATE_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };

    // Manual login/logout
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true, loading: false, error: null };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, loading: false, error: null };

    default:
      return state;
  }
};

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    const checkSession = async () => {
      dispatch({ type: "SESSION_VALIDATE_REQUEST" });
      try {
        await validateJWT();
        dispatch({ type: "SESSION_VALIDATE_SUCCESS" });
      } catch (err) {
        dispatch({
          type: "SESSION_VALIDATE_FAILURE",
          payload: err?.message || "Session validation failed",
        });
      }
    };
    checkSession();
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
