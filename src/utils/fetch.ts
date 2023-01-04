import { useState } from "react";
import axios from "axios";

class FETCH {
  GET(url: string): string {
    const [data, setData] = useState<string>("");
    try {
      axios.get(url).then((value: any | JSON) => setData(value.data));
    } catch (err) {
      console.log(err);
    }

    return data;
  }

  POST() {}
}

export default new FETCH();
