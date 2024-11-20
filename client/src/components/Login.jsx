"use client"
import { useUserContext } from '@/app/context/Userinfo';
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast"
import { useEffect } from 'react';

import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
import Link from "next/link";

import { use, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


import {useRouter} from "next/navigation"
import { useSession, signIn } from 'next-auth/react';

function Login() {
  const { data: session } = useSession()

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { contextsetIsLoggedIn,contextsetEmail,contextsetName,contextemail,contextname} = useUserContext(); // Updated hook
  const [loggedin,setLoggedin]=useState()
  const { toast } = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Update email context if it's empty


  const Getuserinfo = async () => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        {
            method: 'GET',
            headers: {
              "Authorization":token,
              'Content-Type': "application/json",
            },
            credentials: 'include',
          }

          );
      if (!response.ok) {
        toast({
          title: "There was an error",

        })
        throw new Error('Failed to fetch user info'); // Handle error properly

      }
      if (response.ok){
        const result = await response.json();

      contextsetIsLoggedIn(true)
      contextsetEmail(result.email)
      contextsetName(result.name)
      toast({
        title: "You are Successfully Logged In",

      });
      router.push("/")
      }

    } catch (error) {
      toast({
        title: "There was an error",

      })
      console.error("Error fetching user info:", error);
    }


  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        toast({
          title: "Wrong Password",
        });
        return;
      }

      const result = await response.json();
      if (response.ok) {


        localStorage.setItem('authToken', result.jwt);
        Getuserinfo()
  }
    } catch (error) {
      toast({
        title: "An error occurred",
      });
      console.error("Error submitting form:", error);
    }
  };

  // const OAuth = async()=>{
  //   try {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/oauth2/login/`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //       body: JSON.stringify({ name, email }),
  //       if( response){
  //         console.log(name,email)
  //         router.push('/')
  //         toast({
  //           title: "You are Successfully Logged In",

  //         });
  //       }
  //     },

  //   );


  //   } catch (error) {
  //     toast({
  //       title: "An error occurred",
  //     });
  //     console.error("Error submitting form:", error);
  //   }
  // }


 


  async function loginWithGoogle() {
    setLoading(true);

    try {
      await signIn('google')
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setLoading(false)
    }

  }
  async function loginWithGithub() {
    setLoading(true);



    try {


      await signIn('github')
    } catch (error) {
      // display error message to user
      toast.error('Something went wrong with your login.')
    } finally {
      setLoading(false)
    }

  }
  useEffect(() => {

    if (session) {
      setEmail(session.user.email);
      setName(session.user.name);
      
      
      
  }
  }, [session]);
useEffect(() => {
  if(name !==""){
    OAuth();
  }
},[name,email])

  const OAuth = async () => {


    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/oauth2/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ name, email }),
      });
      
      const result = await response.json();
  
      if (response.ok) {


        localStorage.setItem('authToken', result.jwt);


        result.jwt &&(router.push('/'),
      toast({
        title: "You are Successfully Logged In",

      }))
        Getuserinfo()
  }
    } catch (error) {
     
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-[#050A0F] mt-[7%]">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Login to Code Cell
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Welcome back!
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </LabelInputContainer>
        <div className="flex flex-col space-y-4">
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Login &rarr;
          <BottomGradient />
        </button>
        <Link href="/ForgotPassword">
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="button"
          >
            ForgotPassword &rarr;
            <BottomGradient />
          </button>
        </Link>
        <Label htmlFor="password">Don't have an account ?</Label>
        <Link href='/Signup'>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"

        >
          SignUp &rarr;
          <BottomGradient />
        </button>
        </Link>
        </div>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">

          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button" onClick={loginWithGoogle}// Changed type to "button"
          >
            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Google
            </span>
            <BottomGradient />
          </button>
          <button
            className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type="button" onClick={loginWithGithub}// Changed type to "button"
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default Login;