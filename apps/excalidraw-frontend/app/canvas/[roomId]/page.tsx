"use client"
import { initDraw } from "@/draw";
import { useEffect, useRef } from "react"

export default function Canvas(){
    const canvasRef= useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        if(canvasRef.current){
            const canvas= canvasRef.current;
            const ctx= canvas.getContext("2d");

            if(canvasRef.current){  
                initDraw(canvasRef.current);
            }

        }
    },[canvasRef])


    return <div>
        <canvas ref={canvasRef} width={2000} height={1080}></canvas>
    </div>
}