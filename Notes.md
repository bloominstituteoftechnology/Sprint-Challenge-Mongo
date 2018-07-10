### Setup Server:
npm i
mongod
mongo
yarn start

### Testing:

1. confirm api is running by going to `localhost:5000`

2. open Postman App and go to POST `localhost:5000/api/budgets`

    {
        "title": "Entertainment",
        "budgetAmount": 300
    }

Should return:  `"Saved budget successfully"`

Check GET `localhost:5000/api/budgets` and copy id

3. Go to POST `localhost:5000/api/expenses`:

{
	"amount": 100,
	"description": "New Video Game System",
	"budget_key": "1",
	"category_key": "2"
}

Should return: `"Saved expense"`

4. Go to POST `localhost:5000/api/categories`:

{
	"key": 1,
	"title": "Gaming"
}






