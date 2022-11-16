import MateriaProfessorModel from "./MateriaProfessorModel";

class MateriaModel {
  id!:number;
  nome!: string;
  professorId!: number | null;
  professor!: MateriaProfessorModel | null;
}

export default MateriaModel;
