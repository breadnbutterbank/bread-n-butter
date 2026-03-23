function reply() {
  const responses = [
    "Try saving more money!",
    "Watch your subscriptions.",
    "Set a weekly budget."
  ];

  document.getElementById("response").innerText =
    responses[Math.floor(Math.random() * responses.length)];
}
