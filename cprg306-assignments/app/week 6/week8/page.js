"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from "next/router";


const Page = () => {
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
const handleLogin = async () => {
    // Call gitHubSignIn to open the GitHub login popup
    await gitHubSignIn();
  };


  const handleLogout = async () => {
    // Call firebaseSignOut to log the user out
    await firebaseSignOut();
  };


return (
    <main className="flex min-h-screen flex-col justify-between">
        <div>
        {user ? ( // Check if the user is logged in
            <div>
            <p>
                Welcome, {user.displayName} ({user.email})
            </p>
            <button onClick={handleLogout}>Logout</button>
            <Link href="/shopping-list">Go to Shopping List</Link>
            </div>
        ) : (
            <div>
            <h1 className="text-3xl font-bold mb-5" >Shopping List App</h1>
            <button onClick={handleLogin}>Sign in with GitHub</button>
            </div>
        )}
        </div>
    </main>
  );
};

export default Page;