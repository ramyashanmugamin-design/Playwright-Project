import {test,expect} from '@playwright/test';
import { AuthClient } from '../API Clients/AuthClient';
import { BaseClient } from '../API Clients/BaseClient';
import fs from 'fs';


test("Get all booking id", async ({request})=> {

const baseclient=new BaseClient(request);

const response = await baseclient.getRequest("/booking");

console.log(response);

})

test("Creating access token",async ({request})=>{

    const authclient=new AuthClient(request);

    const authdata= fs.readFileSync('./TestData/Authpayload.json');

    const token = await authclient.createToken(authdata);
    
    console.log("Token is : "+token);

} )

test("Create booking",async ({request})=>{

    const baseclient=new BaseClient(request);

    // reads file as a string
    const data= fs.readFileSync('./TestData/Userpayload.json');

    // Convert string to a JavaScript Object to use the objects nested objects 
    const userdata=JSON.parse(data);

    const response = await baseclient.postRequest("/booking",userdata.create);

    console.log(response);
})

test("Update Booking", async ({request})=>{

     const baseclient=new BaseClient(request);

     const authclient=new AuthClient(request);

     // create token
    const authdata= fs.readFileSync('./TestData/Authpayload.json');
    
    const token = await authclient.createToken(authdata);

    console.log("Token is:" + token);

    // get booking id

    const data= fs.readFileSync('./TestData/Userpayload.json');

    const userdata=JSON.parse(data);

    const booking = await baseclient.postRequest("/booking",userdata.create);

    console.log("Booking details:", booking);

    //update booking

    const updatedbooking = await baseclient.updateRequest("/booking/"+`${booking.bookingid}`,userdata.update,`${token}`);

    console.log("Updated values:",updatedbooking);

})

test("Partial Update", async ({request})=>{

     const baseclient=new BaseClient(request);

     const authclient=new AuthClient(request);

     // create token
    const authdata= fs.readFileSync('./TestData/Authpayload.json');
    
    const token = await authclient.createToken(authdata);

    console.log("Token is:" + token);

    // get booking id

    const data= fs.readFileSync('./TestData/Userpayload.json');

    const userdata=JSON.parse(data);

    const booking = await baseclient.postRequest("/booking",userdata.create);

    console.log("Booking details:", booking);

    //partially update booking

    const partialupdate = await baseclient.partialupdateRequest("/booking/"+`${booking.bookingid}`,userdata.Partialupdate,`${token}`);

    console.log("Partially Updated values:",partialupdate);

})


test.only("Delete booking", async ({request})=>{

     const baseclient=new BaseClient(request);

     const authclient=new AuthClient(request);

     // create token
    const authdata= fs.readFileSync('./TestData/Authpayload.json');
    
    const token = await authclient.createToken(authdata);

    console.log("Token is:" + token);

    // get booking id

    const data= fs.readFileSync('./TestData/Userpayload.json');

    const userdata=JSON.parse(data);

    const booking = await baseclient.postRequest("/booking",userdata.create);

    console.log("Booking details:", booking);

    //Delete booking

    const response = await baseclient.deleteRequest("/booking/"+`${booking.bookingid}`,`${token}`);

    console.log("Record Deleted: status code :",response.status());

    // Verify whether the record is deleted

    const deletedrecord = await baseclient.getRequest("/booking"+`${booking.bookingid}`);

    console.log("Acessing Deleted record: status code :",deletedrecord.status());

})



