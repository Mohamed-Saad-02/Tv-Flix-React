import { createContext, useContext, useReducer } from "react";

const movieContext = createContext();

const initialState = {
  isActiveList: false,
  statue: "movie",
  searchQuery: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "activeSidbar":
      return { ...state, isActiveList: !state.isActiveList };
    case "changeToTv":
      return { ...state, statue: "tv" };
    case "changeToMovie":
      return { ...state, statue: "movie" };
    case "changeSearchQuery":
      return { ...state, searchQuery: action.payload };
    default:
      throw new Error("Action unknown");
  }
}

export default function MoviProvider({ children }) {
  const [{ isActiveList, searchQuery }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <movieContext.Provider value={{ isActiveList, searchQuery, dispatch }}>
      {children}
    </movieContext.Provider>
  );
}

function useMovie() {
  const context = useContext(movieContext);
  if (context === undefined)
    throw new Error("Your used Context outside ContextProvider");
  return context;
}

export { MoviProvider, useMovie };
