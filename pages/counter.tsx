import { useAppDispatch, useAppSelector } from '../rtk/app/hooke';
import { decrement, increment } from '../rtk/features/counterSlice';

const Counter = () => {
      // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
 

  // omit rendering logic
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increament</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </>
    );
};

export default Counter;