import { createContext, useContext, useState, ReactNode } from "react";

// Create the TabContext
const TabContext = createContext<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}>({
  activeTab: "Today's Menu",
  setActiveTab: () => {},
});

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = () => {
  return useContext(TabContext);
};
