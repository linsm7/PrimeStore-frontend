import { CardProduct } from "@/components/cards/product";
import { ProductService } from "@/services/products/ProductService";

const baseURL = "http://localhost:3333";

export default async function Products() {
  const productService = new ProductService()
  const products = await productService.fetchProducts()
  const activeProducts = products.filter((product) => product.active)

  return (
    <div className="md:px-24 px-5 mt-10">         
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          {activeProducts.map((product) => (
            <CardProduct
              key={product.id}
              image={`${baseURL}/images/${product.image}`}
              name={product.name}
              price={product.price}
              category_name={product.category.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
