import Alcobas from "../data/alcobas.json";
import Audio from "../data/audio.json";
import Colchones from "../data/colchones.json";
import Comedores from "../data/comedores.json";
import Complementos from "../data/complementos.json";
import Congeladores from "../data/congeladores.json";
import Estufas from "../data/estufas.json";
import Lavadoras from "../data/lavadoras.json";
import Neveras from "../data/neveras.json";
import Salas from "../data/salas.json";
import Televisores from "../data/televisores.json";
import Vitrinas from "../data/vitrinas.json";

export function getJSONToRead(selectValue) {
  switch (selectValue) {
    case "Alcobas":
      return Alcobas;

    case "Audio":
      return Audio;

    case "Colchones":
      return Colchones;

    case "Comedores":
      return Comedores;

    case "Complementos":
      return Complementos;

    case "Congeladores":
      return Congeladores;

    case "Estufas":
      return Estufas;

    case "Lavadoras":
      return Lavadoras;

    case "Neveras":
      return Neveras;

    case "Salas":
      return Salas;

    case "Televisores":
      return Televisores;

    case "Vitrinas":
      return Vitrinas;

    default:
      return [];
  }
}
