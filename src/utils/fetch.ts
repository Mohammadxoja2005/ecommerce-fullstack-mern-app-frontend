import { useState, useEffect } from "react";
import axios from "axios";

class FETCH {
  GET<T>(url: string): Array<T> {
    const [data, setData] = useState<Array<T>>([]);

    useEffect(() => {
      try {
        axios.get(url).then((value: any | JSON) => setData(value.data));
      } catch (err) {
        console.error(err);
      }
    }, []);

    return data;
  }

  POST<T>(url: string, body?: object): Array<T> {
    const [data, setData] = useState<Array<T>>([]);
    
    useEffect(() => {
      try {
        axios.post(url).then((value: any | JSON) => setData(value.data));
      } catch (err) {
        console.error(err);
      }
    }, []);

    return data;
  }
}

export default new FETCH();
