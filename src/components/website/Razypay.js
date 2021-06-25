import React from "react"; 
import axios from "axios";

function Razypay() {
    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const result = await axios.get(`http://localhost:1080/auth-app/sdfdf-74/download?user_id=9`,{
            
        });

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { amount, id: order_id, currency } = result.data;
 
        let val=result.data.order_id;
        const options = {
            key: "rzp_test_tzURXA4gSDw99d", // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            // image: { logo }, 
            order_id: order_id, 
            handler: async function (response) { 
                const data = {
                    orderCreationId: val,
                    razorpay_payment_id: response.razorpay_payment_id,
                    // razorpayOrderId: response.razorpay_order_id,
                    // razorpaySignature: response.razorpay_signature,
                    

                }; 
 

                const result = await axios.post("http://localhost:1080/auth-app/payment", data);
 
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    return (
        <div className="App">
            <header className="App-header"> 
                <p>Buy React now!</p>
                <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button>
            </header>
        </div>
    );
} 
export default Razypay;

















 