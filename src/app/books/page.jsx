import BookCard from "@/components/BookCard";

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", {
    cache: "no-store",
  });
  const books = await res.json();
  console.log(books);
  return (
    <div>
      <h2>Books: {books.length}</h2>
      <div className=" grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
