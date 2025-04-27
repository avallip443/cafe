import React, { useEffect } from "react";

const Chatbot: React.FC = () => {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <df-messenger
        intent="WELCOME"
        chat-title="GrenouilleBot"
        agent-id="16269692-4b71-48cc-9e43-5d4bf150ee7e"
        language-code="en"
      ></df-messenger>
    </>
  );
};

export default Chatbot;
