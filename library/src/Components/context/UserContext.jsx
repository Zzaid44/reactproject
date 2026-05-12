import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const existedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existedUsers) {
      setUsers(existedUsers);
    }
  }, []);

  const register = (formData) => {
    if (!formData.email || !formData.name || !formData.password) {
      toast.error("please fill all the fields!!");
      return;
    }
    if (formData.password.length < 8) {
      toast.error("password should be more than 8 charecters");
      return;
    }
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist =allUsers.find((user) => user.email === formData.email);
    if (isExist) {
      toast.error("your email is lready exist! try login");
      return;
    }
    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: "user",
    };
    const updateUsers = [ ...allUsers, newUser ];

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setUsers(updateUsers);
    toast.success("registerd successfully!");
  
    return;
  };
  const login = (formData) => {
    if (!formData.email || !formData.password){
        toast.error("please fill all fields!");
        return;

    }
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === formData.email);
    if(!isExist){
        toast.error("user not found! please create new account.");
        return;
    }
    if(isExist.password !== formData.password){
        toast.error("password is not correct!");
        return;
    }
    toast.success("login successfully!")
  };
  return (
    <UserContext.Provider value={{ register, users, login }}>
      {children}
    </UserContext.Provider>
  );
};
