import {
  createProduct,
  fetchCategories
} from "@server/function";
import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@firebase/config/client";
import { Progress } from "@nextui-org/react";

export default function FormProduct({setOpen, setAlert, onClose}) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    images: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      const parsedValue = parseFloat(value);
      setFormData({
        ...formData,
        [name]: isNaN(parsedValue) ? "" : parsedValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFormData((prevFormData) => ({
    ...prevFormData,
    category: value,
  }));
  };

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = "";
    if (file) {
      try {
        imageUrl = await uploadImage(file);
      } catch (error) {
        console.error("Error uploading image: ", error);
        setAlert({
          active: true,
          message: error.message,
          type: "error",
          autoClose: false,
        });
        return;  // Early return in case of error
      }
    }

    createProduct({ ...formData, images: imageUrl })
      .then(() => {
        setAlert({
          active: true,
          message: "Producto agregado exitosamente",
          type: "success",
          autoClose: false,
        });
        setOpen(false);
      })
      .catch(error => {
        console.error("Error creating product: ", error);
        setAlert({
          active: true,
          message: error.message,
          type: "error",
          autoClose: false,
        });
      });
  };



  async function uploadImage(file) {
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          reject(error);
          // Aca mas adelante agregar los diferentes tipos de errores
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleCategoryChange}
                autoComplete="category-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                autoComplete="description"
                rows={3}
                className="form-textarea mt-1 block w-full focus:ring-indigo-500 focus:border-indigo-500  shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div className="col-span-6">
              <div>
                <Progress
                  label="Cargando imagen"
                  value={uploadProgress}
                  color={"default"}
                  showValueLabel={true}
                />
                <label className="block text-sm font-medium text-gray-700">
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 "
                      >
                        <span>Upload a file</span>
                        <input
                          id="images"
                          name="images"
                          type="file"
                          onChange={(e)=> setFile(e.target.files[0])}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={onClose}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
