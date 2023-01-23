import {createContext, useState} from "react";
import {ChildrenProps, FullUnitObj, UnitContextType} from "../../types";

export const UnitContext = createContext<UnitContextType>({} as UnitContextType);

export const UnitProvider = ({children}: ChildrenProps) => {
  const [fullUnits, setFullUnits] = useState<FullUnitObj[]>([]);

  return (
    <UnitContext.Provider value={{fullUnits, setFullUnits}}>
      {children}
    </UnitContext.Provider>
  );
};
