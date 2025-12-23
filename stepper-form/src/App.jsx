import CheckoutStepper from "./components/stepper";
import "./index.css";

export default function App() {
  const checkout_steps = [
    {
      name: "Customer Info",
      Component: () => <div>Please fill Customer info</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Please fill Shipping info</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Please fill Payment info</div>,
    },
    {
      name: "Delivered",
      Component: () => <div>Please confirm so it will deliver</div>,
    },
  ];
  return (
    <div className="App">
      <h1>Stepper</h1>
      <CheckoutStepper stepsConfig={checkout_steps} />
    </div>
  );
}
