console.log('Initiated');

async function ban() {
    console.log('bannnn')
    const url = get('url').value;
    console.log('banning: ' + url);
    const result = await sendMessage({
        action: "ban-url",
        to: "background",
        url
    });

    const banList = await sendMessage({
        action: "banned-list",
        to: "background"
    });
    console.log(banList);
}

async function recommend() {
  console.log('recommending ')
  const url = get('url').value;
  console.log('recommending: ' + url);
  const result = await sendMessage({
      action: "recommend-url",
      to: "background",
      url
  });

  const recommendedList = await sendMessage({
      action: "recommended-list",
      to: "background"
  });
  console.log(recommendedList);
}

onclick('banUrl', ban);
onclick('recommendUrl', recommend);

