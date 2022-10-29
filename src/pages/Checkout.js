import axios from "axios";
import { useState, useEffect } from "react";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [state, setState] = useState(0);
  useEffect(() => {
    fetchItems();
  }, []);
  const [isModalVisible, setIsModalVisible] = useState();
  const [items, setItems] = useState(null);
  const [item, setItem] = useState(null);
  const [payment, setPayment] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(true);
  const [address, setAddress] = useState("");
  const [cardNo, setCardNo] = useState("");
  const [cvc, setCvc] = useState("");
  const [cardName, setCardName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobilePin, setMobilePin] = useState(false);
  const [pin, setPin] = useState("")

  let navigate = useNavigate();
  let products = [];
  const fetchItems = () => {
    if (localStorage.getItem("products")) {
      products = JSON.parse(localStorage.getItem("products"));
      setItems(products);
    }
  };

  const checkoutFunction = () => {
    //checkout
    setPayment(true);
  };

  const handleDeliveryChange = (event) => {
    if (event.target.checked) {
      setDelivery(true);
    } else setDelivery(false);
  };
  const handleCardMethod = (event) => {
    if (event.target.checked) {
      setPaymentMethod(true);
    }
  };

  const handleMobileMethod = (event) => {
    if (event.target.checked) {
      setPaymentMethod(false);
    }
  };

  const handleDeliveryAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };
  const handleCardNoChange = (event) => {
    setCardNo(event.target.value);
  };
  const handleCvcChange = (event) => {
    setCvc(event.target.value);
  };
  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  }
  const handleSendPin = () => {
setMobilePin(true)
  }
  const handlePinChange = (event) => {
    setPin(event.target.value)
  }
  const handlePayment = () => {
    let amount;
    if (items) {
      amount = items.reduce((total, item) => {
        return total + parseInt(item.price?.slice(0, -1)) * item.qty;
      }, 0);
    }
    if (address) {
      axios
        .post(
          `http://localhost:5555/api/delivery`,
          {
            username: JSON.parse(localStorage.getItem("user")).email,
            location: address,
          },
          
          {
            headers: {
              Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((response) => console.log(response));
    }

    if (paymentMethod == 1) {
      axios
        .post(
          `http://localhost:4444/api/payment/card`,
          {
            cardHolderName: cardName,
            ccNo: cardNo,
            amount: amount,
            cvc: cvc,
            itemList: items,
          },
          
          {
            headers: {
              Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
            },
          }
        )
        .then((response) => console.log(response));
    }
    if (paymentMethod == 2) {
      if ((mobile, amount)) {
        axios
          .post(
            `http://localhost:4444/api/payment/mobile`,
            {
              mobileNo: mobile,
              pinNo: pin,
              amount: amount,
              itemList: items,
            },
            {
              headers: {
                Authorization:
                  "Bearer " + JSON.parse(localStorage.getItem("token")),
              },
            }
          )
          .then((response) => console.log(response));
      }
    }
    localStorage.removeItem("products");
    alert("Payment Succesful");
    navigate("/");
  };
  return (
    <div class="container px-20 pt-10">
      <div class="flex shadow-md my-10 justify-between">
        <div class="w-3/5 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
            <h1 class="font-semibold text-xl">Shopping Cart</h1>
          </div>
          {items && (
            <div class="flex mt-10 mb-5">
              <p className="text-gray-600 text-sm uppercase w-1/5">Product</p>
              <p className="text-center text-gray-600 text-sm uppercase w-1/5 text-center">
                Quantity
              </p>
              <p className="text-center text-gray-600 text-sm uppercase w-1/5 text-center">
                Price
              </p>
              <p className="text-center text-gray-600 text-sm uppercase w-1/5 text-center">
                Total
              </p>
            </div>
          )}

          {items && items.map((item) => <CartItem item={item} />)}
          {!items && <p>Currently your cart is empty!</p>}
        </div>
        {!payment && items && (
          <div class="w-2/5 px-8 py-10 bg-slate-50">
            <h1 class="font-semibold text-xl border-b pb-8">Order Summary</h1>
            <div class="flex justify-between mt-10 mb-5">
              <p className="font-semibold text-sm uppercase"># Items</p>
              <p className="font-semibold text-sm uppercase">
                {items && items.length}
              </p>
            </div>
            <div class="flex justify-between py-6">
              <p className="font-semibold text-sm uppercase">Total cost</p>
              <p className="font-semibold text-sm uppercase">
                {items &&
                  items.reduce((total, item) => {
                    return (
                      total + parseInt(item.price?.slice(0, -1)) * item.qty
                    );
                  }, 0)}
                $
              </p>
            </div>
            <button
              className="bg-blue-600 rounded-lg text-white font-semibold py-3 text-sm uppercase w-full"
              onClick={checkoutFunction}
            >
              Checkout
            </button>
          </div>
        )}

        {payment && (
          <div class="w-2/5 px-8 py-10 bg-slate-50">
            <h1 class="font-semibold text-xl border-b pb-8">Payment</h1>
            <div class="flex justify-between mt-10 mb-5">
              <label htmlFor="Delivery">
                <input type="checkbox" onChange={handleDeliveryChange} />
                Delivery
              </label>
            </div>
            {delivery && (
              <div class="flex justify-between mb-5 w-full">
                <label htmlFor="DeliveryAddress">
                  <input
                    type="text"
                    placeholder="Enter address"
                    className="p-1 outline outline-1"
                    onChange={handleDeliveryAddress}
                    value={address}
                  />
                </label>
              </div>
            )}

            <div class="flex justify-between mt-10 mb-5">
              <label htmlFor="Payment">
                <input
                  name="pay-method"
                  type="radio"
                  onChange={handleCardMethod}
                />
                Card payment
              </label>
              <label htmlFor="Payment">
                <input
                  name="pay-method"
                  type="radio"
                  onChange={handleMobileMethod}
                />
                Mobile payment
              </label>
            </div>

            {paymentMethod ? (
              <>
                <div class="mb-5 w-full">
                  <label htmlFor="DeliveryAddress">
                    Name
                    <input
                      type="text"
                      placeholder="Enter address"
                      className="p-1 outline outline-1 ml-7"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </label>
                </div>
                <div class="mb-5 w-full">
                  <label htmlFor="DeliveryAddress" className="">
                    Card No
                    <input
                      type="text"
                      placeholder="Enter address"
                      className="p-1 outline outline-1 ml-3"
                      value={cardNo}
                      onChange={handleCardNoChange}
                    />
                  </label>
                </div>
                <div class="mb-5 w-full">
                  <label htmlFor="DeliveryAddress">
                    CVC
                    <input
                      type="text"
                      placeholder="Enter address"
                      className="p-1 outline outline-1 ml-11"
                      value={cvc}
                      onChange={handleCvcChange}
                    />
                  </label>
                </div>
              </>
            ) : (
              <>
                <div class="flex justify-between mb-5 w-full">
                  <label htmlFor="DeliveryAddress">
                    Mobile No:
                    <input
                      type="text"
                      placeholder="Enter mobile no"
                      className="p-1 outline outline-1 ml-8"
                      value={mobile}
                      onChange={handleMobileChange}
                    />
                  </label>
                  <button
                    className="outline outline-1 rounded bg-gray-400 px-2"
                    onClick={handleSendPin}
                  >
                    Send pin
                  </button>
                </div>
                {mobilePin && (
                  <div class="flex justify-between mb-5 w-full">
                    <label htmlFor="DeliveryAddress">
                      Pin No
                      <input
                        type="text"
                        placeholder="Enter mobile no"
                        className="p-1 outline outline-1 ml-8"
                        value={pin}
                        onChange={handlePinChange}
                      />
                    </label>
                  </div>
                )}
              </>
            )}

            <button
              className="bg-blue-600 rounded-lg text-white font-semibold py-3 text-sm uppercase w-full"
              onClick={handlePayment}
            >
              Pay
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
