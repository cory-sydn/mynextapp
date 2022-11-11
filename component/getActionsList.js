export const getActionsList = async () => {
  return fetch("https://cdn.mallconomy.com/testcase/actions.json")
    .then((response) => response.json())
    .catch((err) => console.log(err))
}