import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer YnzScm9Fx2kcPqANF4aqAvqOTzm27J-4pElt19Fe2k7TB8bzGtslGSJEb8lFVzSDg_dy1zpTXDyErFMfqJoNoqs4eSYGQSKlPTAjPYiZW4hhfOASFpFjD74Yi3q4XXYx'
    }
});