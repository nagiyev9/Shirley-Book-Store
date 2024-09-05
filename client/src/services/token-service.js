const fetchWithToken = async (url, options = {}) => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
  
    if (!accessToken) {
      window.location.href = '/login';
      throw new Error("No access token found!");
    }
  
    let res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        "Authorization": `Bearer ${accessToken}`,
      },
    });
  
    if (res.status === 401 && refreshToken) {
      const refreshRes = await fetch(process.env.REACT_APP_SERVER_URL + "/api/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });
  
      if (refreshRes.status === 200) {
        const { accessToken: newAccessToken } = await refreshRes.json();
  
        localStorage.setItem("accessToken", newAccessToken);
  
        res = await fetch(url, {
          ...options,
          headers: {
            ...options.headers,
            "Authorization": `Bearer ${newAccessToken}`,
          },
        });
      } else {
        window.location.href = '/login';
        throw new Error("Failed to refresh token");
      }
    }
  
    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Network response was not ok: ${errorText}`);
    }
  
    try {
      return await res.json();
    } catch (error) {
      throw new Error(`Failed to parse JSON: ${error.message}`);
    }
  };
  
  export default fetchWithToken;
  