import React from 'react';
import { RefObject } from 'react';
import { createRef } from 'react';
import ReactDOM from 'react-dom';
import {AddData} from './addCust';

export class inputClass{

    private _customerRef:RefObject<AddData>;
    private _orderRef:RefObject<AddData>;

    constructor()
    {
        this._customerRef=createRef<AddData>();
        this._orderRef=createRef<AddData>();
    }
    render():void{
      ReactDOM.render(
        <React.StrictMode>
          <AddData title={"Add Customer"} childProps={[{title:"Id",inputType:"number",errorMessage:"id exists/empty"},
            {title:"First Name",inputType:"string", errorMessage:"empty field"},
            {title:"Last Name",inputType:"string", errorMessage:"empty field"},
            {title:"Date of Birth",inputType:"date", errorMessage:"empty field"},
            {title:"Location",inputType:"string", errorMessage:"empty field"}]
          }  
          sendData={this.sendCustomerData}
          ref={this._customerRef}
        />
        <AddData title={"Add Order"} childProps={[{title:"id",inputType:"number",errorMessage:"id exists/empty"},
            {title:"Customer",inputType:"number",errorMessage:"wrong id"},
            {title:"model",inputType:"number",errorMessage:"empty field"},
            {title:"Order Date",inputType:"date",errorMessage:"empty field"},
            {title:"Delivery Date",inputType:"date",errorMessage:"empty field"},
            {title:"Delivery",inputType:"string",errorMessage:"empty field"}]
            }
            sendData={this.sendOrderData}
            ref={this._orderRef}
        />
        </React.StrictMode>,
        document.getElementById('root')
      );
    }
    
    sendCustomerData(data:Map<string,string>):void{
      data.forEach((key,value)=>{
        console.log(key,value);
      })
    }
    sendOrderData(data:Map<string,string>):void{
        data.forEach((key,value)=>{
          console.log(key,value);
        })
      }
    updateIdOfCustomers(data:Set<number>):void{
        this._customerRef.current?.updateExist(0,data);
        this._orderRef.current?.updateExist(1,data);
    }
    updateIdOfOrders(data:Set<number>):void{
        this._customerRef.current?.updateExist(0,data);
    }
    
  }


