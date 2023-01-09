import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [myOrders, setOrders] = useState([]);
  const [OrderCartUpdate, setOrderCartUpdate] = useState([]);
  const [wishCartUpdate, setWishCartUpdate] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);

  //Search cart
  useEffect(() => {
    fetch(`http://localhost:5000/search-card-data?search=${search}`)
      .then((res) => res.json())
      .then((data) => setSearchData(data));
  }, [search]);

  //Orders Cart
  useEffect(() => {
    fetch(`http://localhost:5000/orders-products`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [OrderCartUpdate]);

  //wishlist cart
  useEffect(() => {
    fetch(`http://localhost:5000/wishlist-products`)
      .then((res) => res.json())
      .then((data) => setWishList(data));
  }, [wishCartUpdate]);

  const orderProductsDelete = (id) => {
    fetch(`http://localhost:5000/orders-products-delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setOrderCartUpdate(id);
          toast.success(`Hello, ${user?.displayName} ! Your Products Removed`);
        }
      });
  };

  const Orders = (productsInfo) => {
    const {
      brandName,
      name,
      available,
      availableStatus,
      categories,
      describe,
      disCountPrice,
      extraTax,
      price,
      productCode,
      review,
      sold,
      imgThumb,
      imgThumbSec,
    } = productsInfo;
    const OrdersProducts = {
      brandName,
      name,
      available,
      availableStatus,
      categories,
      describe,
      disCountPrice,
      extraTax,
      price,
      productCode,
      review,
      sold,
      imgThumb,
      imgThumbSec,
      userName: user?.displayName,
      userEmail: user?.email,
    };
    fetch(`http://localhost:5000/products-orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(OrdersProducts),
    })
      .then((res) => res.json())
      .then(() => {
        setOrderCartUpdate(OrdersProducts);
        toast.success(`Hey, ${user?.displayName}! Product Added Successful`);
      });
  };

  const WishListFunc = (productsInfo) => {
    const {
      brandName,
      name,
      available,
      availableStatus,
      categories,
      describe,
      disCountPrice,
      extraTax,
      price,
      productCode,
      review,
      sold,
      imgThumb,
      imgThumbSec,
    } = productsInfo;
    const WishListProducts = {
      brandName,
      name,
      available,
      availableStatus,
      categories,
      describe,
      disCountPrice,
      extraTax,
      price,
      productCode,
      review,
      sold,
      imgThumb,
      imgThumbSec,
      wishList: true,
      userName: user?.displayName,
      userEmail: user?.email,
    };
    fetch(`http://localhost:5000/products-wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(WishListProducts),
    })
      .then((res) => res.json())
      .then(() => {
        setWishCartUpdate(WishListProducts);
        toast.success(
          `Hey, ${user?.displayName}! WishList Product Added Successful`
        );
      });
  };

  //Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Update Name
  const updateProfileInfo = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //Logout
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("access-token");
    return signOut(auth);
  };

  //Login with Password
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Google SignIn
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    myOrders,
    Orders,
    setLoading,
    signInWithGoogle,
    createUser,
    signIn,
    logout,
    updateProfileInfo,
    orderProductsDelete,
    WishListFunc,
    wishList,
    search,
    setSearch,
    searchData,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
