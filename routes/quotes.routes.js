const express = require('express');
const { getQuotes, addQuote, updateQuote, deleteQuote, getQuotesById } = require('../controllers/quotes.controller');

const router = express.Router();


router.get('/quotes', getQuotes);

router.get('/quotes/:quoteId', getQuotesById);

router.post('/quotes', addQuote);

router.put('/quotes/:quoteId', updateQuote);

router.delete('/quotes/:quoteId', deleteQuote);


module.exports = router;
