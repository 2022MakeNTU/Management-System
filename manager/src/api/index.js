import axios from "axios";
const instance = axios.create({ baseURL: "http://localhost:4000/api" });
// console.log("what is instance", instance);
const makePrediciton = async () => {
  const {
    data: { img },
  } = await instance.get("/prediction");
  return img;
};
const init = async () => {
  const {
    data: { rooms },
  } = await instance.get("/init");
  return rooms;
};
const guess = async (number) => {
  try {
    const {
      data: { status },
    } = await instance.get("/guess", { params: { number: number } });
    return status;
  } catch (error) {
    console.error(error);
    return "Invalid input";
  }
};

export { makePrediciton, init };
