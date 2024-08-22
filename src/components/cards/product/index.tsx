import { Card, CardTitle, CardDescription, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProductProps {
    image: string;
    name: string;
    price: string;
    category_name: string;
}

export function CardProduct({ image, name, price, category_name }: CardProductProps) {
    return (
        <div>
            <Card className="w-80 max-h-[600px] rounded-xl flex flex-col">
                <CardHeader className="p-0 w-full h-44 relative">
                    <img
                        className="absolute inset-0 w-full h-full object-cover rounded-t-xl"
                        src={image}
                        alt={name}
                    />
                </CardHeader>
                <CardContent className="flex flex-col gap-4 p-6 flex-1">
                    <CardTitle className="text-base text-gray-700 line-clamp-2 h-12">
                        {name}
                    </CardTitle>
                    <CardDescription className="text-2xl font-semibold text-gray-900">
                        {price}
                    </CardDescription>
                    <CardDescription className="text-xs">
                        <span className="bg-gray-200 px-2 inline-block rounded">
                            {category_name}
                        </span>
                    </CardDescription>
                    <Button className="bg-psColor-300 hover:bg-psColor-400 rounded text-white">
                        Ver produto
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
