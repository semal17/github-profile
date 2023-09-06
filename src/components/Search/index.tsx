import { Button } from "components";
import { useRef } from "react";

type SearchPropsType = {
  onSubmit: (text: string) => void;
  hasError: boolean;
};

export const Search = ({ hasError, onSubmit }: SearchPropsType) => {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const text = searchRef.current ? searchRef.current.value : "";

    if (text) {
      onSubmit(text);
      searchRef.current && (searchRef.current.value = "");
    }
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="search">Лупа</label>
        <input type="text" id="search" placeholder="Enter GitHub name..." ref={searchRef}></input>
        <Button text="Search" onClick={handleSubmit} />
      </div>
      {hasError && <div>Error</div>}
    </form>
  );
};
