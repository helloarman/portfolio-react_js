import Card from "../component/Card";

export const Products = () => {
  const products = [
    {
      id: "1",
      image: "image1.jpg",
      title: "Product 1",
      description: "This is the description for Product 1",
      rating: "4.5",
      price: "19.99",
    },
    {
      id: "2",
      image: "image2.jpg",
      title: "Product 2",
      description: "This is the description for Product 2",
      rating: "3.8",
      price: "12.99",
    },
    {
      id: "3",
      image: "image3.jpg",
      title: "Product 3",
      description: "This is the description for Product 3",
      rating: "4.2",
      price: "15.99",
    },
    {
      id: "4",
      image: "image4.jpg",
      title: "Product 4",
      description: "This is the description for Product 4",
      rating: "4.7",
      price: "24.99",
    },
    {
      id: "5",
      image: "image5.jpg",
      title: "Product 5",
      description: "This is the description for Product 5",
      rating: "3.5",
      price: "9.99",
    },
    {
      id: "6",
      image: "image6.jpg",
      title: "Product 6",
      description: "This is the description for Product 6",
      rating: "4.1",
      price: "16.99",
    },
    {
      id: "7",
      image: "image7.jpg",
      title: "Product 7",
      description: "This is the description for Product 7",
      rating: "4.9",
      price: "29.99",
    },
    {
      id: "8",
      image: "image8.jpg",
      title: "Product 8",
      description: "This is the description for Product 8",
      rating: "3.2",
      price: "8.99",
    },
    {
      id: "9",
      image: "image9.jpg",
      title: "Product 9",
      description: "This is the description for Product 9",
      rating: "4.6",
      price: "21.99",
    },
    {
      id: "10",
      image: "image10.jpg",
      title: "Product 10",
      description: "This is the description for Product 10",
      rating: "4.6",
      price: "21.99",
    },
  ];
  return (
    <>
      <div className="container m-auto">
        <div className="my-5 flex flex-wrap gap-4 items-center">
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};
