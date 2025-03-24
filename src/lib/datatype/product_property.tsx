interface product_property {
  size?: any[];
  color?: any[] ;
  other?: Record<string, string | number>;
  stock?: StockItem[];
}

interface StockItem {
  size: string;
  color: color;
  quantity: number;
}
