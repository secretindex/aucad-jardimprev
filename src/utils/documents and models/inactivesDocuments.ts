export type InactiveStandard = {
  pis: string
  tituloEleitor: string
  posse: string
  portariaConcessao: string
  beneficioPrevidenciario: string
}

const inactivesStandard: InactiveStandard = {
  pis: "NIT/PIS/PASEP/NIS ou documento oficial que contenha a informação",
  tituloEleitor: "Título de Eleitor",
  posse: "Documento de Portaria de Posse",
  portariaConcessao: "Portaria de Concessão do Benefício",
  beneficioPrevidenciario: "Declaração de Benefício Previdenciário emitida a partir do site meuinss.gov.br",
}

export { inactivesStandard }
