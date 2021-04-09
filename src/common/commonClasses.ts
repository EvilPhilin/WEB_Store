export class Customer {
  constructor(
    private _id: number,
    private _firstName: string = "None",
    private _lastName: string = "None",
    private _birthDate: string = "01/01/1900",
    private _location: string = "Karaganda"
  ) {}

  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  get birthDate(): string {
    return this._birthDate;
  }
  get location(): string {
    return this._location;
  }
  get id(): number {
    return this._id;
  }

  set firstName(str: string) {
    this._firstName = str;
  }
  set lastName(str: string) {
    this._lastName = str;
  }
  set birthDate(str: string) {
    this._birthDate = str;
  }
  set location(str: string) {
    this._location = str;
  }
}

export class Item {
  constructor(
    private _id: number,
    private _name: string = "None",
    private _price: number = 0,
    private _categoryId: number
  ) {}

  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  get categoryId(): number {
    return this._categoryId;
  }
  get price(): number {
    return this._price;
  }

  set name(str: string) {
    this._name = str;
  }
  set categoryId(n: number) {
    this._categoryId = n;
  }
  set price(n: number) {
    this._price;
  }
}

class Category {
  constructor(private _id: number, private _name: string = "None") {}
  get id(): number {
    return this._id;
  }
  get name(): string {
    return this._name;
  }
  set name(str: string) {
    this._name = str;
  }
}

export class Order {
  private _sum:number;
  constructor(
    private _orderId: number,
    private _custId: number,
    private _items: Array<Item> = [],
    private _date: string = "None"
  ) {
    this._sum = 0;
    for (var el of this._items) this._sum += el.price;
  }
  pushItem(item: Item): void {
    this._items.push(Object.assign({}, item));
    this._sum+=item.price;
  }
  get sum(): number {
    return this._sum;
  }
  get date(): string {
    return this._date;
  }
  set date(date: string) {
    this._date = date;
  }
}
