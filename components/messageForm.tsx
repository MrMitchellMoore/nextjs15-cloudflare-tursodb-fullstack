"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { addMessageToDB } from "@/actions/add-message-to-db";
import { useToast } from "@/hooks/use-toast";

const MessageForm = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  async function handleAddMessageToDB() {
    try {
      setLoading(true);
      const response = await addMessageToDB(message);
      if (response.ok) {
        setMessage("");
        toast({
          variant: "success",
          title: "Success",
          description: "Message added successfully",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Message Failed. Please try again",
      });
    }
  }

  return (
    <div className="flex flex-col gap-4 mt-10 px-10 lg:px-0">
      <h2 className="text-2xl font-bold text-center">Cloudflare and Next js</h2>
      <Input
        type="text"
        className="w-full border-black text-slate-500 font-semibold"
        placeholder="input message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        disabled={loading}
        onClick={handleAddMessageToDB}
        className="hover:bg-green-400 hover:text-black hover:font-semibold"
      >
        {loading ? "Adding..." : "Submit"}
      </Button>
    </div>
  );
};

export default MessageForm;
