// const t1 = new Tarefa('Estudar TypeScript', new Date(2022, 10, 12))
// const t2 = new Tarefa('Estudar HTML', new Date(2021, 10, 13))
// const t3 = new Tarefa('Estudar React', new Date(2021, 11, 14))

// const listaTarefas = new ListaTarefas()
// listaTarefas.adicionar(t1)
// listaTarefas.adicionar(t2)
// listaTarefas.adicionar(t3)

const tarefaController = new TarefaController();
// tarefaController.tarefas = listaTarefas;
tarefaController.montar();


// // FUnciona
// const x = document.querySelector('#btn-add-tarefa')!;
// x.addEventListener('click', (e) => {
//   e.preventDefault();
//   tarefaController.adicionar();
// });
