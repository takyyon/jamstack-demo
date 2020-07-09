module.exports = async function (context, req) {
  context.res = {
    body: {
      text: "Hello from World 2"
    }
  };
};
