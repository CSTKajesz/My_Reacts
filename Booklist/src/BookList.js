import Book from "./Book";
import { books } from "./books";


function BookList() {
    return (
        <>
            <h1>casparus könyvlista</h1>
            <section className='booklist'>
                {books.map((book) => {
                    return <Book {...book} key={book.id} />;
                })}
            </section>
        </>
    );
}

export default BookList;
