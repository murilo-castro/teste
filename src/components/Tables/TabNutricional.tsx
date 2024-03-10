import React from 'react'

type  ProductProps = {
  product: {}
}

export function TabNutricional({ product }: ProductProps) {
  return (
    <div className="overflow-x-auto p-4">
      <table className="divide-y-2 min-w-full divide-gray-200 bg-white text-sm mt-8 mb-8">
          <tr>
            <th className='flex justify-normal w-32 py-4'>Indicação</th>
            <td>{product.nutritional_information.recommendation}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Porte</th>
            <td>{product.nutritional_information.size}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Idade</th>
            <td>{product.nutritional_information.age}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Tipo de Ração</th>
            <td>{product.nutritional_information.type_of_feed}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Sabor</th>
            <td>{product.nutritional_information.flavor}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Corante</th>
            <td>{product.nutritional_information.dye}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Transgênico</th>
            <td>{product.nutritional_information.transgenic}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Tamanho do Grão</th>
            <td>{product.nutritional_information.grain_size}</td>
          </tr>
          <tr>
            <th className='flex justify-normal w-32 py-4'>Composição</th>
            <td>{product.nutritional_information.composition}</td>
          </tr>
      </table>
      <table className="divide-y-2 min-w-full divide-gray-200 bg-white text-sm mt-8 mb-8">
        <tr>
          <th className='flex justify-normal w-32 py-4'>Niveis de garantia</th>
          <td>{product.nutritional_information.composition}</td>
          <td>{product.nutritional_information.composition}</td>
          <td>{product.nutritional_information.composition}</td>
        </tr>
      </table>
      <table className="divide-y-2 min-w-full divide-gray-200 bg-white text-sm mt-8 mb-8">
        <tr>
          <th className='flex justify-normal w-32 py-4'>Niveis de garantia</th>
          <td>{product.nutritional_information.composition}</td>
          <td>{product.nutritional_information.composition}</td>
        </tr>
      </table>
  </div>
  )
}
