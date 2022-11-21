import AlunoModel from "../../alunos/models/Aluno.model";
import ProfessorModel from "../../professores/models/Professor.model";

class SalaModel {
  id!:number;
  codigo!:string;
  alunos!: AlunoModel[];
  professorId!: string;
  professor!: ProfessorModel;
}

export default SalaModel
