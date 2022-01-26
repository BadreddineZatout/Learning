import { ref } from "vue";
const useCounter = (initialCount = 0, stepSize = 1) => {
  const count = ref(initialCount);
  const increment = () => {
    count.value += stepSize
  };
  return {
    count,
    increment,
  };
};

export default useCounter;
