import { CheckoutInput } from "dh-marvel/features/checkout/checkout.types";

export const checkoutPost = async (data: CheckoutInput) => {
  const res = await fetch("/api/checkout", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  const results = await res.json();

  return{results, status:res.status}
};
