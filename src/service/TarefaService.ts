class TarefaService {

  static toLocalStorage(listaTarefas: Tarefa[]) {
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas));
  }

  static fromLocalStorage(listaTarefas: ListaTarefas) {
    const tarefas = localStorage.getItem('tarefas');
    
    if (tarefas) {
      JSON.parse(tarefas).forEach((tarefa: any) => {
        const t = new Tarefa(
          tarefa._descricao,
          new Date(tarefa._data)
        )
        listaTarefas.adicionar(t);
      });
    }       
  }
}