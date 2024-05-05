import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (API_URL) => {
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setProductData(response.data);  // Assuming you only need the data part
        
      } catch (error) {
       
        setProductData({});  // Reset data on error
      } 
    };

    fetchData();
  }, [API_URL]);  // Dependency array includes API_URL to re-fetch if URL changes

  return  productData;  // Return state in an object
}

export default useFetch;
