import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { Table } from 'react-bootstrap'


export default function Cart() {
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState({})



    useEffect(() => {
        const pCart = JSON.parse(localStorage.getItem('cart'))
        setCart(pCart)
    }, [])

    // const getValueLS = (e) => {
    //     e.preventDefault();
    //     const qtyValue = e.target.value
    //     setQty(qtyValue)
    // }

    const CartProducts = () => {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Product Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Qty
                        </th>
                        <th>
                            Amount
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, index) => {
                        return (
                            <tr>
                                <th>
                                    {++index}
                                </th>
                                <td>
                                    {product.title}
                                </td>
                                <td>
                                    {product.price}
                                </td>
                                <td>
                                    <input type="number" value={qty[index] || 1} onChange={({ target: { value } }) => { setQty({ ...qty, [index]: value }) }}></input>
                                </td>
                                <td>
                                    {product.price * Number(qty[index] || 1)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        )

    }
    return (
        <>
            <CartProducts />
        </>
    )
}

