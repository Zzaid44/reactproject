import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const existedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (existedUsers) {
      setUsers(existedUsers);
    }
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
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
    const isExist = allUsers.find((user) => user.email === formData.email);
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
    const updateUsers = [...allUsers, newUser];

    localStorage.setItem("users", JSON.stringify(updateUsers));
    setUsers(updateUsers);
    toast.success("registerd successfully! try to log in");
    navigate("/login");
    return;
  };
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    navigate("/LandingPage");
    toast.success("Logout successfully");
  };
  const login = (formData) => {
    if (!formData.email || !formData.password) {
      toast.error("please fill all fields!");
      return;
    }
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    const isExist = allUsers.find((user) => user.email === formData.email);
    if (!isExist) {
      toast.error("user not found! please create new account.");
      return;
    }
    if (isExist.password !== formData.password) {
      toast.error("password is not correct!");
      return;
    }
    toast.success("login successfully!");
    setCurrentUser(isExist);
    localStorage.setItem("currentUser", JSON.stringify(isExist));
    if(isExist.role === "user") navigate("/userdashboard")
      if(isExist.role === "admin") navigate("/admindashboard")
  };
  return (
    <UserContext.Provider
      value={{ register, users, login, currentUser, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
