import { useContext, createContext, useState, useEffect, useMemo } from "react";

//Context
export const LenguageContext = createContext(null);

//Provider
export const LenguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("ES");

  //ComponentDidMouunt
  useEffect(() => {
    let initialLanguage = localStorage.getItem("selectedLanguage");
    setLanguage(initialLanguage);
  }, []);

  const handleLanguageSelection = (code) => {
    setLanguage(code);
    localStorage.setItem("selectedLanguage", code);
  };

  //
  const values = useMemo(
    () => ({
      language,
      setLanguage,
      handleLanguageSelection,
    }),
    [language]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la Lenguage.
  return (
    <LenguageContext.Provider value={values}>
      {children}
    </LenguageContext.Provider>
  );
};

//
export function useLenguageContext() {
  const context = useContext(LenguageContext);

  if (!context) {
    console.error("Error deploying Lenguage Context!!!");
  }

  return context;
}

export default useLenguageContext;
