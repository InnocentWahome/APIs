function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making a request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only make requests to google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing request response");
    resolve(`Extra info from google + ${response}`);
  });
}

// makeRequest('Google')
// .then(response =>{
//     console.log('Response has been received')
//     return processRequest(response)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch(err =>{
//     console.log(err)
// })

async function replaceThis() {
  try {
    const response = await makeRequest("Facebook");
    console.log("Response has been received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

replaceThis();
