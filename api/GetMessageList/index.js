module.exports = async function (context, req) {
  context.res = {
    body: {
      text: ["Hello from the Second API", "This is a new Function", "End of Message List"]
    }
  };
};
