const bookRouter = require("express").Router()
const bookController = require('../controllers/bookController');


// bookRouter.get('/',bookController.getBook);
// bookRouter.post('/book',bookController.addBook);
// bookRouter.patch("/book/:id",bookController.updateBook)

// bookRouter.delete("/book/:id",bookController.deleteBook)

bookRouter.route("/book").get(bookController.fetchBook).post(bookController.addBook)
bookRouter.route("/book/:id").delete(bookController.deleteBook).patch(bookController.updateBook).get(bookController.singleFetchBook)

//exports 
module.exports = bookRouter