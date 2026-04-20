export const generateStaticParams = async () => {

  const res = await fetch("http://localhost:5000/books");

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const books = await res.json();

  return books.map((book) => ({
    bookId: book.id.toString(), // must be string
  }));
};


const BookLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen gap-2">
      <h2>Loading book details...</h2>
      <span className="loading loading-spinner text-error"></span>
    </div>
  );
};

export default BookLoading;