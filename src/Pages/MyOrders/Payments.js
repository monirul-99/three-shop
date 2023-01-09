import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { MagicSpinner } from "react-spinners-kit";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  // const products = useLoaderData();
  // const Navigation = useNavigation();
  // const { productsName } = products;
  // if (navigation.state === "loading") {
  //   return <Spinner />;
  // }

  const url = `http://localhost:5000/orders-products`;
  const { data: myOrders = [], isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(url, {});
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="h-screen w-screen z-50 flex justify-center items-center  container mx-auto">
        <MagicSpinner size={100} color="#000000" />
      </div>
    );
  }

  const sum = myOrders.reduce((accumulator, object) => {
    return accumulator + object.price;
  }, 0);
  return (
    <div className="container mx-auto text-black py-16">
      <Elements stripe={stripePromise}>
        <CheckoutForm sum={sum + 17 + 7} myOrders={myOrders} />
      </Elements>
    </div>
  );
};

export default Payment;
