import {test,expect} from '@playwright/test';
import { AuthClient } from '../API Clients/AuthClient';
import { BaseClient } from '../API Clients/BaseClient';
import fs from 'fs';


test("Get all booking id", async ({request})=> {

const baseclient=new BaseClient(request);

const response = await baseclient.getRequest("/booking");

await expect(response.status()).toBe(200);

await expect(response.statusText()).toBe("OK");

const jsonresponse = await response.json();

await expect(jsonresponse.bookingid).not.toBeNull();

})

test("Creating access token",async ({request})=>{

    const authclient=new AuthClient(request);

    const authdata= fs.readFileSync('./TestData/Authpayload.json');

    const token = await authclient.createToken(authdata);

    await expect(token).not.toBeNull();
    
    console.log("Token is : "+token);

} )

test("Create booking",async ({request})=>{

    const baseclient=new BaseClient(request);

    // reads file as a string
    const data= fs.readFileSync('./TestData/Userpayload.json');

    // Convert string to a JavaScript Object to use the objects nested objects 
    const userdata=JSON.parse(data);

    const response = await baseclient.postRequest("/booking",userdata.create);

    const jsonresponse = await response.json();

    console.log(jsonresponse);

   await expect(jsonresponse.bookingid).not.toBeNull();

   await expect(jsonresponse.booking.firstname).toBe(userdata.create.firstname);

   await expect(jsonresponse.booking.lastname).toBe(userdata.create.lastname);

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

    const response = await baseclient.postRequest("/booking",userdata.create);

    const booking = await response.json();

    console.log("Booking details:", booking);

    //update booking

    const updatedresponse = await baseclient.updateRequest("/booking/"+`${booking.bookingid}`,userdata.update,`${token}`);

    const updatedbooking = await updatedresponse.json();

    console.log("Updated values:",updatedbooking);

    await expect(updatedbooking.totalprice).toBe(userdata.update.totalprice);

    await expect(updatedbooking.additionalneeds).toBe(userdata.update.additionalneeds);

    await expect(updatedresponse.status()).toBe(200);

   await expect(updatedresponse.statusText()).toBe("OK");

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

    const response = await baseclient.postRequest("/booking",userdata.create);

    const booking = await response.json();

    console.log("Booking details:", booking);

    //partially update booking

    const partialresponse = await baseclient.partialupdateRequest("/booking/"+`${booking.bookingid}`,userdata.Partialupdate,`${token}`);

    const partialupdate = await partialresponse.json();

    console.log("Partially Updated values:",partialupdate);

    await expect(partialresponse.status()).toBe(200);

    await expect(partialresponse.statusText()).toBe("OK");

})


test("Delete booking", async ({request})=>{

     const baseclient=new BaseClient(request);

     const authclient=new AuthClient(request);

     // create token
    const authdata= fs.readFileSync('./TestData/Authpayload.json');
    
    const token = await authclient.createToken(authdata);

    console.log("Token is:" + token);

    // get booking id

    const data= fs.readFileSync('./TestData/Userpayload.json');

    const userdata=JSON.parse(data);

    const response = await baseclient.postRequest("/booking",userdata.create);

    const booking = await response.json();

    console.log("Booking details:", booking);

    //Delete booking

    const deleteresponse = await baseclient.deleteRequest("/booking/"+`${booking.bookingid}`,`${token}`);

    console.log("Record Deleted: status code :",deleteresponse.status());

    // Verify whether the record is deleted

    const deletedrecord = await baseclient.getRequest("/booking"+`${booking.bookingid}`);

    console.log("Acessing Deleted record: status code :",deletedrecord.status());

})



