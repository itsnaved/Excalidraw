"use client";

export default function AuthPage({isSignin}:{isSignin: boolean}){
    return <div className="h-screen w-screen flex justify-center items-center">
            <div className="p-6 m-2 bg-white rounded">

                <div className="p-2 ">
                    <input type={'text'} placeholder={'Email'}/>
                </div>

                <div className="p-2">
                    <input type={'password'} placeholder={'password'}/>
                </div>

                <div className="pt-2">
                <button className="bg-red-200 rounded p-2" onClick={() => {

                }}>{isSignin ? "Sign in" : "Sign up"}</button>
            </div>

            </div>
            </div>
}
