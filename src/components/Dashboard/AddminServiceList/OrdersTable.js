import React from 'react';
import './OrdersTable.css'

const OrdersTable = ({ ordersList }) => {

    return (
        <div className="bg-white m-3 rounded h-100">
            <div className="p-3">
                <table className="table text-center table-borderless ">
                    <thead className="thead-light">
                        <tr className="text-center ">
                            <th scope="col">Name</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {
                        ordersList && ordersList.map((order) => <tbody>
                            <tr>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.title}</td>
                                <td className="w-25">{order.details}</td>
                                <td className="">
                                    <select className="status-change" name="status">
                                        <option className="text-danger" value="pending">Pending</option>
                                        <option value="done">Done</option>
                                    </select>
                                </td>

                            </tr>
                        </tbody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default OrdersTable;