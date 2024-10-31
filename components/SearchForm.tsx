import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <>
      <Form action="/" scroll={false} className="search-form">
        <input
          aria-label="type search"
          name="query"    
          defaultValue={query}
          className="search-input"
          placeholder={"Rechercher"}
        />

        <div className="flex gap-2">
          {query && <SearchFormReset />}
          <button aria-label="send search" type="submit" className="search-btn text-white">
            <Search className="size-6" />
          </button>
        </div>
      </Form>
    </>
  );
};

export default SearchForm;
