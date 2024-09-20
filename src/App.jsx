import React, { useState, useEffect,useRef } from "react";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import { IoIosSearch } from "react-icons/io";
import { FaCircleArrowRight } from "react-icons/fa6";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineCopyAll } from "react-icons/md";
import Markdown from 'react-markdown';

function App() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const messageContainerRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);
  
  
  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  async function generateAnswer() {
    setLoading(true);
    console.log("Loading....");
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
      },
    });

    const newAnswer = response.data.candidates[0].content.parts[0].text;
    setMessages([...messages, 
      { type: 'user', content: question },
      { type: 'ai', content: newAnswer }
    ]);
    setQuestion("");
    setLoading(false);
  }

  return (
    <>
      <div className="bg-slate-950 min-h-screen w-full overflow-x-hidden flex flex-col">
        <Navbar />
        <Header />
        
        <div className="flex-grow mb-20 md:mb-10 bg-slate-950 text-white w-11/12 pr-4 md:p-6 p-4 m-2 md:ml-12 rounded-2xl flex flex-col">
          {messages.map((message, index) => (
            <div key={index} className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'} flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`inline-block p-2 px-6 py-4 rounded-lg ${message.type === 'user' ? 'bg-blue-500' : 'bg-slate-900'} break-words h-auto`}>
                <Markdown className="md:text-xl font-second text-xs">{message.content}</Markdown>
              </div>
              {message.type === 'ai' && (
                <CopyToClipboard text={message.content} onCopy={onCopy}>
                  <button className="mt-2 ml-2"><MdOutlineCopyAll /></button>
                </CopyToClipboard>
              )}
            </div>
          ))}
          {loading && (
            <div className="animate-pulse">
              <img src="loader.png" className="w-10 h-10 md:w-16 md:h-16" alt="Loading" />
            </div>
          )}
          {copied && <p>Copied!</p>}
        </div>

        <div className="bg-slate-950 fixed bg-transparent p-4 bottom-0 left-0 right-0">
          <div className="flex items-center justify-center">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
              if (e.key === 'Enter') {
              generateAnswer();
          }
        }}
              type="text"
              className=" rounded-l md:w-1/2 w-3/4 mb-2 text-white border-2 border-solid border-white bg-slate-900 bg-clip-padding px-3 py-2 text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-slate-500 dark:focus:border-primary"
              placeholder="Ask Anything..."
            />
            <button onClick={generateAnswer} className="rounded-r  mb-2 bg-gradient-to-r from-green-500 via-blue-500 to-green-400 p-2">
            <FaCircleArrowRight className="text-white w-6 h-6"  />
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
