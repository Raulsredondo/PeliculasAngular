

export class PeliculaModel {

    id?: string;
    nombre?: string;
    director?: string;
    sinopsis?: string;
    clasificacion?: string;
    imagen?: string;
    fav?: boolean;

    constructor() {
        this.fav = false;
    }

}

