import {axiosInstance} from './base'

interface escolaProps{nome_escola:string, telefone:string, endereco:string}

export default class School {

    static async criaEscola (attributes:escolaProps) {
        console.log(attributes)
        const response = await axiosInstance.post('/Escola', attributes);
        return response.data;
    }

    static async fetchAll () {
        const response = await axiosInstance.get('/Escola');
        return response.data;
    }

    static async fetchById (id: string) {
        const response = await axiosInstance.get(`/escola/${id}/Turma`);
        return response.data;
    }
}