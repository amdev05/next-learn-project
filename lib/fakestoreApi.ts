import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const API = "https://fakestoreapi.com";

export async function getAllProducts() {
  const res = await fetch(`${API}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch all products");
  }

  return res.json();
}

export async function getProductById(id: string) {
  const res = await fetch(`${API}/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export async function getAllUsers() {
  const res = await fetch(`${API}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export async function postLogin(formData: FormData) {
  "use server";
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof username !== "string" || typeof password !== "string") {
    throw new Error("invalid form data.");
  }

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    // throw new Error("Login failed");
    redirect("/fakestore/login?err=3");
  }

  const data: { token: string } = await res.json();

  const cookieStore = await cookies();
  cookieStore.set("token", data.token, {
    httpOnly: true,
    secure: true,
    path: "/store",
  });

  redirect("/store");
}

export async function postSignUp(formData: FormData) {
  "use server";
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof username !== "string" || typeof password !== "string" || typeof email !== "string") {
    throw new Error("invalid form data.");
  }

  const res = await fetch(`${API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!res.ok) {
    // throw new Error("Login failed");
    redirect("/fakestore/signup?err=3");
  }

  redirect("/fakestore/login");
}

export async function postUpdateAccount(formData: FormData) {
  "use server";
  const username = formData.get("username");
  const email = formData.get("email");

  if (typeof username !== "string" || typeof email !== "string") {
    throw new Error("invalid form data.");
  }

  const res = await fetch(`${API}/users/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email }),
  });

  if (!res.ok) {
    // throw new Error("Login failed");
    redirect("/fakestore/signup?err=3");
  }

  redirect("/fakestore/login");
}
