"use strict";
class Tarefa {
    constructor(descricao, data) {
        this._descricao = descricao;
        this._data = data;
        this._concluida = false;
    }
    get descricao() {
        return this._descricao;
    }
    get data() {
        return this._data;
    }
    get concluida() {
        return this._concluida;
    }
}
