"use client";

import { WS_URL } from "@/config";
import { initDraw } from "@/draw";
import { useEffect, useRef, useState } from "react";
import { Canvas } from "./Canvas";

export function RoomCanvas({roomId}:{roomId: string}){
    const [socket, setSocket]= useState<WebSocket | null>(null);

    useEffect(()=>{
        const ws= new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YzI4N2E2Mi01ZDdiLTQzYmEtYTg3OS0wMGI1M2MxZTYxMWQiLCJpYXQiOjE3NTc5MzcyNTl9.ZdTW8UH0SYuQqAw4LUCLiZLecwGkddyF85Svo9_a0-I`);

        ws.onopen=()=>{
            setSocket(ws);
            const data= JSON.stringify({
                type: "join_room", 
                roomId
            })
            ws.send(data)
        }
    },[])
    

    if(!socket){
        return <div>
            Connecting to server....
        </div>
    }

 
    return <div>
        <Canvas roomId={roomId} socket={socket}/>
    </div>
}


1;30  