interface product_property {
  size?: string[];
  color?: color[];
  other?: Record<string, string | number>;
  stock?: StockItem[];
}

interface StockItem {
  size: string;
  color: color;
  quantity: number;
}
