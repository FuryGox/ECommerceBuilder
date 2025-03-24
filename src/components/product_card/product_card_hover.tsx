import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Eye, Heart, Scales } from '@phosphor-icons/react';
import { useCart } from '../provider/cart-provider';
import { getProducts } from '@/lib/api/product';
import { product_data } from '@/lib/datatype/product';

const product_list_example: product_data[] = await getProducts(20) 

const ProductActions = ({ productId }: {productId: string | number}) => {
  const {addToCart} = useCart();
  const handleAddToCart = (e:any) => {
    e.stopPropagation();
    const product = product_list_example.find(
      (product) => product.id === productId
    );
    if (product != undefined){
      addToCart(
        {
          id: product.id,
          name: product.name,
          price: product.sale_price? product.sale_price : product.price,
          quantity: 1,
          images: product.image,
          option: {
            size: product.property?.size?.[0] ?? "_",
            color: product.property?.color?.[0] ?? "_",
          }
        }
      )
    }

  };

  const actions = [
    { icon: <Heart size={24} />, label: 'Favorite', hoverClass: 'hover:text-red-500' },
    { icon: <Eye size={24} />, label: 'QuickView' },
    { icon: <Scales size={24} />, label: 'Compare price' },
  ];

  return (
    <div className="absolute inset-0 rounded-2xl overflow-hidden flex opacity-0 group-hover:z-20 group-hover:opacity-100 transition-opacity duration-300">
      <div className="w-full h-full">
        <div className="flex flex-col h-10/12 items-end justify-start">
          {actions.map((action, index) => (
            <HoverCard key={index} openDelay={0} closeDelay={0}>
              <HoverCardTrigger className="w-fit">
                <Button className={`bg-foreground rounded-none love transition-colors duration-300 ${action.hoverClass || ''}`}>
                  {action.icon}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="left" className="w-fit h-fit py-1">
                {action.label}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
        <div className="h-2/12 flex flex-col justify-end">
          <Button className="w-full rounded-none  items-end hover:bg-amber-200" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductActions;