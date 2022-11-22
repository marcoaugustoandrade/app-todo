class ListaTarefas {

  private _tarefas: Tarefa[];

  constructor() {
    this._tarefas = [];
  }

  // Adiciona uma nova tarefa na lista
  adicionar(tarefa: Tarefa) {
    this._tarefas.push(tarefa);
  }

  // Retorna a quantidade de tarefas na lista
  get tarefas() {
    return this._tarefas;
  }

  // Retorna a quantidade de tarefas na lista
  remover() {

  }
}
