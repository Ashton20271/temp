```ts
import {
    addMessagePreSendListener,
    removeMessagePreSendListener,
} from "@api/MessageEvents";
import { Devs } from "@utils/constants";
import definePlugin from "@utils/types";

const preSend = (_channelId: string, message: { content: string }) => {
    if (!message.content) return;

    // Don't add :3 if the message already ends with it.
    if (message.content.trimEnd().endsWith(":3")) return;

    message.content += " :3";
};

export default definePlugin({
    name: ":3",
    description: "Adds :3 to the end of every message you send.",
    authors: [
        {
            name: "Fenrys",
            id: 1223800047226060931n,
        },
    ],
    dependencies: ["MessageEventsAPI"],

    start() {
        addMessagePreSendListener(preSend);
    },

    stop() {
        removeMessagePreSendListener(preSend);
    },
});
```
