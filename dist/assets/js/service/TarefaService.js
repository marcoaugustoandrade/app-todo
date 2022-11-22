"use strict";
class TarefaService {
    static toLocalStorage(listaTarefas) {
        localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
    }
    static fromLocalStorage(listaTarefas) {
        const tarefas = localStorage.getItem('tarefas');
        if (tarefas) {
            JSON.parse(tarefas).forEach((tarefa) => {
                const t = new Tarefa(tarefa._descricao, new Date(tarefa._data));
                listaTarefas.adicionar(t);
            });
        }
    }
}
