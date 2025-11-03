// Type for valid and types for missing docs
type IDValid = "id/v"
type IDInvalid = "id/10" | "id/n"

// Residence
type ResidenceValid = "cr/v" | "dr/s"
type ResidenceInvalid = "cr/60" | "dr/n" | "cr/n"

// Civil State
type CivilStatusInvalid = "cns/n" | "cerc/n" | "cav/n" | "un/n" | "dsvu/n"
type CivilStatusValid = "cns/s" | "cerc/s" | "cav/s" | "un/s" | "dsvu/s" | "cns/nr"

// Dependent
type DependentTypeInvalid = "deco/n" | "dp/n" | "tgc/n" | "dp/21" | "dep/id/n" | "dep/id/10" | "cnd/n"
type DependentTypeValid = "deco/s" | "dp/s" | "tgc/s" | "cnd/s" | "dep/n"

type TitleInvalid = "titel/n" | "titel/m"

type ReservistaValid = "res/s" | "res/n" | "res/nr"

type RegistroProfValid = "reg/s" | "reg/nr" | "reg/n"

interface ActivesDocuments {
  foto: boolean
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  pis: boolean
  beneficioPrevidenciario: boolean
  registroProfissional: RegistroProfValid
  ctps: boolean
  cnis: boolean
  posse: boolean
  tituloEleitor: boolean
  reservista: ReservistaValid
  comprovanteEstado: boolean
  depId: DependentTypeInvalid | DependentTypeValid
}

export interface InactivesDocuments {
  id: IDInvalid | IDValid
  residencia: ResidenceInvalid | ResidenceValid
  estadoCivil: CivilStatusInvalid | CivilStatusValid
  pis: boolean
  posse: boolean
  portariaConcessao: boolean
  beneficioPrevidenciario: boolean
  tituloEleitor: boolean
  depId: DependentTypeInvalid | DependentTypeValid
}

export interface PensionerDocuments {
  posseExServidor: boolean
  certObito: boolean
  tituloEleitor: TitleInvalid
  id: IDInvalid | IDValid
  idExServidor: "idsf/n" | "idsf/s"
  portariaConcessao: boolean
  beneficioPrevidenciario: boolean
  residencia: ResidenceInvalid | ResidenceValid
  pis: boolean
  estadoCivil: CivilStatusInvalid | CivilStatusValid
}

export default ActivesDocuments
