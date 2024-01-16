// import { useDispatch, useSelector } from "react-redux";
import {
  IncrementByValue,
  decrement,
  increment,
} from "./Redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./Redux/hooks";

const App = () => {
  // const { count } = useSelector((state) => state.counter);
  const { count, actualValue } = useAppSelector((state) => state.counter);

  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  return (
    <div className=" h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-400  rounded-md  bg-slate-50 p-10">
        <button
          // onClick={() => dispatch(IncrementByValue(5))}
          onClick={() => dispatch(IncrementByValue({ value: 5 }))}
          className="px-3 py-3 rounded-md bg-green-500 text-xl  font-semibold text-white"
        >
          Increment by value 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 rounded-md bg-green-500 text-xl  font-semibold text-white"
        >
          Increment
        </button>
        {/* <h1 className=" text-3xl mx-10">0</h1> */}
        <h1 className=" text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-3 rounded-md bg-amber-700 text-xl  font-semibold text-white"
        >
          Decrement
        </button>
      </div>

      <div className="mt-4">
        {actualValue.map((message, index) => (
          <p key={index} className="text-green-500">
            {message}
          </p>
        ))}
      </div>
    </div>
  );
};

export default App;
