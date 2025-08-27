import axios from 'axios';
import { BACKEND_URL } from '../../app/config';
import { ChatRoom } from '../../components/ChatRoom';

async function getRoomId(slug: string){
    const response= await axios.get(`${BACKEND_URL}/room/${slug}`)
    console.log(response.data);
    return response.data.room.id;
}


export default async function ChatRooms({params}:{params:{slug: string}}){
    // const parsedParams= (await params);

    const slug=   (await params).slug;
    const roomId= await getRoomId(slug);

    return <ChatRoom   id={roomId}></ChatRoom>
}