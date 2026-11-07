import {ChatContainer} from "./components/chat/chat-container";
export const App = () => {
  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h1>Work in Progress. This component will be used to chat with Gemini chat bot</h1>
          <h1>
              Please press the button to chat with the agent
             <>
                 <ChatContainer></ChatContainer>
             </>
          </h1>

      </div>
  );
};
