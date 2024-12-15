import { useEffect, useState } from "react";
import Booksection from "./Booksection";
import Categories from "./Categories/Categories";

 const Home = () => {
  const [nonfiction, setNonfiction] = useState(null);
  const [fictionBooks, setFictionBooks] = useState(null);
  const [childrenBooks, setChildrenBooks] = useState(null);
  const [selfBooks, setSelfBooks] = useState(null);

  const fetchData = async (url, setData) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.categories || data.books); // Extract the books array from the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(
      "https://run.mocky.io/v3/093a56f3-24ab-4750-96be-d690540a0dde",
      setNonfiction
    );
    fetchData(
      "https://run.mocky.io/v3/3543f52f-cae6-4300-86d0-f68a4af40ccf",
      setFictionBooks
    );
    fetchData(
      "https://run.mocky.io/v3/25270abb-4811-4a84-abb1-67a1a3a321ac",
      setChildrenBooks
    );
    fetchData(
      "https://run.mocky.io/v3/e7694475-b8f8-4efa-a195-e153b0df8ddc",
      setSelfBooks
    );
  }, []);

  return (
    <>
      <Categories />
      <Booksection book={nonfiction} sectionTitle="Nonfiction" />
      <Booksection
        book={fictionBooks}
        sectionTitle="Fiction"
        style={{
          backgroundImage: 'url("/images/moonlight.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="text-color-white"
      />
      <Booksection book={childrenBooks} sectionTitle="Children's" />
      <Booksection
        book={selfBooks}
        sectionTitle="Self Improvement"
        style={{
          backgroundImage: 'url("/images/darkphoto.jpg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="text-color-white"
      />
    </>
  );
};
export default Home;