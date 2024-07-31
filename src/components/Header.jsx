import { useState } from "react";
import { useDispatch } from "react-redux";
import doubleTick from "../assets/images/double-tick.png";
import notesImg from "../assets/images/notes.png";
import plusImg from "../assets/images/plus.png";
import { added, allCompleted, clearCompleted } from "../redux/todos/actions";

function Header() {
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleAdded = (e) =>{
       e.preventDefault();
       dispatch(added(text))
       setText('')
  }

  const handleInput = (e) => {
    setText(e.target.value)
  }

  const handleAllComplete = () => {
    dispatch(allCompleted())
  }

  const handleClearComplete = () => {
    dispatch(clearCompleted())
  }
  return (
    <div>
      <form onSubmit={handleAdded}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img
          src={notesImg}
          className="w-6 h-6"
          alt="Add todo"
        />
        <input
          value={text}
          onChange={handleInput}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImg}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li onClick={handleAllComplete} className="flex space-x-1 cursor-pointer">
          <img
            className="w-4 h-4"
            src={doubleTick}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li onClick={handleClearComplete} className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}

export default Header;