const BookDetailsPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await res.json();
  console.log(book);

  const { title, author } = book;

  return (
    <div>
      <h2>Book Details: {bookId}</h2>
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default BookDetailsPage;
