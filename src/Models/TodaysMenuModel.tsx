export class MenuItem {
  item_id: string;
  name: string;
  price: number;
  description: string;
  item_image_url: string;

  constructor(data: any) {
    this.item_id = data.item_id;
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.item_image_url = data.item_image_url;
  }
}

export class Category {
  category_id: string;
  name: string;
  items: MenuItem[];

  constructor(data: any) {
    this.category_id = data.category_id;
    this.name = data.name;
    this.items = data.items.map((item: any) => new MenuItem(item));
  }
}
