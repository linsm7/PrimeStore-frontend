import { ProductService, Product } from "@/services/products/ProductService";

import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default async function Products() {
  const productService = new ProductService()
  const products: Product[] = await productService.fetchProducts()
  const activeProducts = products.filter((product) => product.active)
  const inactiveProducts = products.filter((product) => !product.active)

  const totalValueStock = productService.calculateTotalValue(activeProducts)
  const totalActiveQuantityStock = productService.calculateTotalQuantity(activeProducts)
  const totalInactiveQuantityStock = productService.calculateTotalQuantity(inactiveProducts)

  return (
    <div className="mb-10">
      <div className="bg-psColor-500 flex items-center justify-center">
        <h1 className="text-white text-3xl font-medium p-10 mb-14">Produtos</h1>
      </div>

      <div className="flex flex-col gap-6 md:px-24 px-5">
        <div className="flex flex-col md:flex-row items-center justify-evenly gap-2 md:gap-4 lg:gap-8 -mt-12">
          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Total de ativos</CardTitle>
              <CardDescription>Quantidade total de produtos ativos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{totalActiveQuantityStock}</p>
            </CardContent>
          </Card>

          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Total de inativos</CardTitle>
              <CardDescription>Quantidade total de produtos inativos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{totalInactiveQuantityStock}</p>
            </CardContent>
          </Card>

          <Card className="w-full md:w-1/3">
            <CardHeader>
              <CardTitle>Valor de estoque</CardTitle>
              <CardDescription>Valor total da quantidade de produtos ativos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{productService.formatCurrency(totalValueStock)}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white flex justify-between p-6 gap-2">
          <Input className="w-2/3" />
          <Sheet>
            <SheetTrigger>
              Criar produto
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </Card>

        <Card className="p-10">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Quantidade</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                const { text, className } = productService.getStatusInfo(product.active)
                return (
                  <TableRow key={product.id}>
                    <TableCell className="truncate max-w-64">{product.name}</TableCell>
                    <TableCell className="truncate max-w-64">{product.description}</TableCell>
                    <TableCell>{product.category.name}</TableCell>
                    <TableCell>{product.count}</TableCell>
                    <TableCell><p className={className}>{text}</p></TableCell>
                    <TableCell>R$ {product.price}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
