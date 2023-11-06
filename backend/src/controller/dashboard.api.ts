import { Request, Response } from "express";
import { MongoClient } from "mongodb";

export class ApiController {
  public static async dashboardCounts(req: Request, res: Response) {
    try {
      const options: any = { useUnifiedTopology: true };
      const uri: any = process.env.MONGODB_URI;
      const client = new MongoClient(uri, options);
      let query = {};
      await client.connect();

      const database = client.db("dashboard");

      //   Customer Counts
      const customerCollection = database.collection("customers");
      const customerCount = await customerCollection.countDocuments();

      //   Product Count
      const productCollection = database.collection("products");
      const productCount = await productCollection.countDocuments();

      //   Sales Count
      const salesCollection = database.collection("sales");
      const salesCount = await salesCollection.countDocuments();

      //   Orders Count
      const orderCollection = database.collection("orders");
      const orderCount = await orderCollection.countDocuments();

    //   Product List
      const productList = await productCollection.find({}).toArray() 

    //   Active customer Counts
        const activeCustomerCount = await customerCollection.countDocuments({Active:true}) 

        // Sales List
        const saleList = await salesCollection.find({}).toArray()

        // Order List
        const orderList = await orderCollection.find({}).toArray()


      return res.status(200).json({
        status: true,
        data: [
          { customerCount: customerCount },
          { productCount: productCount },
          { salesCount: salesCount },
          { orderCount: orderCount },
        ],
        list:[
           { productList,saleList,orderList},
          {activeCustomerCount:activeCustomerCount}

        ],
        message: "Data fetched successfully.",
      });
    } catch (err: any) {
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}
