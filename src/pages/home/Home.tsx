import FarmaciaHome from "../../assets/farmaciaHome.png";


function Home() {
  return (
    <>
      <div className="bg-[#8cb7c2ff] flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold text-center'>
              Seja Bem Vindos na CodeFarma!
            </h2>
            <p className='text-xl'>
              Onde Tecnologia e Saúde se Conectam
            </p>

            <div className="flex justify-around gap-4">
              <div className='rounded text-white 
                                          border-white border-solid border-2 py-2 px-4'
              >
                Nova Categoria
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src={FarmaciaHome}
              alt="Imagem Página Home"
              className='w-2/3'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home