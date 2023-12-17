const crypto = require("crypto");

// To generate a unique id
const generateUniqueId = (data) => {
  // crypto to create a hash of the combined string
  const hash = crypto.createHash("sha256").update(data).digest("hex").substring(0, 10);

  return hash.toUpperCase();
};

module.exports = { generateUniqueId };
