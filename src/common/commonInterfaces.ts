import { Customer, Order, Item } from "./commonClasses";

interface IDataBaseController {
  notifyPushCustomer(cust: Customer): void;
  notifyPushOrder(order: Order): void;
  notifyGetOrderInfo(orderId: number): void;
  notifyGetItemInfo(itemId: number): void;
  notifyGetListOfItems(): void;
  notifyGetCustomerOrders(custId: number): void;
  notifyGetIdOfCustomers(): void;
  notifyGetIdOfOrders(): void;
}

interface IViewController {
  updateOrderInfo(order: Order): void;
  updateItemInfo(item: Item): void;
  updateListOfItems(items: Array<Item>): void;
  updateCustomerOrders(orders: Array<Order>): void;
  updateIdOfCustomers(data: Set<number>): void;
  updateIdOfOrders(data: Set<number>): void;
}
