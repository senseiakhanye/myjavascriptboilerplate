const getUser = async () => {
  let result = await fetch("/users");
  return handleResult(result);
}

const handleResult = async (result) => {
  try {
    const data = await result.clone().json();
    return data;
  } catch ( error ) {
    if (result != null) {
      const err = await result.text();
      console.log(err); //eslint-disable-line no-console
      throw new Error(err);
    }
    throw new Error(error.message);
  }
}

module.exports = getUser;
