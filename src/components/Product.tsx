import { Link } from "react-router-dom";

const products = [
  {
    _id: "1",
    name: "Milk",
    description: "Fresh cow's milk.",
    price: 50,
    images: [
      {
        secure_url:
          "https://adeeg.com/cdn/shop/collections/thumbnails-02.jpg?v=1689765014",
      },
    ],
  },
  {
    _id: "2",
    name: "Oil",
    description: "Pure vegetable oil.",
    price: 100,
    images: [
      {
        secure_url:
          "https://www.pngitem.com/pimgs/m/56-564692_sunflower-oil-png-background-image-cooking-oil-bottle.png",
      },
    ],
  },
  {
    _id: "3",
    name: "Chocolate",
    description: "Delicious dark chocolate.",
    price: 150,
    images: [
      {
        secure_url:
          "https://images.mango-prod.siammakro.cloud/SOURCE/227e741812dd41379fa0a155ea2b86ac",
      },
    ],
  },
  {
    _id: "5",
    name: "Cheese",
    description: "Aged cheddar cheese.",
    price: 200,
    images: [
      {
        secure_url:
          "https://dairyfarmersofcanada.ca/sites/default/files/styles/product_step/public/product_cheese_step3_image.jpg?itok=aKZvogMq",
      },
    ],
  },
];

function Product() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
      {products.map((product) => {
        return (
          <div
            key={product._id}
            className="group relative bg-white border rounded-lg shadow overflow-hidden"
          >
            <div className="relative">
              <img
                src={product.images[0].secure_url}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-700 bg-opacity-80 text-white hover:text-primary text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link to={`/product/${product._id}`} className="w-full py-2">
                  Show Details
                </Link>
              </div>
            </div>
            <div className="px-4 pt-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold truncate">{product.name}</h2>
              <button className="far fa-heart border rounded-full px-2 py-1 text-xl"></button>
            </div>
            
              <p className="mt-2 text-gray-600 truncate px-4 pb-4">
                {product.description}
              </p>
            
          </div>
        );
      })}
    </div>
  );
}

export default Product;
