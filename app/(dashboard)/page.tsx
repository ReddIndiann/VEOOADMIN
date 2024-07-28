import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { File, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductsTable } from './products-table';

export default function ProductsPage({
  searchParams
}: {
  searchParams: { q: string; offset: string };
}) {
  const search = searchParams.q ?? '';
  const offset = parseInt(searchParams.offset ?? '0');

  const dummyProducts = [
    {
      id: 1,
      name: 'Product 1',
      status: 'Available',
      price: '$10.00',
      totalSales: 100,
      createdAt: '2023-01-01'
    },
    {
      id: 2,
      name: 'Product 2',
      status: 'Out of Stock',
      price: '$15.00',
      totalSales: 50,
      createdAt: '2023-02-01'
    },
    {
      id: 3,
      name: 'Product 3',
      status: 'Available',
      price: '$20.00',
      totalSales: 200,
      createdAt: '2023-03-01'
    },
    {
      id: 4,
      name: 'Product 4',
      status: 'Available',
      price: '$25.00',
      totalSales: 150,
      createdAt: '2023-04-01'
    },
    {
      id: 5,
      name: 'Product 5',
      status: 'Out of Stock',
      price: '$30.00',
      totalSales: 75,
      createdAt: '2023-05-01'
    }
  ];

  const totalProducts = dummyProducts.length;
  const productsPerPage = 5;
  const newOffset = Math.min(offset + productsPerPage, totalProducts);

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="draft">Draft</TabsTrigger>
          <TabsTrigger value="archived" className="hidden sm:flex">
            Archived
          </TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Button size="sm" className="h-8 gap-1">
            <PlusCircle className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </div>
      </div>
      <TabsContent value="all">
        <ProductsTable
          products={dummyProducts}
          offset={newOffset}
          totalProducts={totalProducts}
        />
      </TabsContent>
    </Tabs>
  );
}
