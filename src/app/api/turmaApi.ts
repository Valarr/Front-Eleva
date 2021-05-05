import {axiosInstance} from './base'

interface turmaProps{id_escola:string, nome_turma:string}

export default class Turma {

    static async criaTurma (attributes:turmaProps) {
        const response = await axiosInstance.post("/Turma",attributes);
        return response.data;
    }

    static async fetchById (id: string) {
        const response = await axiosInstance.get(`escola/${id}/Turma`);
        return response.data;
    }
}