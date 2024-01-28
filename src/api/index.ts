const BASE_URL: string = import.meta.env.VITE_API_URL;

export const api = {
  getSneakers: async (params?: Record<string, any>): Promise<any> => {
    const url = new URL("/sneakers", BASE_URL);
    if (params) {
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  },
};
