[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling Practice

Now that's you've learned about non-relational databases and how to structure
them with schemas, let's practice looking at actual data sets and creating a
structure based on the documents inside of them.

## Prerequisites

- MongoDB
- Mongoose
- Data Modeling & Schemas

## Instructions

1. Fork and clone this repository.
2. Change into the new directory.
3. Fulfill the listed requirements.

Starter code is available in the `data-sets` directory. 

## Requirements

In the `data-sets` directory, you'll find a few subdirectories. Each of these
subdirectories contains a `json` file with a data set. Based on the data set,
create a file representing each model that includes:

- Proper naming convention of the model's `js` file
- A variable `Schema` set equal to `mongoose.Schema`
- Model defined using the `Schema` method
- Properties that correlate with the data set
- Appropriate data types for each property
- Export schema using `module.exports`

### DB Connection

Setup the `connection` to the db which connects to a your db and all other supporting code. 

### Models
Create a `models/` directory, and create the schemas/model for the data using the structure of the objects based on the dataset. 

### Seeding Data

Seed the database and update `package.json` to include a new `db:seed` startup script for each seed file.

### Controllers 

Create a `controllers` directory and a separate file for each controller. Write a function for each of the following to add CRUD functionality. 

Here is what the controller functions should be named regardless of the dataset.  You are not responsible for creating the routes only the DB and Controller side of the app.  You must use the method named defined below. 


| Route | Method | Controller | Response         |
| ------ | ------ | --------- | ---------------- |
| /person | GET    | index()     | Array of all objects |
| /person  | POST   | create()    | The object that was created   |
| /person/:id | GET    | show() |  A single object          |
| /person/:id  | DELETE | delete() | Confirmation the object was deleted   |
| /person/:id  | PUT    |update() |  The object that was updated   |

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
