package esrom.gemini.llm.gemini;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/gemini")
public class GeminiChatController {
    ChatClient chatClient;

    public GeminiChatController (ChatClient.Builder builder) {
        chatClient = builder.build();
    }
    @PostMapping("/chat")
    public ChatResponse getGeminiChat(@RequestBody  String chatPrompt) {
        return chatClient.prompt().user(chatPrompt).call().chatResponse();
    }
}
