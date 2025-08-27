import { useEffect, useState } from "react";
import { WS_URL } from "../app/config";

export function useSocket(){
    const [loading, setLoading]= useState(true);
    const [socket, setSocket]= useState<WebSocket>();

    useEffect(()=>{
        const ws= new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyZTQ1MjhjMy1iNjliLTQ0YWQtYThlNi1mNDdlNGNlZjMyYTQiLCJpYXQiOjE3NTYyMTExOTB9.ajxOyWpClZqzKgWzFIHba6evOyxuRFmYGyD8e-tHdgg`); 
        ws.onopen=()=>{
            setLoading(false);
            setSocket(ws);
        }
    },[])

    return{
        socket,
        loading
    }
}