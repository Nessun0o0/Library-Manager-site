import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { Navigate } from "react-router-dom";
  
function Home() {
  const user = auth.currentUser
  if (user == null) {
    return (
      <Navigate to="/" />
    );
  }
  return (
    <div>
      <h1>Home Page</h1>
      {user.uid}
    </div>
  );
};
  
export default Home;