import React from 'react'
// import { format } from 'date-fns'
import { Link } from 'react-router-dom'
// import { getOrderStatus } from '../lib/helpers'

const recentOrderData = [
	{
		id: '1',
		product_name: 'Abstract 3D',
		stock: '23 in stock',
		price: '$45.99',
		total_sales: '20',
		// order_total: '$435.50',
		// current_order_status: 'PLACED',
		// shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '2',
		product_name: 'Sharpens illustration',
		stock: '23 in stock',
		price: '$45.99',
		total_sales: '20',
	},
	{
		id: '3',
		product_name: '4324',
		stock: '23 in stock',
		price: '$45.99',
		total_sales: '20',
	},
	{
		id: '4',
		product_name: '4324',
		stock: '23 in stock',
		price: '$45.99',
		total_sales: '20',
	},
	{
		id: '5',
		product_name: '4324',
		stock: '23 in stock',
		price: '$45.99',
		total_sales: '20',
	},
	{
		id: '6',
		product_name: '4324',
		stock: '23 in stock',
		price: '$45.99',
		total_sales: '20',
	}
]

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-lg border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Product Sell</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-500">
					<thead>
						<tr>
							<th>ID</th>
							<th>Product Name</th>
							<th>Stock</th>
							<th>Price</th>
							<th>Total Sales</th>
							{/* <th>Shipping Address</th>
							<th>Order Status</th> */}
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.product_name}`}>{order.product_name}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.stock}`}>{order.stock}</Link>
								</td>
								
								<td>{order.price}</td>
								<td>{order.total_sales}</td>
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
