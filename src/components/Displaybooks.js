import React, { useRef } from 'react';

function Diplaybooks() {
  const title = useRef();
  const Author = useRef();
  const category = useRef();
  return (
    <>
      <input ref={title} type="text" placeholder="BookName" />
      <input ref={Author} type="text" placeholder="Author" />
      <select ref={category} name="Category">
        <option>Select Category</option>
        <option>Adventure</option>
        <option>Action</option>
        <option>Comedy</option>
        <option>Drama</option>
        <option>Horror</option>
        <option>Magic</option>
        <option>Military</option>
        <option>Mystery</option>
        <option>ports</option>
        <option>Sci-Fi</option>
        <option>Space</option>
      </select>
      <button type="submit">Submit</button>
    </>
  );
}
export default Diplaybooks;
