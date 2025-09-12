import { HTTP_BACKEND } from "@/config";
import axios from "axios";

type Shape= {
    type: 'rect';
    x: number;
    y: number;
    width: number;
    height: number;
} | {
    type: 'circle';
    centerX: number;
    centerY: number;
    radius: number;
}

export async function initDraw(canvas: HTMLCanvasElement, roomId: string){

    const ctx= canvas.getContext("2d");

    let exisitingShapes: Shape[]= await getExisitngShapes(roomId);
    if(!ctx){
        return
    }
                
            clearCanvas(exisitingShapes, canvas, ctx);
            let clicked= false; 
            let startX= 0;
            let startY= 0;

            canvas.addEventListener('mousedown', (e)=>{
                clicked= true;
                startX= e.clientX;
                startY= e.clientY;

            })

            canvas.addEventListener('mouseup', (e)=>{
                clicked= false;
                const width= e.clientX - startX;
                const height= e.clientY - startY;
                exisitingShapes.push({
                    type: 'rect',
                    x: startX,
                    y: startY,
                    height,
                    width
                })
            })

            canvas.addEventListener('mousemove', (e)=>{
                if(clicked){
                    const width= e.clientX - startX;
                    const height= e.clientY - startY;
                    clearCanvas(exisitingShapes, canvas, ctx)
                    ctx.strokeStyle= "rgba(255, 255, 255)" 
                    ctx.strokeRect(startX, startY, width, height);
                }
            })
}

function clearCanvas(exisitingShapes: Shape[],canvas:HTMLCanvasElement, ctx: CanvasRenderingContext2D, ){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle= "rgba(0, 0, 0)"
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            exisitingShapes.map((shape)=>{
                if(shape.type== 'rect'){
                     ctx.strokeStyle= "rgba(255, 255, 255)" 
                    ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
                }
            })

}

async function getExisitngShapes(roomId: string){
    const res= await axios.get(`${HTTP_BACKEND}/chats/${roomId}`)  
    const messages= res.data.messages;

    const shapes= messages.map((x: {message: string}) =>{
        const messageData= JSON.parse(x.message)
        return messageData;
    })
    return shapes;
}   