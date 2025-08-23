async function getMockData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log("API Called"));
    }, 2000);
  });
}

getMockData();
