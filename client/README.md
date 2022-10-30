# DiscSnob (Frontend)

DISCSNOB is a social hub where users can leave short "hot takes" on their favorite albums.

The Home page is your list of all the albums in the DiscSnob database. Here you can search by title, add a new album, and read the reviews for each entry. After logging in or creating an account in the Profile tab, you'll be greated with a list of albums that you have already reviewed. The My Reviews tab is where you can drop a review on one of the albums.  You'll also have the ability to edit or delete anything you've previously posted.

##Setup:
To get started, in the top level directory run the following to download the frontend and backend dependencies:
```sh
$ bundle install
$ npm install --prefix client
```

You can run the Rails API on localhost:3000 by running:
```sh
rails s
```

To run the React app, in another tab or window run:
```sh
npm start --prefix client
```





VIDEO:
A video walkthrough of the application running can be found [here](https://www.youtube.com/watch?v=KY3WjMBmdzE&ab_channel=DerekAraujo).


## Acknowledgement
This application was created using Create React App.

Font Used: Google Fonts; [Robato Condensed](https://fonts.google.com/specimen/Roboto+Condensed?preview.size=29)