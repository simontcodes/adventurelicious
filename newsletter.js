document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const emailInput = document.getElementById("email").value;
    const apiKey = "YOUR_MAILCHIMP_API_KEY";
    const listId = "YOUR_MAILCHIMP_LIST_ID";
    const dc = "YOUR_MAILCHIMP_DC"; // Your MailChimp data center

    const apiUrl = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;

    const data = {
      email_address: emailInput,
      status: "subscribed",
    };

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${apiKey}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from MailChimp, show success or error message
        if (data.status === "subscribed") {
          alert("Subscription successful!");
        } else {
          alert("Subscription failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
