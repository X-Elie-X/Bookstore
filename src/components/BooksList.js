import Book from './Book';

const Bookslist = () => {
  const books = [
    {
      id: 1,
      title: 'books',
      author: 'books1',
      category: 'action',
    },
    {
      id: 2,
      title: 'books2',
      author: 'books2',
      category: 'action1',
    },
    {
      id: 3,
      title: 'books3',
      author: 'books3',
      category: 'action2',
    },
  ];
  return <Book books={books} />;
};

export default Bookslist;
