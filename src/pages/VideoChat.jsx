import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import * as React from "react";

function randomID(len) {
    let result = "";
    if (result) return result;
    var chars =
            "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
        maxPos = chars.length,
        i;
    len = len || 5;
    for (i = 0; i < len; i++) {
        result += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return result;
}

export function getUrlParams(url = window.location.href) {
    let urlStr = url.split("?")[1];
    return new URLSearchParams(urlStr);
}

export default function VideoChat() {
    const roomID = getUrlParams().get("roomID") || randomID(5);
    let myMeeting = async (element) => {
        // generate Kit Token
        const appID = 931046615;
        const serverSecret = "8d71e563d051f86d168b34038b9ec1f0";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomID,
            "testUser",
            "NotTheRealSecret",
            3600
        );

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Personal link",
                    url:
                        window.location.protocol +
                        "//" +
                        window.location.host +
                        window.location.pathname +
                        "?roomID=" +
                        roomID,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConference,
            },
        });
    };

    return (
        <div
            className="myCallContainer"
            ref={myMeeting}
            style={{ width: "100vw", height: "100vh" }}
        ></div>
    );
}
