const NewsLetter = () => {
  return (
    <section className="bg-secundary-500 flex flex-col items-center gap-2  justify-center  mb-16 space-x-10 w-[70%] m-auto rounded-2xl ">
      <div>
        <div className="text-center m-2">
          <p className="text-black-services text-3xl font-semibold">
            Estamos chegando com novidades!
          </p>
          <p className="text-black-services text-lg font-normal w-[70%] m-auto">
            Preencha seu e-mail para ser informado assim que elas chegarem
          </p>
        </div>
        <div
          className="bg-white rounded-xl p-1 m-2 w-full flex justify-between max-lg:w-[96%] max-md:flex-col
          max-md:justify-center max-md:items-center"
        >
          <input
            className="border-none "
            type="text"
            placeholder="Seu e-mail"
          />
          <button className="bg-brand-secundary rounded-xl text-white p-2  max-md:w-full">
            Inscrever-se
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
