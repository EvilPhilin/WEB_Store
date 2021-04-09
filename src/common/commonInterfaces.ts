import {Customer,Order,Item} from "./generalClasses"


interface IDataBaseController{
    notifyPushCustomer(cust:Customer):void;
    notifyPushOrder(order:Order):void;
    notifyGetOrderInfo(orderId:number):Order;
    notifyGetItemInfo(itemId:number):void;
    notifyGetListOfItems():Array<Item>;
    notifyGetCustomerOrders(custId:number):Array<Order>
    
}

interface IViewController{
    updateOrderInfo(order:Order):void;
    updateItemInfo(item:Item):void;
    updateListOfItems(items:Array<Item>):void;
    updateCustomerOrders(orders:Array<Order>):void;
}