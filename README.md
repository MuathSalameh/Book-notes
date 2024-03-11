# Book-Notes 
A Web site to add books you have read , with the ability to edit or delete them.<br>
This project uses a PostgreSQL Database to store the data about the books.<br>
Simple project built using JavaScript(node.js,Express) and ejs.<br> <br>
I used this API ( [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers) ) to show the books covers on the website pages.
<br> <br>
I made this project to train my self on how to use PostgreSQL datatbase with the 'CRUD' methods <br> to manipulate data in the database
, and to gain more experience using Express/Node.js for server-side programming.</br> </br>
I'm really looking forward to make changes to the website , whether on the front-end or the back-end side, </br> and you are
welcome if you have any suggestions or updates to this project .
- - - - - - - - - - - - - - - -
## <i> How to use : </i>
1- If you want to use the project make sure you've installed PostgreSQL :<br>
[PostgreSQL](https://sbp.enterprisedb.com/getfile.jsp?fileid=1258649) <strong>for Windows</strong><br/>
[PostgreSQL](https://sbp.enterprisedb.com/getfile.jsp?fileid=1258653) <strong>for Mac</strong> <br/>

2- After setting up PostgreSQL ,Create a Database called 'booknotes' <br>

3- Create a table called books: 
```
CREATE TABLE books (
	id SERIAL PRIMARY KEY ,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(2000),
	note VARCHAR(2000) ,
	isbn BIGINT UNIQUE, 
	date DATE,
);
```
<br/>
4- Install this Project and go to index.js file and change the Client information with your information <strong>before</strong> starting the project
<br/>
<br/>
<img src="https://github.com/MuathSalameh/Book-notes/assets/150061588/cffbcb62-c24b-4dab-a63d-e9fc369720ba"/>

- - - - - - - 
## <i>How to Install :</i>
1-clone this project :
```
git clone https://github.com/MuathSalameh/Book-notes.git
```
2-install the required node.js modules :
```
npm install
```
3-start the project  :
```
node index.js
```
4-open your browser and search : 
```
localhost:3000
```
- - - - - - - - 
##### Main-page picture : <br/>
<img src="https://github.com/MuathSalameh/Book-notes/assets/150061588/08f3516a-a8bf-4b5e-ab0e-5896c1e610bb" />

##### Notes-page picture : <br/>
<img src="https://github.com/MuathSalameh/Book-notes/assets/150061588/0482524e-3554-465e-bb1e-fa869a7acea1" />

##### Add-page picture : <br/>
<img src="https://github.com/MuathSalameh/Book-notes/assets/150061588/81caf182-dfbe-4efd-b7b7-3a45f8047ede" />

##### edit-page picture : <br/>
<img src="https://github.com/MuathSalameh/Book-notes/assets/150061588/d7327f67-2ad0-4bc6-95d3-31690492b562" />


















