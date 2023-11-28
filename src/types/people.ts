export type People = {
	id: number,
	nome: string,
	cpf: string,
	rg: string,
	dataNasc: string,
	sexo: string,
	mae: string,
	pai: string,
	email: string,
	cep: string,
	endereco: string,
	numero: number,
	bairro: string,
	cidade: string,
	estado: string,
	telefoneFixo: string,
	celular:string,
	altura: number,
	peso: number,
	tipoSanguineo: string,
}

export type PeoplePage = {
    content?:People[];
    last: boolean;
    totalElements:number;
    totalPages:number;
    size?:number;
    number:number;
    first: boolean;
    numberOfElements?:number;
    empty?: boolean;
  }

export type AvgSex = {
    sexo: string;
    avg: number;
};

export type AvgSexPage = {
    content?:AvgSex[]
};

export type KindReceives = {
    kind: string;
    count: number;
};

export type KindReceivesPage = {
    content?:KindReceives[]
};