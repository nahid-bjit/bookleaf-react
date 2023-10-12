import React, { useEffect, useState } from 'react';
import { getUserTransection } from '../store/cartActions';

export default function CheckoutPage() {
    const [transData, setTransData] = useState([]);

    const getUserTransections = async () => {
        try {
            const response = await getUserTransection();
            console.log(response);
            setTransData(response.data.result);
        } catch (error) {
            console.error('Error fetching transaction data:', error);
        }
    }

    useEffect(() => {
        getUserTransections();
    }, []);

    return (
        <div>
            <h1>Your Last Transection</h1>
            {transData.length > 0 && <p><p>User: {transData[transData.length - 1].user}</p>
                <p>Total: {transData[transData.length - 1].total}</p>
                <p>Payment Method: {transData[transData.length - 1].paymentMethod}</p>
                <p>Created At: {transData[transData.length - 1].createdAt}</p>
                <p>Updated At: {transData[transData.length - 1].updatedAt}</p>
                <p> Total: {transData[transData.length - 1].total}</p>
            </p>}
            <hr />

            <h1>Your Previous Transections</h1>
            {transData.length > 0 && transData.map((transaction, index) => (
                <div key={transaction._id}>
                    <h3>Transaction {index + 1}</h3>
                    <p>User: {transaction.user}</p>
                    <p>Total: {transaction.total}</p>
                    <p>Payment Method: {transaction.paymentMethod}</p>
                    <p>Created At: {transaction.createdAt}</p>
                    <p>Updated At: {transaction.updatedAt}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}
