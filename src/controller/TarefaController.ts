class TarefaController {

  private _listaTarefas: ListaTarefas;
  private _tarefaView: TarefaView;

  constructor() {
    this._listaTarefas = new ListaTarefas();
    TarefaService.fromLocalStorage(this._listaTarefas);
    this._tarefaView = new TarefaView(this.adicionar.bind(this));
    this._tarefaView.montar(this._listaTarefas);
  }

  set tarefas(tarefas: ListaTarefas) {
    this._listaTarefas = tarefas;
  }

  montar() {
    this._tarefaView.montar(this._listaTarefas);
    console.log('montando tabela tarefas...')
  }

  adicionar() {
    const tarefa = this._tarefaView.capturarDadosFormulario();
    this._listaTarefas.adicionar(tarefa);
    TarefaService.toLocalStorage(this._listaTarefas.tarefas);
    this._tarefaView.limparFormulario();
    this.montar();
  }

}