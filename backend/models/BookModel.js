import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true,},
    author: { type: String, required: true,},
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
   publishedYear: { type: String, required: true },
  }
);

const Book = mongoose.model('Book', bookSchema);
export default Book;
