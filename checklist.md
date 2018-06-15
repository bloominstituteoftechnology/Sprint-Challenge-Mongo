###Sprint Challenge Checklist

- [X] Questions in Answers.md filled out
- [X] Files created for budgetModel, categoryModel, and expenseModel and their respective routers.
- [X]  Create Schemas
    - [X] BudgetSchema
    - [X] category Schema
    - [X] expense Schema
- [X] Add endpoint code to server.js. Remember to install any npm packages you need.
    - [ ] budgets
        - [ ] `POST to '/budgets'`
    - [ ] categories
        - [ ] `POST to '/categories'`
            - [ ] post a minimum of four categories so when you create your expenses you can assign where they go!
        - [ ] `GET '/categories'`
            - [ ] only .select the title of the categories
    - [ ] expenses
        - [ ] `POST to '/expenses'`
            - [ ] .select `budget_id` and `category_id`. Add this to your schema if not already there.
            - [ ] .populate your budget and category docs
            - [ ] `GET '/expenses'`
######Stretch Goals######
- [ ] Add as many CRUD endpoints as you can to break the application into separate Routers.
- [ ] Validate the data at the endpoint, before saving it to the database.
- [ ] Add a React front-end

- [ ] investigate what MongoDB's Aggregation Framework is all about. 
