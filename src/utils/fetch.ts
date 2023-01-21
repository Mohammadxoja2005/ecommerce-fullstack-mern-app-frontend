import { useState, useEffect } from "react";
import axios from "axios";

class FETCH {
  GET<T>(url: string): Array<T> {
    const [data, setData] = useState<Array<T>>([]);

    useEffect(() => {
      axios.get(url)
        .then((value: any | JSON) => setData(value.data))
        .catch(error => console.log(error));
    }, []);

    return data;
  }

  POST<T>(url: string, body?: object): Promise<Array<T>> {
    return new Promise((resolve, reject) => {
      // useEffect(() => {
        axios.post(url, body)
          .then((value: any | JSON) => resolve(value.data))
          .catch(error => reject(error));
      // }, [url])
    })
  }
}

export default new FETCH();
