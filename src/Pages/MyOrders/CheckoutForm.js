import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/userContext";
import PaymentAnimated from "../Images/Payments Img/debit-vs-credit-card-holiday-shopping.gif";

const CheckoutForm = ({ sum: price, myOrders }) => {
  console.log(myOrders);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionID, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  // const { productsName, price, _id, img } = products;

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientServer));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setSuccess("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // name: productsName,
            email: user?.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email: user?.email,
        // productsId: _id,
      };
      fetch("http://localhost:5000/payment-success-identify", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `bearer ${localStorage.getItem("access-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess(`Congrats! Your Payment Completed`);
            setTransactionId(paymentIntent.id);
          }
        });
    }
    setProcessing(false);
  };

  return (
    <>
      <section>
        <div className="lg:grid lg:grid-cols-12 justify-between items-center lg:h-[70vh]">
          <div className="grid col-span-6 shadow-lg">
            <img className="w-full" src={PaymentAnimated} alt="" />
          </div>
          <div className="grid col-span-6 h-[431px] bg-white lg:shadow lg:pl-10 pl-5">
            <div className="flex lg:items-center items-start">
              <form onSubmit={handleSubmit} className="w-full">
                <div className="py-5 ">
                  <h1 className="text-2xl font-Ubuntu mb-3 text-black">
                    Payment Details
                  </h1>
                  <h2 className="text-black">
                    Total Amount : <strong>$ {price}</strong>
                  </h2>
                </div>
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",

                        "::placeholder": {
                          color: "#000000",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
                <p className="text-red-400 mt-4">{cardError}</p>

                <button
                  className="mt-5 btn btn-accent px-5 rounded-sm"
                  type="submit"
                  disabled={!stripe || !clientSecret || processing}
                >
                  Pay Bill
                </button>

                {success && (
                  <div className="mt-5">
                    <p className="text-green-400">{success}</p>
                    <p className="">
                      Your Transaction Id : <strong>{transactionID}</strong>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
