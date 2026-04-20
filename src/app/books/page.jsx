import BookCard from "@/components/BookCard";

/**
 * 
 * cache: no store -> it will fetch tha dara on every request, it will not cache the data, it will always fetch the data from the server, it is useful when you want to fetch the data that is frequently updated, like stock price, weather, news etc.
 * 
 * cache: force-cache -> it will cache the data on the first request, and it will return the cached data on subsequent requests, it is useful when you want to fetch the data that is not frequently updated, like user profile, product details etc.
 * 
 * cache: default -> it will use the default caching strategy of the browser, it will cache the data based on the HTTP headers sent by the server, it is useful when you want to fetch the data that is not frequently updated, and you want to take advantage of the browser caching.
 * 
 * revalidate: 10 -> it will cache the data for 10 seconds, and after 10 seconds it will fetch the data from the server again, it is useful when you want to fetch the data that is frequently updated, but you want to reduce the number of requests to the server.
 * 
 * revalidate: 0 -> it will not cache the data, it will always fetch the data from the server, it is useful when you want to fetch the data that is frequently updated, like stock price, weather, news etc.
 * 
 * revalidate: false -> it will cache the data indefinitely, it will never fetch the data from the server again, it is useful when you want to fetch the data that is not frequently updated, and you want to take advantage of the browser caching.
 * 
 * revalidate: true -> it will cache the data indefinitely, but it will revalidate the data on every request, it is useful when you want to fetch the data that is not frequently updated, but you want to ensure that the data is always fresh.
 * 
 * revalidate: 10 -> it will cache the data for 10 seconds, and after 10 seconds it will fetch the data from the server again, it is useful when you want to fetch the data that is frequently updated, but you want to reduce the number of requests to the server.
 * 
 * revalidate: 0 -> it will not cache the data, it will always fetch the data from the server, it is useful when you want to fetch the data that is frequently updated, like stock price, weather, news etc.
 * 
 * revalidate: false -> it will cache the data indefinitely, it will never fetch the data from the server again, it is useful when you want to fetch the data that is not frequently updated, and you want to take advantage of the browser caching.
 * 
 * revalidate: true -> it will cache the data indefinitely, but it will revalidate the data on every request, it is useful when you want to fetch the data that is not frequently updated, but you want to ensure that the data is always <fresh className=""></fresh>
 */

const BooksPage = async () => {
  const res = await fetch("http://localhost:5000/books", {
    cache: "force-cache",
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
