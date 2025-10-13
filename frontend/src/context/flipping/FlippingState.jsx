import HomeContext from "./HomeContext";


export default function HomeState({ children }) {
  

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
}