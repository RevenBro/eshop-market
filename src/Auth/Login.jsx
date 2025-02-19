import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import {Toaster, toast} from 'sonner'
import '../firebase/config'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(getAuth(), email, password)
      toast.success("Hisobingizga muvaffaqiyatli kirdingiz", {
        duration: 5000
      })
      setTimeout(() => navigate("/"), 1500)
    } catch (error) {
      toast.error("Xatolik: Foydalanuvchi topilmadi", { duration: 5000 });
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Toaster position='top-right' richColors/>
      <motion.div
        className="bg-white bg-opacity-10 p-10 rounded-3xl shadow-2xl shadow-black/50 backdrop-blur-lg max-w-md w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">Kirish Sahifasi</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Email"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Parol"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-white hover:text-slate-200 focus:outline-none"
              tabIndex={0}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errorMessage && <p className="text-red-400 text-center">{errorMessage}</p>}
          <motion.button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg bg-gradient-to-r from-teal-400 to-blue-600 text-white font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          isSubmitting
          >
            {isSubmitting ? (
              <div className='flex justify-center items-center'>
                <div role="status">
                  <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              'Kirish'
            )}
          </motion.button>
        </form>
        <div className="mt-6 text-center text-white">
          <div className='flex  justify-center'>
            <p className="text-sm">
              <a href="/forgot-password" className="text-teal-400 hover:underline">
                Parolni tiklash |
              </a>
            </p>
            <p className="text-sm">
              <a href="/signup" className="text-teal-400 hover:underline">
                | Ro'yxatdan o'tish
              </a>
            </p>
          </div>
          <button
              onClick={() => navigate('/')}
              className="mt-4 text-teal-400 hover:underline"
            >
              Asosiy sahifaga qaytish
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
