import React, { useEffect, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import { SendIcon } from "../utils/SendIcon";
import { Chip } from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import { BinIcon } from "../utils/BinIcon";
import axios from "axios";
import TextToSpeech from '../utils/TextToSpeech';

export const ChatBot = () => {
    
    const api = 'https://b927-34-71-235-213.ngrok-free.app/message?msg='
    const [messages, setMessages] = useState(localStorage.getItem("messages")?JSON.parse(localStorage.getItem("messages")):[])
    const [message, setMessage] = useState("")

    const sendMessage = async (message) => {
        axios.request({
            method: 'post',
            maxBodyLength: Infinity,
            url: api+message,
            headers: { }
        })
        .then((response) => {
            console.log(response?.data?.message)
            setMessages([...JSON.parse(localStorage.getItem("messages")), {by:"bot", content:response?.data?.message}])
            // setMessages([...JSON.parse(localStorage.getItem("messages")), {by:"bot", content:"Meow"}])
        })
        .catch((error) => {
            // toast.error(error)
            console.error(error)
        })
    }
    
    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages))
    },[messages])

    return(
    <div className="static">
        <div className="bg-white w-[100vw] h-[80vh] grid justify-items-center">
            <div className="col-span-5 flex flex-col w-full bg-green-50 pt-2 overflow-y-scroll overflow-hidden pb-[11vh]">
                {messages.map(data => {
                    if (data.by === "user") {
                    return(<div className="flex flex-row-reverse">
                                <Chip color="primary" size="lg" radius="lg" variant="shadow" className="rounded-br-none mx-1 my-2 !text-wrap w-2/3 h-fit p-2 text-white">{data.content}</Chip>
                            </div>
                    )}else {
                        return(<div className="flex flex-row">
                            <Chip color="success" size="lg" variant="shadow" radius="lg" className="rounded-bl-none mx-1 !text-wrap w-2/3 h-fit p-2 text-white">{data.content}</Chip>
                            <TextToSpeech text={data.content} /> 
                        </div>
                    )}
                })}
            </div>
        </div>
        <div className="flex items-center gap-0 flex-col-reverse z-10 absolute w-full bottom-1">
            <div className="flex flex-wrap items-end md:flex-nowrap m-2 mb-2 md:mb-0 gap-1">
                <Textarea
                label="Question : "
                placeholder="Enter Your Question"
                className="max-w-4xl font-bold"
                color="primary"
                onChange={(e)=>{setMessage(e.target.value)}}
                value={message}
                />
                <Toaster className="mt-10" position="top-center" richColors/>
                <div className="flex flex-row place-content-center">
                    <div className="pl-24 pr-2">
                        <Button variant="shadow" color="primary" className="font-semibold text-md" onClick={()=>{
                            if (message !== "") {
                                setMessages([...messages, {by:"user", content:message}])
                                localStorage.setItem("messages", JSON.stringify(messages))
                                setMessage("")
                                sendMessage(message)
                                toast.info(<div className="pl-[33%]"><Button color="primary" isLoading>Loading</Button></div>, {duration: 3000})
                            }else{
                                toast.error("Please Enter a message")
                            }
                        }}
                        ><div>{<SendIcon />}</div>Enter</Button>
                    </div>
                    <div>
                        <Button variant="shadow" color="danger" className="font-bold text-md" onClick={()=>{
                            setMessages([])
                        }}
                        ><BinIcon /></Button>
                    </div>
                </div>
            </div>
        </div> 
    </div> 
)}
