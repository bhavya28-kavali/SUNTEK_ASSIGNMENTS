function Product({ product }) {
  const { name, price, brand, description, image } = product;

  return (
    <div className="bg-white shadow-md rounded-xl p-4 
                    hover:shadow-xl transition duration-300">

      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-500 text-sm">{brand}</p>
      <p className="text-blue-600 font-bold mt-1">${price}</p>

      <p className="text-sm text-gray-600 mt-2">
        {description}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;