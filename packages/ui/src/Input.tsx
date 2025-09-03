export function Input({placeholder, type}:{placeholder: string, type:string}){
    return  <div >
                <input  type={type} placeholder={placeholder} ></input>
            </div>
}