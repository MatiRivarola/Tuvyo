import { db  } from '@firebase/client'
import { addDoc , setDoc, doc , collection, getDocs,  query , orderBy, startAfter, limit, where } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// Funcion para crear un Producto con id automatico
export async function createProduct(data) {
  try {
    const docRef = await addDoc(collection(db, 'products'), data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Funcion para crear o actualizar un Producto
export async function createOrUpdateProduct(id, data) {
  const docRef = doc(db, 'products', id);
  await setDoc(docRef, data);
  console.log('Document written with ID: ', id);
}

export async function fetchCategories() {
  const categoriesCollectionRef = collection(db, 'category');
  const categoriesSnapshot = await getDocs(categoriesCollectionRef);
  const categoriesList = categoriesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return categoriesList;
}

export async function getProducts(){
  const productCollectionRef = collection(db , 'products');
  const productsSnapshot = await getDocs(productCollectionRef);
  const productsList = productsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return productsList;
};

export const getProductsPagination = async (lastVisible, searchTerm) => {
  const productsRef = collection(db, 'products');
  let q = query(productsRef, orderBy('title'), limit(10));

  if (searchTerm) {
    q = query(productsRef, where('title', '==', searchTerm), orderBy('title'), limit(10));
  }

  if (lastVisible) {
    q = query(q, startAfter(lastVisible));
  }

  const snapshot = await getDocs(q);
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  const lastDoc = snapshot.docs[snapshot.docs.length - 1] || null;
  console.log("Esta es la lista de productos",products)
  return { products, lastDoc };
};

export function displayImage(url) {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.appendChild(imgElement);
}


