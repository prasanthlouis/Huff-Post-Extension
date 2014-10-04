Huff-Post-Extension
===================

This is a Chrome extension for the Huffington Post

So download this as a zip and extract it into a folder.

Now open google chrome and open the extensions page.

On the top right corner check the option developer mode.

Now hit load unpacked extension.

Point it to your extracted folder and you're all set!

A couple of things to note.

1) I love the Huffingtonpost and I can't live without it. However if you'd like another sites RSS to be shown instead,
change the feed URL within feed.js to a site of your choice.
If you'd like some other sections of the HuffingtonPost check here: http://www.huffingtonpost.com/syndication/

2) If you want to change the search site, change the URL in the popup html file with the name of the search type matching the query parameter of the site you want.

3) You can change the style of the menu within the CSS file.

4) The json file is necessary to show that its a google chrome extenstion.
If you'd like an app instead you can change the "browser_action" tag within manifest.json to "app" with the URL to the site of your choice.

5) The icon is stored as icon.png. If you're planning to change the icon, please make sure it has a resolution of 128 x 128.
