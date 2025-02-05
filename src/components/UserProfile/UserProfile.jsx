import { useState } from "react";
import { motion } from "framer-motion";
import { LogOut, Settings, Sparkles, User, MousePointer} from "lucide-react";
import '../../firebase/config'
import {getAuth, signOut} from 'firebase/auth'

const Menu = ({admin}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    setIsOpen(false);

    setTimeout(() => {
      signOut(getAuth()).then(() => alert("Logged out")).catch((e) => alert(e.error))
    }, 800)
  };  

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all"
      >
        U
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: -10 }}
          className="absolute right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
        >

          {admin === 'admin@gmail.com' ? (
            <ul className="py-2"> 
              <MenuItem icon={<User size={18} />} label="My Account" />
              <MenuItem icon={<Sparkles size={18} />} label="Customize" />
              <MenuItem icon={<Settings size={18} />} label="Settings" />
              <MenuItem icon={<MousePointer size={18} />} label="Add Product" />
              <div className="border-t border-gray-200 my-1"></div>
              <MenuItem icon={<LogOut size={18} />} label="Log out" isDanger onClick={handleLogout} />
            </ul>
            ) : 
            <ul className="py-2"> 
              <MenuItem icon={<User size={18} />} label="My Account" />
              <MenuItem icon={<Sparkles size={18} />} label="Customize" />
              <MenuItem icon={<Settings size={18} />} label="Settings" />
              <div className="border-t border-gray-200 my-1"></div>
              <MenuItem icon={<LogOut size={18} />} label="Log out" isDanger onClick={handleLogout} />
            </ul>
          }
        </motion.div>
      )}
    </div>
  );
};

const MenuItem = ({ icon, label, isDanger, onClick }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center gap-3 w-full px-4 py-2 text-sm font-medium ${
          isDanger ? "text-red-500 hover:bg-red-50" : "text-gray-700 hover:bg-gray-100"
        } transition-all`}
      >
        {icon}
        {label}
      </button>
    </li>
  );
};

export default Menu;
