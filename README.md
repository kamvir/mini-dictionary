# mini-dictionary

Hey guys this is my dictionary app created via ionic framework and cordova.

<h1>Pre-requisites</h1>
<ul>
<li>
<p>NodeJs and NPM (if you don't have click <a href="https://nodejs.org/en/download/">here</a>)</p>
</li>
<li>
<p>Android Studio/ Xcode (for running in our native devices)</p>
<p>If you don't have it get it here: </p>
<p><a href="https://developer.android.com/">Android Studio</a></p>
<p><a href="https://developer.apple.com/xcode/">X Code</a></p>
</li>
</ul>

<h1>Steps to make it runnable in your PC: </h1>

<ul>
<li>
<p>Firstly clone this project into your local machine and go to that directory and type:</p>
<code>
npm i
</code>
</li>
<li>
<p>
After that type: 
</p>
<code>
ionic s
</code>
</li>
</ul>
<p>
That's it. It will open your web browser and will run by default on <a href="http://localhost:8100" target="_blank">http://localhost:8100</a> successfully.
</p>
<h1>Steps to make it runnable in your native device (android/ ios): </h1>
<ul>
<li>
<p>
To make it run in your native device, first add cordova platform by running this command: 
</p>
<code>
ionic cordova platform add android/ ios
</code>
</li>
<li>
<p>
For running it type: 
</p>
<code>
ionic cordova run android/ ios
</code>
</li>
</ul>
<p>
That's it. It will run the application in your native device (android/ ios) successfully.
</p>