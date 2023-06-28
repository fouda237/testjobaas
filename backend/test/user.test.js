const request= require("supertest")
let server;
const User=require("../models/user")
const validUser={
    "firstname":"fouda",
    "lastname":"atangana",
    "email":"fjeanluc83@gmail.com",
    "phone":"+237699688540",
    "adress":"emana"
}
describe('user', ()=>{
    beforeEach(()=>{
       server=require("../index");
    })
    afterEach(()=>{
    //   const clo=server.Close()
    //   clo();
      User.collection.deleteMany();
    })
   describe("Post /addusers",()=>{
   it("should return a status 401 if joi validation kicks",async()=>{
     const response =await request(server)
       .post("/addusers")
       .send({})
       .set({Accept:"Application/json"})
    //  expect(response.status).toBe(401); 
   })
   it("should create a user and return a status 201",async()=>{
    const response= await request(server)
       .post("/addusers")
       .send(validUser)
       .set({Accept:"Application/json"})
    //    expect(response.status).toBe(201)
    //    expect(response.body).toMatchObject({message:"User Created!"})
   })
  
})
describe("Patch /addusers/:id",()=>{
    it("should return a status 401 if joi validation kicks",async()=>{
      const response =await request(server)
        .patch("/addusers/:id")
        .send({})
        .set({Accept:"Application/json"})
     //  expect(response.status).toBe(401); 
    })
    it("should create a user and return a status 201",async()=>{
     const response= await request(server)
        .patch("/addusers/:id")
        .send(validUser)
        .set({Accept:"Application/json"})
     //    expect(response.status).toBe(201)
     //    expect(response.body).toMatchObject({message:"User Created!"})
    })
 })
 describe("Get /users",()=>{
    it("should return a status 401 if joi validation kicks",async()=>{
      const response =await request(server)
        .get("/users")
        .send({})
        .set({Accept:"Application/json"})
     //  expect(response.status).toBe(401); 
    })
   
 })
 describe("Get /users/:id",()=>{
    it("should return a status 401 if joi validation kicks",async()=>{
      const response =await request(server)
        .get("/users/:id")
        .send({})
        .set({Accept:"Application/json"})
     //  expect(response.status).toBe(401); 
    })
   
 })
 
})