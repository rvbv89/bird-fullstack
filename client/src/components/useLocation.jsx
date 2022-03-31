import React, { useEffect, useState } from "react";

export const useLocation = () => {
  const [error, setError] = useState();
  const [location, setLocation] = useState();

  const handleSuccess = (pos) => {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err) => {
    setError(err.message);
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { location, error };
};
