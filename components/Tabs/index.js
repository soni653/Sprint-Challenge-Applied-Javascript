// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newTab = (tabdata) => {
    
    const topic = document.createElement('div');

    topic.classList.add('tab');
    topic.textContent = tabdata;

    return topic;

}

const tabElement = document.querySelector('.topics');
const axiosPromise = axios.get("https://lambda-times-backend.herokuapp.com/topics");
//console.log(axiosPromise);

axiosPromise.then((response) => {
    //console.log(response.data.topics);

    const topicArray = response.data.topics;
    //console.log(topicArray);

    /*for(let i = 0; i < topicArray.length; i++){
        let createTab = newTab(topicArray[i]);
        tabElement.appendChild(createTab);
    }*/

    topicArray.forEach((item) => {

        const createTab = newTab(item);
        tabElement.appendChild(createTab);
   })
});
