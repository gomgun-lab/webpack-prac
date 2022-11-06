module.exports = function myWebpackLoader(content) {
  console.log("loader exec");
  return content.replace("console.log(", "alert(");
};
