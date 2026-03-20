exports.handler = async (event) => {
  try {
    // Netlify provides visitor IP in headers
    const ip =
      event.headers["x-forwarded-for"] ||
      event.headers["client-ip"] ||
      event.headers["x-nf-client-connection-ip"];

    // send to webhook
    await fetch("YOUR_WEBHOOK_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ip: ip,
        userAgent: event.headers["user-agent"],
        time: new Date().toISOString()
      })
    });

    return {
      statusCode: 204 // no visible response
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "error"
    };
  }
};
