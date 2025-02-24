import { useState } from "react";

function FormularioCategoria() {


  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Cadastrar Categoria</h1>

      <form className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Nome da Categoria</label>
          <input
            type="nome"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Descrição da Categoria</label>
          <input
            type="description"
            placeholder="Descrição"
            name="description"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <button
          type='submit'
          className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
            text-white font-bold w-1/2 mx-auto py-2 flex justify-center'
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default FormularioCategoria;