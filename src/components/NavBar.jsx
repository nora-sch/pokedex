function NavBar({ index, listLength, updateIndex}) {
  const handleChangePrevious = () => {
    if (index > 0) updateIndex(index - 1);
  };
  const handleChangeNext = () => {
    index < listLength - 1
      ? updateIndex(index + 1)
      : updateIndex(index);
  };
  return (
    <nav className="navigation-bar">
      <button index={index} onClick={handleChangePrevious}>
        Previous
      </button>
      <button index={index} onClick={handleChangeNext}>
        Next
      </button>
    </nav>
  );
}

export default NavBar;
