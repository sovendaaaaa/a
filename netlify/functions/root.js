exports.handler = async (event) => {
  const ip = event.headers["x-forwarded-for"];

  // send IP to webhook
  await fetch("https://discord.com/api/webhooks/1484559494221529098/gAnMhEu5BpS8qQeTtEuuGbLOXIHQhDMQC8pM_E5FQRUkophtDGJ6V691WdDaQVGpb-xL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ip,
      time: new Date().toISOString()
    })
  });

  // return your homepage
  return {
    statusCode: 302,
    headers: {
      Location: "/main.html" // your actual page
    }
  };
};
