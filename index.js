function genRandomPassword({
  length = 8,
  upper = true,
  lower = true,
  symbols = true,
} = {}) {
  typeof parseInt(length) !== "number"
    ? (length = 8)
    : (length = parseInt(length));
  typeof upper !== "boolean" ? (upper = true) : (upper = upper);
  typeof lower !== "boolean" ? (lower = true) : (lower = lower);
  typeof symbols !== "boolean" ? (symbols = true) : (symbols = symbols);
  let chars = "0123456789";
  if (upper === true) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lower === true) chars += "abcdefghijklmnopqrstuvwxyz";
  if (symbols === true) chars += "!@#$%^&*()";
  let pass = "";
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    pass += chars[randomNumber];
  }
  return pass;
}

module.exports.genRandomPassword = genRandomPassword;
