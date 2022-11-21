import SalaModel from 'src/app/modules/salas/models/Sala.model';
class AlunoModel {
  id!: number;
  nome!: string;
  cpf!: string;
  dataNascimento!: string;
  sala!: SalaModel | null;
  salaId!: string | null;
}

export default AlunoModel;
