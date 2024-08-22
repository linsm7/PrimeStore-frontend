import { api } from "@/services/api";

export interface Product {
  id: string
  name: string
  description: string
  price: string
  count: number
  image: string
  active: boolean
  category: {
    name: string
  }
}

export class ProductService {
  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await api.get("/products")
      return response.data
    } catch (error) {
      console.error("Failed to fetch products:", error)
      return []
    }
  }

  calculateTotalValue(products: Product[]): number {
    return products.reduce((total, product) => {
      const price = parseFloat(product.price.replace('.', '').replace(',', '.'))
      return total + (product.count * price)
    }, 0)
  }

  calculateTotalQuantity(products: Product[]): number {
    return products.reduce((total, product) => total + product.count, 0)
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  getStatusInfo(isActive: boolean): { text: string, className: string } {
    return {
      text: isActive ? 'Ativo' : 'Inativo',
      className: isActive ? 'text-xs bg-green-200 text-center rounded inline-block' : 'text-xs bg-red-200 text-center rounded inline-block'
    }
  }
}
