import HomeContext from "./HomeContext";


export default function HomeState({ children }) {
  const value = {
    // Define any state or functions you want to provide to the context
  };

  return (
    <HomeContext.Provider value={value}>
      {children}
    </HomeContext.Provider>
  );
}