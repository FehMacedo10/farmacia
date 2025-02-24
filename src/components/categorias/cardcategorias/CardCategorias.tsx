import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

interface CardTemasProps {
  categoria: Categoria;
}

function CardTemas({ categoria }: CardTemasProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-[#8cb7c2ff] text-white font-bold text-2xl'>
        Categoria
      </header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
      <p className='p-8 text-xl bg-slate-100 h-full'>{categoria.descricao}</p>

      <div className="flex">
        <Link to={`/editarcategoria/${categoria.id}`}
          className='w-full text-slate-100 bg-[#bacfcbff] hover:bg-[#8cb7c2ff] 
                        flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarcategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>

    </div>
  )
}

export default CardTemas