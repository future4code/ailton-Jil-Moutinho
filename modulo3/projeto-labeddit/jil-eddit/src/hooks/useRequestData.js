import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    axios.get(url , {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: 'Error!',
          text: `Ocorreu um erro, tente novamente. Erro ${err}`,
          icon: 'error',
          confirmButtonText: 'Sad, but ok!'
        })
        /* alert('Ocorreu um erro, tente novamente') */
      })
  }, [url])

  return (data)
}

export default useRequestData;