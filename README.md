# pkny

## editing content for dummies

1) Clone the repository with `git clone [repo url]`, you can get repo address by clicking green "CODE" button in the upper right, above the file list. You might need a github account for that, not sure.
2) After you cloned the repo you need to install node and npm, here is a [handy guide](https://heynode.com/tutorial/install-nodejs-locally-nvm/).
3) After you got node running start dev server with `npm start` or create a build with `npm run build` and open index.html after. 
4) Edit `content.js` to see changes in the website content. Note that changes will happen live only with devserver option from above, if you want to create builds you will have to do it every time after editing `content.js`
 
- `content.js` object is organized as straightforward as it was possible. Each site section is in its own object key (webdesign, print, ui etc.)
- Main text is split into paragraphs with `<p></p>` tags.
- Images are strings corresponding with files in `/public/img/` folder.
- ImageDesc is an array containing two strings placed above


## content.js

### images naming convention

All images should be named according to the following convention:

**Regular image**
```
image-1.png
```

**Retina image**
```
image-1@2x.png
```

**Mobile image**
```
image-1-mobile@2x.png
```
