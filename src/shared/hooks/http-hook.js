import { useState, useCallback } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [show, setShow] = useState(false);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err) {
        setErrorMessage(err.message);
        setIsLoading(false);
        setShow(true);
        throw err;
      }
    },
    []
  );

  return { isLoading, errorMessage, show, sendRequest, setShow };
};
