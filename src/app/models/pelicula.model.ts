

export class PeliculaModel {

    id: string;
    nombre: string;
    director: string;
    sinopsis: string;
    clasificacion: string;
    fav: boolean;

    constructor() {
        this.fav = false;
    }

}

