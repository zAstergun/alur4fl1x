import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
      <div>
        <PageDefault>
          <h2>Cadastro de Vídeo</h2>
            <Link to="/cadastro/categoria">
              Cadastrar Categoria
            </Link>          
        </PageDefault>
      </div>
    
  );
}

export default CadastroVideo;