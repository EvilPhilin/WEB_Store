import {Customer,Order,Item} from "./commonClasses"


interface IDataBaseController{
    notifyPushCustomer(cust:Customer):void;
    notifyPushOrder(order:Order):void;
    notifyGetOrderInfo(orderId:number):Order;
    notifyGetItemInfdadawdao(itemId:number):void;
    notifyGetListOfItems():Array<Item>;
    notifyGetCustomerOrders(custId:number):Array<Order>
    notifyGetIdOfCustomers():Set<number>
    notifyGetIdOfOrders():Set<number>
    
}

interface IViewController{
    updateOrderInfo(order:Order):void;
    updateItemInfo(item:Item):void;
    updateListOfItems(items:Array<Item>):void;
    updateCustomerOrders(orders:Array<Order>):void;
}