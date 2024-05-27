export default async function ProductsPage() {
  const res = await fetch(`http://127.0.0.1:3001/products`);
  const products: TypeProducts[] = await res.json();

  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          className="p-2 m-2 bg-white shadow-md rounded-lg text-gray-700 w-2/5"
        >
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
        </li>
      ))}
    </ul>
  );
}
