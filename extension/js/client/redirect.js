async function init() {
    console.log('The redirector has been initialized.');
    const recommendedList = await sendMessage({
        action: "recommended-list",
        to: "background"
    });
    console.log(recommendedList.urls);
    const recommendedListDiv = get('recommendedUrlsList');

      // create a new div element
    recommendedList.urls.map( url => {
        const newRecommendation = document.createElement("a");
        newRecommendation.href = url;
        newRecommendation.target = '_blank';
         // and give it some content
        const newContent = document.createTextNode(url);
        newRecommendation.appendChild(newContent);
        recommendedListDiv.appendChild(newRecommendation);
    });
}

window.onload = init;