import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento.target;
    setValue(
      getAttribute('name'), 
      value
    );
  }
  
  return (
      <div>
        <PageDefault>
          <h2>Cadastro de Cateoria: {values.nome}</h2>

            <form onSubmit={function handleSubmit(infosDoEvento) {
              infosDoEvento.preventDefault();
              setCategorias([
                ...categorias,
                values
              ]);

              setValues(valoresIniciais);
            }}>
              
            <FormField
              label="Nome da Categoria:"
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange} 
            />

            <FormField
              label="Descrição:"
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange} 
            />

            <FormField
              label="Cor:"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange} 
            />          

              <button>
                Cadastrar
              </button>

            </form>

            <ul>
              {categorias.map((categoria, indice) => {
                return (
                  <li key={`${categoria}${indice}`}>
                    {categoria.nome}
                  </li>
                )
              })}
            </ul>

            <Link to="/">
              Voltar para a Home
            </Link>          
        </PageDefault>
      </div>
    
  );
}

export default CadastroCategoria;
