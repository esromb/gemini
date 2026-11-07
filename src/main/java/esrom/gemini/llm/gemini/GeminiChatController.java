package esrom.gemini.llm.gemini;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.messages.AbstractMessage;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/gemini")
public class GeminiChatController {
    ChatClient chatClient;

    public GeminiChatController (ChatClient.Builder builder) {
        chatClient = builder.build();
    }
    @PostMapping("/chat")
    public String getGeminiChat(@RequestBody  String chatPrompt) {
        return Optional.ofNullable(chatClient.prompt().user(chatPrompt).call().chatResponse()).map((ChatResponse::getResult)).map(Generation::getOutput).map(AbstractMessage::getText).orElse("Sorry try again!");
    }
}
