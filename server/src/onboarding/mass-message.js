const ONBOARDING_TOKEN = "...";

const api = `https://api.telegram.org/bot${ONBOARDING_TOKEN}`;
async function makeRequest(functionName, body) {
  const url = `${api}/${functionName}`;
  const headers = { "Content-Type": "application/json" };
  const opts = {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  };

  return fetch(url, opts);
}

async function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
}

async function sendMessage(text, chatId) {
  let body = { chat_id: chatId, text: text };

  const response = await makeRequest("sendMessage", body);
  const json = await response.json();
  if (!json.result) {
    console.error(json);
    return "";
  } else {
    return json.result.message_id;
  }
}

async function massMessage(text, recipients) {
  for (const recipient of recipients) {
    console.log("sending to", recipient);
    await wait(3);
    const messageId = await sendMessage(text, recipient);
    console.log("sent", messageId);
    console.log();
  }
}

const dayOneCfRecipients = [];

const text = `Hi again, I hope you’re enjoying the piece! Now that it’s been online for a few days, we wanted to give you the opportunity to speed along your conversation with Sixty-Something. This is a completely optional feature, in case you’re finding it hard to follow the story with the longer breaks in between. 
If that’s the case, you can type “/skip” into your chat with Sixty-Something to jump to their next message. 
This is also a good way to check if you’re stuck because of a bug – if your “/skip” message gets erased instead of activating Sixty-Something type, then the break is not intentional. You can write us if this is the case, so we can try to fix it for you.
So long!
`;

async function main() {
  const recipients = friCfRecipients
    .map((x) => x.name)
    .filter((x) => !x.includes("-"));
  // const wedRecipients = wedCfRecipients.map((x) => x.name).filter((x) => !x.includes('-'));
  // const recipients = wedRecipients.filter((x) => !dayOneRecipients.includes(x));
  // console.log(wedRecipients.length, dayOneRecipients.length, recipients.length);
  console.log(`sending to ${recipients.length} recipients:`);
  await wait(1);
  console.log(recipients);
  await wait(1);
  console.log("waiting 5s…");
  console.log();
  await wait(5);
  console.log("sending this text:");
  console.log(text);
  console.log();
  await wait(1);
  console.log("waiting 5s…");
  await wait(5);
  await massMessage(text, recipients);
}

main()
  .then(() => console.log("done"))
  .catch((e) => console.error(e));

//  npx wrangler kv:key --namespace-id 360bc81ac2bd4f59b02b27a103c55067 list | pbcopy
