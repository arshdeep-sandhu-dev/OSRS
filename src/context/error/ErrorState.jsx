import ErrorContext from "./ErrorContext";


export default function ErrorState({ children }) {
  const value = {
    // Define any state or functions you want to provide to the context
  };

  return (
    <ErrorContext.Provider value={value}>
      {children}
    </ErrorContext.Provider>
  );
}