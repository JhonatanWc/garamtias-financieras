
import { useState, useEffect } from "react";
import axios from "axios";
import { useCallback } from "react";
export const useFetch = (url, headers = {}, initialValue) => {
  const [data, setData] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(url, {
        headers: headers,
      });
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return { loading, data };
};