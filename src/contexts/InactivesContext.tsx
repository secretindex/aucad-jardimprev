import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react"

import { InactivesDocuments } from "../utils/endTextObject"

export const inactivesDefault: InactivesDocuments = {
  id: "id/n",
  residencia: "cr/n",
  estadoCivil: "cns/n",
  pis: false,
  posse: false,
  portariaConcessao: false,
  tituloEleitor: false,
  beneficioPrevidenciario: false,
  depId: "dep/n",
}

export interface InactivesContextType {
  docs: InactivesDocuments
  setDocs: Dispatch<SetStateAction<InactivesDocuments>>
}

const InactivesContext = createContext<InactivesContextType | undefined>(
  undefined
)

interface ContextProps {
  children: ReactNode
}

const InactivesContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [docs, setDocs] = useState<InactivesDocuments>(inactivesDefault)

  return (
    <InactivesContext.Provider value={{ docs, setDocs }}>
      {children}
    </InactivesContext.Provider>
  )
}

export { InactivesContextProvider, InactivesContext }
