export type TgOpts = {
    botToken: string;
    chatId: string;
    htmlText: string;
};

export type TgSendResult = {
    ok: boolean;
    status: number;
    responseJson: object;
};

export const sendMessage = async (opts: TgOpts): Promise<TgSendResult> => {
    const response = await fetch(
        `https://api.telegram.org/bot${opts.botToken}/sendMessage`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: opts.chatId,
                parse_mode: "HTML",
                text: opts.htmlText,
                disable_web_page_preview: true,
            }),
        }
    );
    const responseJson = await response.json();

    return {
        ok: response.ok,
        status: response.status,
        responseJson,
    };
};
