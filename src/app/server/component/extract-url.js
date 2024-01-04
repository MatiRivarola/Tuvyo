const extractFirebasePathFromURL = (url) => {
  try {
    const urlObj = new URL(url);
    let path = urlObj.pathname;

    // Eliminar el '/o/' del inicio y decodificar el URI
    path = decodeURIComponent(path.split('/o/')[1]);

    // Si hay parámetros adicionales en el path, quítalos
    const indexOfEndToken = path.indexOf('?');
    if (indexOfEndToken !== -1) {
      path = path.substring(0, indexOfEndToken);
    }

    return path;
  } catch (error) {
    console.error("Error al extraer el path de Firebase: ", error);
    return null;
  }
};

export default extractFirebasePathFromURL