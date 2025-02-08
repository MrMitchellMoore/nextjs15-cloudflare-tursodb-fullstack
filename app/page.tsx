import { getMessagesFromDB } from "@/actions/get-messages-from-database";
import MessageForm from "@/components/messageForm";

export const runtime = "edge";

export default async function Home() {
  const messages = await getMessagesFromDB();

  return (
    <main className="max-w-3xl flex flex-col min-h-screen w-full mx-auto">
      <MessageForm />
      <div className="flex flex-col mt-6 px-16 lg:px-8">
        <ul className="flex flex-col justify-start">
          {messages && messages.length > 0 ? (
            messages.map((message) => (
              <li
                key={message.id}
                className="text-slate-900 font-semibold text-2xl"
              >
                {message.message}
              </li>
            ))
          ) : (
            <li>No messages yet</li>
          )}
        </ul>
      </div>
    </main>
  );
}
