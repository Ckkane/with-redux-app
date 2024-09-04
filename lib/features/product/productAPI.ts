// A mock function to mimic making an async request for data

  declare global {
    type Product = {
        _id: string,
        title: string,
        imgUrl: string,
        description: string,
        price: number,
        popular: number,
        rating: number,
        count: number,
        discount: number
      }
  }

export const fetchData = async () => {
    const response = await fetch("https://65f96b77df15145246119120.mockapi.io/Reactjs", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const result: { data: Array<Product> } = await response.json();

    return result;
  };