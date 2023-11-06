import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import TableComponent from "../../components/dashboard-components/table";
import PieChartComponent from "../../components/dashboard-components/pieChart";
import TableWithProgressBar from "../../components/dashboard-components/tableWithProgress";
import { useEffect, useState } from "react";
import { dashboardCount } from "../../apis/api";
import OrderTable from "../../components/dashboard-components/orderTable";

const Dashboard = () => {

  const [cardsData, setCardsData]=useState<any>([])
  const [productList,setProductList] = useState<any>([])
  const [activeCustomer,setActiveCustomer]=useState<any>(0)
  const [totalCustomer,setTotalCustomer]=useState<any>(0)
  const [saleList,setSaleList]=useState<any>([])
  const [orderList,setOrderList]=useState<any>([])

  const fetchCounts = async()=>{
    const count:any = await dashboardCount()
    setCardsData(count?.data)
    setProductList(count?.list[0]?.productList)
    setSaleList(count?.list[0]?.saleList)
    setOrderList(count?.list[0]?.orderList)
    setActiveCustomer(count?.list[1]?.activeCustomerCount)
    setTotalCustomer( count?.data[0]?.customerCount);
  }

  useEffect(() => {
    fetchCounts();
  }, []);


  const graphData = [
    { year: 2019, value: 100 },
    { year: 2020, value: 50 },
    { year: 2021, value: 20 },
    { year: 2022, value: 55 },
    { year: 2023, value: 30 },
    { year: 2024, value: 30 },
    { year: 2025, value: 30 },
    { year: 2026, value: 30 },
  ];
  return (
    <div className="p-4 mt-14 dark:bg-zinc-900 dark:text-white">
      <h1 className="text-2xl font-bold">Welcome to Dashboard!</h1>
      <section className="grid md:grid-cols-2 xl:grid-cols-4  gap-6 mt-10">
        {cardsData?.map((data:any, index:any) => (
          <div className="flex  dark:bg-zinc-900 dark:text-white items-center p-8 bg-white shadow rounded-lg shadow-card">
            <div className="dark:bg-zinc-700 dark:text-white inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-gray-600 bg-gray-100 rounded-full mr-6">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">{data.customerCount || data.productCount || data.salesCount || data.orderCount} </span>
              <span className="block text-sm text-gray-500">Total {Object.keys(data)[0]} on platform</span>
            </div>
          </div>
        ))}
      </section>
      <section className="grid md:grid-cols-1 xl:grid-cols-2 gap-6 mt-12">
        <div className="shadow-card rounded-lg w-8/14">
          <h1 className="flex pt-2 pl-2 justify-center text-base font-bold mb-6">
            Yearly Graph on Bookings
          </h1>

          <BarChart
            className="pt-2"
            width={600}
            height={300}
            data={graphData}
            margin={{
              top: -63,
              right: 30,
              left: 23,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="year"
              scale="point"
              padding={{ left: 12, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar
              dataKey="value"
              fill="#4e7290"
              background={{ fill: "#d5dce2" }}
            />
          </BarChart>
        </div>
        <div className=" shadow-card  rounded-lg ">
          <h1 className="flex pt-1 justify-center text-base font-bold mb-4">
            Product Details
          </h1>
          <TableComponent  productList={productList} />
        </div>
      </section>
      <section className="grid md:grid-cols-3 xl:grid-cols-3 gap-6 mt-12 mb-14">
        <div className="shadow-card rounded-lg">
          <h1 className="flex pt-1 justify-center text-base font-bold mb-4">
            Total Customer visibility 
          </h1>
          <PieChartComponent activeCustomer={activeCustomer} datas={totalCustomer}/>
        </div>

        <div className="shadow-card rounded-lg">
          <h1 className="flex pt-1 justify-center text-base font-semiBold mb-4">
            Monthly Sellers onBoarded
          </h1>
          <OrderTable orderList={orderList} />
        </div>

        <div className="shadow-card rounded-lg">
          <h1 className="flex pt-1 justify-center text-base font-bold mb-4">
            Sales Details
          </h1>
          <TableWithProgressBar saleList={saleList.slice(0,5)} />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
