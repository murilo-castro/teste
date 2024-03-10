import Shelf from "../shelf/Shelf";

const CarouselProdutos = () => {
  return (
    <>
      {/* carrosel Produtos */}
      <section className="flex flex-col gap-2  mt-12">
        <h1
          style={{
            color: "var(--gray-900, #000305)",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "150%",
          }}
        >
          Produtos em destaque
        </h1>
        <small
          style={{
            color: "var(--gray-600, #5F686D)",
            fontFamily: "Inter",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150%",
          }}
        >
          Veja produtos que escolhemos nas melhores lojas
        </small>
      </section>

      <section>
        <Shelf />
      </section>
    </>
  );
};

export default CarouselProdutos;
