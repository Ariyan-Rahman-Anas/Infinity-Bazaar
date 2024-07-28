import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Checkout() {
  const products = [
    {
      id: 1,
      name: "Throwback Hip Bag",
      href: "#",
      color: "Salmon",
      price: "$90.00",
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "Medium Stuff Satchel",
      href: "#",
      color: "Blue",
      price: "$32.00",
      quantity: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    // More products...
  ];

  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="left information w-full md:w-[65%] p-3 md:p-5 ">
          <form>
            <div id="contact-information">
              <h1 className="section-subheading">Contact Information</h1>
              <div className="email mt-2">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="input"
                  />
                </div>
              </div>
            </div>
            <hr className="border border-gray-200 my-10" />
            <div id="shipping-information">
              <h1 className="section-subheading">Shipping Information</h1>
              <div className="mt-2 flex flex-col md:flex-row items-center gap-4 w-full">
                <div className="first-name w-full">
                  <label htmlFor="first-name" className="label">
                    First name
                  </label>
                  <div>
                    <input
                      name="first-name"
                      type="text"
                      required
                      autoComplete="first-name"
                      className="input"
                    />
                  </div>
                </div>
                <div className="last-name w-full">
                  <label htmlFor="last-name" className="label">
                    Last name
                  </label>
                  <div>
                    <input
                      name="last-name"
                      type="text"
                      required
                      autoComplete="last-name"
                      className="input"
                    />
                  </div>
                </div>
              </div>
              <div className="country w-full mt-4">
                <label htmlFor="country" className="label">
                  Country
                </label>
                <select className="input">
                  <option value={"Bangladesh"}>Bangladesh</option>
                  <option value={"Afghanistan"}>Afghanistan</option>
                  <option value={"Pakistan"}>Pakistan</option>
                  <option value={"New Zealand"}>New Zealand</option>
                  <option value={"United Kingdom"}>United Kingdom</option>
                  <option value={"Unite States"}>Unite States</option>
                </select>
              </div>
              <div className="street w-full mt-4">
                <label htmlFor="street" className="label">
                  Street
                </label>
                <input
                  name="street"
                  type="password"
                  required
                  autoComplete="street"
                  className="input"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 w-full mt-4">
                <div className="city w-full">
                  <label htmlFor="city" className="label">
                    City
                  </label>
                  <div>
                    <input
                      name="city"
                      type="text"
                      required
                      autoComplete="city"
                      className="input"
                    />
                  </div>
                </div>
                <div className="state/province w-full">
                  <label htmlFor="state-province" className="label">
                    State/Province
                  </label>
                  <div>
                    <input
                      name="state-province"
                      type="text"
                      required
                      autoComplete="State/Province"
                      className="input"
                    />
                  </div>
                </div>
                <div className="zip w-full">
                  <label htmlFor="zip" className="label">
                    Zip/Postal code
                  </label>
                  <div>
                    <input
                      name="zip"
                      type="text"
                      required
                      autoComplete="zip"
                      className="input"
                    />
                  </div>
                </div>
              </div>
              <hr className="border border-gray-200 my-10" />
              {/* address start */}
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Address
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose form your previous addresses
                </p>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center gap-x-3 border p-4 rounded-md">
                    <input
                      id="address-1"
                      name="address"
                      type="radio"
                      className="radio-input"
                    />
                    <div className="flex flex-col md:flex-row justify-between  w-full">
                      <div>
                        <h1>Didarul Alam</h1>
                        <p>3582-South Khulshi-1</p>
                      </div>
                      <div>
                        <h1>+88 01234-567890</h1>
                        <p>Chattogram, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-3 border p-4 rounded-md">
                    <input
                      id="address-1"
                      name="address"
                      type="radio"
                      className="radio-input"
                    />
                    <div className="flex flex-col md:flex-row justify-between  w-full">
                      <div>
                        <h1>Didarul Alam</h1>
                        <p>3582-OR. Niam Road, Nasirabad</p>
                      </div>
                      <div>
                        <h1>+88 01234-567890</h1>
                        <p>Chattogram, Bangladesh</p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              {/* addresses ends. */}
              <hr className="border border-gray-200 my-10" />
              {/* payment method */}
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Payment Method
                </legend>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Choose conveniently
                </p>
                <div className="mt-2 space-y-4">
                  <div className="flex items-center gap-x-3 border p-4 rounded-md">
                    <input
                      id="payment-cash"
                      name="payment"
                      type="radio"
                      className="radio-input"
                    />{" "}
                    <p>Cash</p>
                  </div>
                  <div className="flex items-center gap-x-3 border p-4 rounded-md">
                    <input
                      id="payment-card"
                      name="payment"
                      type="radio"
                      className="radio-input"
                    />
                    <p>Card</p>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
        <div className="right order-summary w-full md:w-[35%] p-3 md:p-5 bg-white rounded-md shadow-lg">
          <h1 className="section-subheading">Order Summary</h1>
          {/* ... */}
          <div className="flow-root pt-2 pb-6 mt-4">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">
                        <span className="mr-3">Quantity</span>
                        <select className="border-none shadow rounded-md">
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-primary hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200  border2 pt-6  ">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <Link to={"/checkout"}>
              <button className="mt-6 btn">
                <Link to={"/checkout"}>Make Payment</Link>
              </button>
            </Link>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link
                  to={"/"}
                  // onClick={() => setOpen(false)}
                  className="font-medium text-primary hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
          {/* </div> */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
