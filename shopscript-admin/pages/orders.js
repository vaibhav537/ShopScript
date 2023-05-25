import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("/api/orders").then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <Layout>
      <h1>Orders</h1>
      <div className="relative w-[70rem] z-10 md:mx-auto mt-10 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-[70rem] text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Recipient
              </th>
              <th scope="col" className="px-6 py-3">
                Products
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((order, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {new Date(order.createdAt).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      {order.name}
                      {order.email} <br />
                      {order.city} {order.postalCode} {order.country} <br />
                      {order.streetAddress}
                    </td>
                    <td className="px-6 py-4 w-full">
                      {order.line_items.map((l) => (
                        <React.Fragment key={l}>
                          {l.price_data.product_data.name} X {l.Quantity} <br />
                        </React.Fragment>
                      ))}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default orders;
