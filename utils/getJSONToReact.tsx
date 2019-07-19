import Alcobas from "../data/alcobas.json";
import Estufas from "../data/estufas.json";
import Lavadoras from "../data/lavadoras.json";
import Neveras from "../data/neveras.json";
import Salas from "../data/salas.json";
import Vitrinas from "../data/vitrinas.json";

export function getJSONToRead(selectValue) {
  switch (selectValue) {
    case "Alcobas":
      return Alcobas;

    case "Estufas":
      return Estufas;

    case "Lavadoras":
      return Lavadoras;

    case "Neveras":
      return Neveras;

    case "Salas":
      return Salas;

    case "Vitrinas":
      return Vitrinas;

    default:
      return [];
  }
}
