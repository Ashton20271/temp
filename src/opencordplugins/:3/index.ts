import {
    addMessagePreSendListener,
    removeMessagePreSendListener,
} from "@api/MessageEvents";
import definePlugin from "@utils/types";

let listener: ReturnType<typeof addMessagePreSendListener>;

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
        listener = addMessagePreSendListener((_channelId, message) => {
            if (!message.content) return;

            // Prevent :3 from being added multiple times.
            if (message.content.endsWith(":3")) return;

            message.content += " :3";
        });
    },

    stop() {
        removeMessagePreSendListener(listener);
    },
});
