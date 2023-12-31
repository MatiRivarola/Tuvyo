'use client'
import { useState, useEffect } from "react";
import { FcCheckmark } from "react-icons/fc"
import Modal from '@common/modal'
import FormProduct from "@components/form-product";
import useAlert from "@hook/useAlert";
import Alert from "@common/alert";
import ProductsList from "@components/products";
import { getProductsPagination} from "@firebase/function";
import { deleteDoc, doc } from "firebase/firestore";
import { db , storage } from "@firebase/client";
import { ref , deleteObject } from "firebase/storage";

export default function Products() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const { alert, setAlert, toggleAlert } = useAlert();
  // Estados adicionales para paginación y búsqueda
  const [lastVisible, setLastVisible] = useState(null); // Referencia al último documento cargado
  const [loading, setLoading] = useState(false);       // Estado para indicar carga
  const [searchTerm, setSearchTerm] = useState('');     // Término de búsqueda


  const deleteImage = async (imagePath) => {
    //Hago referencia a la imagen
    console.log(imagePath)
    const imageRef = ref(storage, imagePath);
  
    try {
      await deleteObject(imageRef);
      console.log("Imagen eliminada correctamente");
    } catch (error) {
      console.error("Error al eliminar la imagen: ", error);
      throw new Error("Error al eliminar la imagen.");  //Este error va a ser atrapado en handleDelete()
    }
  }
  
  const handleDelete = async (productId , imagePath) => {
    try {
      // Eliminar el producto de Firestore
      const productRef = doc(db, 'products', productId);
      await deleteDoc(productRef);
  
      // Eliminar la imagen de Firebase Storage
      await deleteImage(imagePath);
  
      // Actualizar el estado de los productos
      const updatedProducts = products.filter(p => p.id !== productId);
      setProducts(updatedProducts);
  
      // Mostrar mensaje de éxito
      setAlert({
        type: 'success',
        message: 'Producto eliminado correctamente',
        active: true
      });
    } catch (error) {
      console.error("Error al eliminar producto: ", error);
      setAlert({
        type: 'error',
        message: 'Error al eliminar el producto.',
        active: true
      });
    }
  }

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getProductsPagination(lastVisible, searchTerm);
      if (response) {
        const { products: newProducts, lastDoc } = response;
        console.log("Productos cargados:", newProducts); // Para depuración
        setProducts(prevProducts => lastVisible ? [...prevProducts, ...newProducts] : newProducts);
        setLastVisible(lastDoc);
      } else {
        console.error("No se recibieron datos de getProductsPagination");
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    if (products && products.length > 0) {
      setLastVisible(products[products.length - 1]);
    }
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    setProducts([]); // Limpia la lista de productos actual
    setLastVisible(null); // Reinicia la referencia para la paginación
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);
  

  return (
      <>
      <Alert alert={alert} handleClose={toggleAlert} />
      <div className="lg:flex lg:items-center lg:justify-between mb-8">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            List of Products
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setOpen(true)}
            >
              <FcCheckmark className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Add Product
            </button>
          </span>
        </div>
      </div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Descripcion
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <ProductsList key={product.id} product={product} handleDelete={handleDelete} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {!loading && (
        <button onClick={handleLoadMore}>Cargar más</button>
      )}
      <Modal open={open} setOpen={setOpen}>
        <FormProduct setOpen={setOpen} setAlert={setAlert} />
      </Modal>
    </>

  );
}
