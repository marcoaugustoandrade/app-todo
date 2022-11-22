"use strict";
class TarefaView {
    constructor(adicionar) {
        this._tabela = document.querySelector('#tabela-tarefas');
        this._inputDescricao = document.querySelector('#descricao');
        this._inputData = document.querySelector('#data');
        this._btnAdicionar = document.querySelector('#btn-add-tarefa');
        this._btnAdicionar.addEventListener('click', e => {
            e.preventDefault();
            adicionar();
        });
    }
    capturarDadosFormulario() {
        return new Tarefa(this._inputDescricao.value, new Date(this._inputData.value));
    }
    limparFormulario() {
        this._inputDescricao.value = '';
        this._inputData.value = '';
    }
    template(tarefas) {
        return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data</th>
            <th>Concluída</th>
          </tr>
        </thead>
        <tbody>
          ${tarefas.tarefas.map(tarefa => `
            <tr>
              <td>${tarefa.descricao}</td>
              <td>${tarefa.data}</td>
              <td>${tarefa.concluida ? 'sim' : 'não'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    }
    montar(tarefas) {
        this._tabela.innerHTML = this.template(tarefas);
    }
}
