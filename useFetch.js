/*import { useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPanding, setIsPanding] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      
      const abortCon = new AbortController();
      
      setTimeout(() => {
          fetch(url, { signal: abortCon.signal })
          .then(res => {
           if(!res.ok) {
            throw Error('Ne moze da nadje nikakve podatke');
          }
              return res.json();
           })
            .then(data => {
              setData(data);
              setError(null);
              setIsPanding(false);
             })
             .catch(err => {
              if (err.name === 'AbortError'){
                console.log('Fetch je ponisten')
              } else {
                setIsPanding(false);
                setError(err.message);
                
              }
             });
      }, 1000);
      return () => abortCon.abort();
    },[url]);
    
    return {data, isPanding, error};

};

export default useFetch;*/

import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Ne moze da nadje nikakve podatke");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
          setIsPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch je ponisten");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
