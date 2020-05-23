# reecemartin.github.io

A personal website open for use by myself and others. Feel free to fork!

# What is the site?

The purpose of this site is to provide a resume/portfolio like presentation of my skills, achievements and interests, largely for purposes of sharing. However this site is also a place for me to try deploying and testing some frontend and web technologies 
for personal practice. 

I also feature some small demo features one of which is based on work in another one of my Github repositories.
https://github.com/reecemartin/binaryneuralnet // Needs a fix

# Deployment / Dependencies

In order to run the website you'll need NodeJS (https://nodejs.org/en/), once Node is installed you can use your favorite terminal to install React with ```npm install react```.

In order to deploy the website, cd into the project folder and ```npm run``` this should run the development server and open the website up on your browser via localhost. Once things look good you can run ```npm run build``` this will package things up so you can easily deploy to something like Github pages.

## New Personal Website Project

One big project I am currently planning is a total revamp of my personal website using React and a nice functional organization model. Ideally this will significantly simplify expansion and modification of my website in the future with plug and play components. In addition this will be an oppurtunity to clean up and beautify the site with a new layout and updated content.

### Update December 5 - 2019

The new personal website project is coming along nicely, I have replaced the navigation at the top of the page with nicely styled components courtesy of Material UI (https://material-ui.com/). I have also created both single and multi-picture components which have integrated styling and text functionality which will be a great asset in creating an attractive new bio website. 

### Update December 6 - 2019

The new navigation at the top of the screen is already growing on me but, ugh it doesn't look very good on mobile (see below).

![Desktop - Before](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/BeforeDesktop.jpg)

As you can see things look pretty nice on desktop but, on mobile we have this.

<img src="https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/Pixel2%20Before.png" width="200" height="400">

So beyond being hideous the buttons are pushing the page leading to potential for horizontal movement on mobile which just will not do. To rectify this I split the Button Group into two. This makes mobile look lovely.

<img src="https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/Pixel2%20After.png" width="200" height="400">

Unfortunately this means desktop looks a little screwy. 

![Desktop - Int](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/AfterDesktop.jpg)

I was going to let this just slip by but, given I am trying to make this a decent website my habit of doing 0 mobile optimization is going to have to be eradicated. It's not even that I expected working with mobile to be that hard (though I've hard it can be annoying) I just could not be bothered previously. Fortunately, the rest of my page outside of the header looks fine on mobile. Thanks to React's component based architecture this means I simply need to install this NPM package for detecting mobile device usage (https://www.npmjs.com/package/react-device-detect) and then I can drop the isMobile variable into a ternary and voila! I've got the best of both worlds!

Now at this point things have got a little gross in the code since both for this logic and the multiple picture logic I am duplicating a ton of code. My next step will likely be a refactor of that! I will also need to refactor the packaging before I push things live but, that can wait.

### Update January 7 - 2020

It's been a month since our last update but, I haven't done a TON since I have been on holidays relaxing, time to get back to expanding this project.

Since the look of the website is somewhat cluttered right now, I wanted to make it so clicking on a card would expand the associated images below it, this is what the page now looks by default . . . 

![Desktop - With Unexpanded Cards](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/UnexpandedCards.jpg)

and when you expand an card.

![Desktop - With Expanded Cards](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/ExpandedCard.jpg)

At the very bottom of the page I also added a close all button, that way as the user moves down the page and wants to get back to the top of the page it doesn't take too long - HCI right?

![Desktop - Close All Button](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/CloseAll.jpg)

Next once I am done with the expansion feature being fully cleaned up, I am going to do some more refactoring to clean up the code and the issues I have posted and then I will continue adding more content. I also want to add a dynamic scroll to top button which appears when at the bottom 10% of the page.

### Update April 14 - 2020

After a lenghty hiatus due to my final semester of University needing to be finished up, I'm finally back to working on my personal website. I had a number of "cleanups" planned before I stopped working on the project so those will likely be my first order of business before I get back to working on new features. I hope all are staying safe during the current global health crisis.

![Text - Before](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/TextMisAligned.png?raw=true)

I readded some text from my OG site however I was having some alignment issued, I fixed this by setting the margin on the H3 for this text to "auto".

![Text - After](https://github.com/reecemartin/reecemartin.github.io/blob/master/personalwebsite2020/src/Images/TextReAligned.png?raw=true)

### Update April 26 - 2020

Last time I posted the biggest issue I was facing was a bug which meant that only a single picture card could open at once. Notably, the individual cards could be opened and closed but, if one card was open and another was clicked it would automatically close the open card and open the clicked card. While this behavior is not necessarily all that bad, it was not the intended behavior and hence needed to be fixed. 

After a little bit of digging it turned out the issue causing this problem had to do with state and how I was storing it for the various cards. The cards and state were stored as a list so whenever state was updated for one card the whole list ended up getting updated, however this update did not respect whether the current state of the various cards was opened or closed. It set the clicked card to open and essentially reset the other cards. This was rectified by maintaining the current state of all non-clicked cards and provided for a good reminder on state, objects and lists and their behavior.

### Update May 23 - 2020

Due to a ton of stuff coming up I have not been able to work on my site nearly as much as I've wanted to. I'm setting a deadline for myself for when the new site goes live and replaces the old one of June 1st! Here goes nothing . . . 
