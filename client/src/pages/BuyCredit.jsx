import React, { use, useContext } from "react";
import { motion } from "motion/react";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Description from "../components/Description";

const BuyCredit = () => {
  const { user, backendUrl, loadcreditsData, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPaty = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        // console.log(response);
        // try {
        //   const { data } = await axios.post(
        //     backendUrl + "/api/user/verify-razorpay",
        //     response,
        //     { headers: { token } }
        //   );
        //   if (data.success) {
        //     loadcreditsData();
        //     navigate("/");
        //     toast.success("Credit Added");
        //   }
        // } catch (error) {
        //   toast.error(error.message);
        // }

        try {
          const { data } = await axios.post(
            `${backendUrl}/api/user/verify-razorpay`,
            response, // request body
            {
              headers: {
                Authorization: `Bearer ${token}`, // backend expects token here
              },
            }
          );

          if (data.success) {
            loadcreditsData();
            navigate("/");
            toast.success("Credit Added");
          }
        } catch (error) {
          console.error(error); // log full error for debugging
          toast.error(error.response?.data?.message || error.message);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razorpay",
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        initPaty(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10"
      initial={{ opacity: 0.2, y: 30 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((items, index) => (
          <div
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
            key={index}
          >
            <img width={40} src={assets.logo} alt="" />
            <p className="mt-3 mb-1 font-semibold">{items.id}</p>
            <p className="text-sm">{items.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium"> ${items.price} </span> /{" "}
              {items.credits} credits
            </p>
            <button
              onClick={() => paymentRazorpay(items.id)}
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
