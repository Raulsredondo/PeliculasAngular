

export class PeliculaModel {

    id?: string;
    nombre?: string;
    director?: string;
    sinopsis?: string;
    clasificacion?: string;
    imagen?: string;
    fav?: Boolean;

    constructor() {
        this.fav = false;
    }

}

