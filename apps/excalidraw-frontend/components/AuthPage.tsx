"use client";

import { Input } from "@repo/ui/Input";

export default function AuthPage({isSignin}:{isSignin: boolean}){
    return <div className="h-screen w-screen flex justify-center items-center">
            <div className="p-6 m-2 bg-white rounded">

                <div className="p-2 ">
                    <Input type={'text'} placeholder={'Email'}/>
                </div>
                <div className="p-2">
                    <Input type={'password'} placeholder={'password'}/>
                
                </div>
                <div className="flex justify-center " >
                    <button className="pt-2 justify-center items-center cursor-pointer bg-slate-400 rounded w-18"
                    onClick={()=>{
                        
                    }}>{isSignin?"Sign in":"Sign up"}</button>
                </div>

            </div>
            </div>
}
