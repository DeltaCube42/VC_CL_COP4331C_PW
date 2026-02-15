# VC_CL_COP4331C_PW
A repository for COP-4331C's COLORs Lab.

## What is this?
This repository exists as a guide for COP-4331C's COLORs Lab.
Requirements beyond this guide are as follows:
  - A LAMP Droplet on Ubuntu via DigitalOcean. [ https://marketplace.digitalocean.com/apps/lamp ]
  - A usable domain via GoDaddy or some other equivilant.
  - PuTTY or any other SSH you prefer. [ https://putty.org/index.html ]
This file is meant to be read in order, and acts as an instruction book.
If you decide to skip one or more steps, things might not work.

## DigitalOcean Guide:
  - Once your LAMP Droplet is purchased and you have chosen a ROOT password:
    - Connect to the Droplet using the following command in PuTTY or your chosen SHH:
      - ssh root@MyDomainOrIPAddress
    - Replace MyDomainOrIPAddress with your purchased domain or the Droplet's IPv4.
    - Once this command is ran, you will be prompted for your ROOT password.
    
## MySQL Database Guide:
  - Once you are logged into your Droplet, you can begin creating and populating the database.
  - To begin, run the following code to create a database named COP4331!
    - create database COP4331;
    - use COP4331;
  - From there, you must create the database's tables.
    - CREATE TABLE `COP4331`.`Users` ( `ID` INT NOT NULL AUTO_INCREMENT , `FirstName` VARCHAR(50) NOT NULL DEFAULT '' , `LastName` VARCHAR(50) NOT NULL DEFAULT '' , `Login` VARCHAR(50) NOT NULL DEFAULT '' , `Password` VARCHAR(50) NOT NULL DEFAULT '' , PRIMARY KEY (`ID`)) ENGINE = InnoDB;
    - CREATE TABLE `COP4331`.`Users` 
( 
	`ID` INT NOT NULL AUTO_INCREMENT , 
	`FirstName` VARCHAR(50) NOT NULL DEFAULT '' , 
	`LastName` VARCHAR(50) NOT NULL DEFAULT '' , 
	`Login` VARCHAR(50) NOT NULL DEFAULT '' , 
	`Password` VARCHAR(50) NOT NULL DEFAULT '' , 
	PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
    - CREATE TABLE `COP4331`.`Colors` ( `ID` INT NOT NULL AUTO_INCREMENT , `Name` VARCHAR(50) NOT NULL DEFAULT '' , `UserID` INT NOT NULL DEFAULT '0' , PRIMARY KEY (`ID`)) ENGINE = InnoDB;
    - CREATE TABLE `COP4331`.`Colors` 
( 
	`ID` INT NOT NULL AUTO_INCREMENT , 
	`Name` VARCHAR(50) NOT NULL DEFAULT '' , 
	`UserID` INT NOT NULL DEFAULT '0' , 
	PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
    - CREATE TABLE `COP4331`.`Contacts` 
( 
	`ID` INT NOT NULL AUTO_INCREMENT , 
	`FirstName` VARCHAR(50) NOT NULL DEFAULT '' , 
	`LastName` VARCHAR(50) NOT NULL DEFAULT '' , 
	`Phone` VARCHAR(50) NOT NULL DEFAULT '' , 
	`Email` VARCHAR(50) NOT NULL DEFAULT '' , 
	`UserID` INT NOT NULL DEFAULT '0' , 
	PRIMARY KEY (`ID`)
) ENGINE = InnoDB;

- From here, the tables can be populated. These are just temporary users and user data.

  - insert into Users (FirstName,LastName,Login,Password) VALUES ('Rick','Leinecker','RickL','COP4331');
  - insert into Users (FirstName,LastName,Login,Password) VALUES ('Sam','Hill','SamH','Test');
  - insert into Users (FirstName,LastName,Login,Password) VALUES ('Rick','Leinecker','RickL','5832a71366768098cceb7095efb774f2');
  - insert into Users (FirstName,LastName,Login,Password) VALUES ('Sam','Hill','SamH','0cbc6611f5540bd0809a388dc95a615b');

  - insert into Colors (Name,UserID) VALUES ('Blue',1);
  - insert into Colors (Name,UserID) VALUES ('White',1);
  - insert into Colors (Name,UserID) VALUES ('Black',1);
  - insert into Colors (Name,UserID) VALUES ('gray',1);
  - insert into Colors (Name,UserID) VALUES ('Magenta',1);
  - insert into Colors (Name,UserID) VALUES ('Yellow',1);
  - insert into Colors (Name,UserID) VALUES ('Cyan',1);
  - insert into Colors (Name,UserID) VALUES ('Salmon',1);
  - insert into Colors (Name,UserID) VALUES ('Chartreuse',1);
  - insert into Colors (Name,UserID) VALUES ('Lime',1);
  - insert into Colors (Name,UserID) VALUES ('Light Blue',1);
  - insert into Colors (Name,UserID) VALUES ('Light Gray',1);
  - insert into Colors (Name,UserID) VALUES ('Light Red',1);
  - insert into Colors (Name,UserID) VALUES ('Light Green',1);
  - insert into Colors (Name,UserID) VALUES ('Chiffon',1);
  - insert into Colors (Name,UserID) VALUES ('Fuscia',1);
  - insert into Colors (Name,UserID) VALUES ('Brown',1);
  - insert into Colors (Name,UserID) VALUES ('Beige',1);
  - insert into Colors (Name,UserID) VALUES ('Blue',3);
  - insert into Colors (Name,UserID) VALUES ('White',3);
  - insert into Colors (Name,UserID) VALUES ('Black',3);
  - insert into Colors (Name,UserID) VALUES ('gray',3);
  - insert into Colors (Name,UserID) VALUES ('Magenta',3);
  - insert into Colors (Name,UserID) VALUES ('Yellow',3);
  - insert into Colors (Name,UserID) VALUES ('Cyan',3);
  - insert into Colors (Name,UserID) VALUES ('Salmon',3);
  - insert into Colors (Name,UserID) VALUES ('Chartreuse',3);
  - insert into Colors (Name,UserID) VALUES ('Lime',3);
  - insert into Colors (Name,UserID) VALUES ('Light Blue',3);
  - insert into Colors (Name,UserID) VALUES ('Light Gray',3);
  - insert into Colors (Name,UserID) VALUES ('Light Red',3);
  - insert into Colors (Name,UserID) VALUES ('Light Green',3);
  - insert into Colors (Name,UserID) VALUES ('Chiffon',3);
  - insert into Colors (Name,UserID) VALUES ('Fuscia',3);
  - insert into Colors (Name,UserID) VALUES ('Brown',3);
  - insert into Colors (Name,UserID) VALUES ('Beige',3);

- Finally, you can create a user to access the database.
- For this example, we will use the username "TheBeast" and password "WeLoveCOP4331".
  - Use COP4331;
  - create user 'TheBeast' identified by 'WeLoveCOP4331';
  - grant all privileges on COP4331.* to 'TheBeast'@'%';
- After all of this is done, the database is done and ready to use.

## Setting up the API and Frontend
- The final part is setting up the API and Frontend.
- While all files are provided, you will need to edit a few things.
- Within the folder LAMPAPI are three PHP files.
- In each PHP file is this line of code as a placeholder:
  - $conn = new mysqli("localhost", "[FILL IN]", "[FILL IN]", "[FILL IN]");
- Each [ FILL IN ] is able to be replaced as so:
  - $conn = new mysqli("localhost", "username", "password", "database");
- For example, if you used the given database name, username, and password, you would fill in the blanks like so:
  - $conn = new mysqli("localhost", "username", "password", "database");
- Once these lines are changed, take a look in the folder JS and file code.js.
- The following line must have BLANK replaced with your IPv4 or domain.
  - const urlBase = 'BLANK';
- All other files can be used as-is.

## Setting up your Droplet's files.
  - The final part before you upload the files is to set up the directory tree.
  - First, navigate to root.
    - cd /root
  - Then, you can find your website's contents in /var/www/html
    - cd /var/www/html
  - While within the directory, create a directory for css, images, js, and LAMPAPI within the Droplet.
    - mkdir css
    - mkdir images
    - mkdir js
    - mkdir LAMPAPI
  - All files present within this repository are to be uploaded into thier respective folders.
    - EI: css/styles.css within this repository will be uploaded to /var/www/html/css within the Droplet.
  - The HTML files should be the last part you upload, and should be uploaded to /var/www/html.

## Testing!
  - Assuming you've uploaded all files to your Droplet correctly after modifying the code:
    - Try to open up your website and give it a go.
    - Attempt to login with a username and password.
    - Try to use the add and search functions.
  - If everything is working, congratulations! You've succesfully completed the COLORs Lab for COP-4331C!

## Disclaimers and Credits:
  - All baseline code and instructions provided by the University of Central Florida's very own Dr. Aashish Yadavally.
  - This is a submission for "[Assignment 1] Version Control with GitHub" and is in no way an ongoing project.
  - There will be most likely no further commits to this repository, and it will most likely be taken down once the assignment is graded.
  - All Licence information provided in associated LISCENCE file. This project is listed under MIT liscencing.
