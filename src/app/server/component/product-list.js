import { MdOutlineClose } from "react-icons/md";

export  default function ProductsList({product,handleDelete}){
  

  return(
  <>
  <tr key={`Product-item-${product.id}`}>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="flex items-center">
        <div className="flex-shrink-0 h-10 w-10">
          <img className="h-10 w-10 rounded-full" src={product.images} alt={product.description} />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">{product.title}</div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{product.category}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product.price}</span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a href="/edit" className="text-indigo-600 hover:text-indigo-900">
        Editar
      </a>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <MdOutlineClose className="flex-shrink-0 h-6 w-6 cursor-pointer text-gray-400" onClick={() => handleDelete(product.id , product.images)} role="button" aria-label="Eliminar producto"/>
    </td>
  </tr>
  </>
  )
}