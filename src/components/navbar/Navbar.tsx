import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full flex justify-center py-4
        bg-[#8cb7c2ff] text-white'>

        <div className="container flex justify-between text-lg">
          <Link to='/home' className="text-2xl font-bold">CodeFarma</Link>

          <div className='flex gap-4'>
            Categorias
            Cadastrar Categorias
            Perfil
            Sair
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar