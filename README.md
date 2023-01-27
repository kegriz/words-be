# WORDS BE App

## Quick start
- install node js.
- enter app folder.
- install dependencies: \
`npm install`

- star app in terminal: \
`node .`

## Local MySQL database setup
- Install MariaDB for local MySQL database: \
https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/ \
`brew install mariadb`

- Start MariaDB server: \
`mysql.server start`

- Run MariaDB: \
`mysql` >> MariaDB [(none)] (and choose user) \
or `sudo mysql -u root` (root user) \
`\q` for quit

- Create 'words' DB: \
`create database words;`

 - Select this DB: \
`\u words` >> MariaDB [words]

- Create 'words' table: \
`create table words (id int NOT NULL AUTO_INCREMENT, pl varchar(255), en varchar(255), PRIMARY KEY (id));`

- Add example record to wors table: \
`INSERT INTO words (pl, en) VALUES ('pies', 'dog');`

- Check your records: \
`SELECT * FROM words;`

- Update your record: \
`UPDATE words SET en = 'cat lol' WHERE id = 1;`

- Setup config to use DB in project: \
`SELECT user FROM mysql. user;` (check users) \
`SELECT current_user();` (check current user eg. root@localhost) \
`ALTER USER 'username'@'localhost' IDENTIFIED BY 'yourpa$$';` (set pass to user if you don't have it)

- Add your host, user, password and database name to `.env` file.
