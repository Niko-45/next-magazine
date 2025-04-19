"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "./axiosRequest";
import { z } from "zod";
import google from "../../../public/images/Icon-Google.png";

// Валидация
const loginSchema = z.object({
  userName: z.string().min(3, "Минимум 3 символа"),
  password: z.string().min(6, "Минимум 6 символов"),
});

export default function Login() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ userName?: string; password?: string; general?: string }>({});

  // Агар токен бошад -> explore
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) router.push("/");
  }, [router]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const result = loginSchema.safeParse({ userName, password });

    if (!result.success) {
      const fieldErrors: any = {};
      result.error.issues.forEach((issue) => {
        fieldErrors[issue.path[0]] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      const { data } = await axiosInstance.post("https://store-api.softclub.tj/Account/login", {
        userName,
        password,
      });

      if (data.statusCode === 200 && data.data) {
        localStorage.setItem("token", data.data);
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${data.data}`;
        router.push("/");
      } else {
        setErrors({ general: "Ном ё парол нодуруст аст" });
      }
    } catch (error: any) {
      console.error("Login error:", error);
      setErrors({ general: error.response?.data?.errors?.[0] || "Ошибка сервера" });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-white">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">Вход в аккаунт</h1>
          <p className="mt-2 text-xl">Введите данные ниже</p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Имя пользователя"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-lg focus:border-gray-500 focus:outline-none"
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}

            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-4 py-3 text-lg focus:border-gray-500 focus:outline-none"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-4 text-center text-xl font-medium text-white hover:bg-blue-700"
          >
            Войти
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-gray-300 py-4 text-xl font-medium hover:bg-gray-50"
          >
            <Image src={google} alt="Google logo" width={24} height={24} className="mr-2" />
            Войти через Google
          </button>

          <div className="flex items-center justify-center space-x-2 text-lg">
            <p className="text-gray-600">Нет аккаунта?</p>
            <Link href="/register" className="font-medium text-gray-900 underline">
              Зарегистрироваться
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}
