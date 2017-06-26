# JSplaceholder
A simple script to activate the `placeholder` attribute in older browsers.<br />
Usage:<br />
  -add the placeholder normally as you do and the script will do the rest<br />
Example:<br />
  `<input type="text" placeholder="First name." />`<br /><br />




-Place the script at the end of your html file or make sure that the document has loaded completely.  

Features :<br />
  -You can style the placeholder with css using the class "ph".<br />
  -Auto padding , Width & height inheritance.<br />
  -Works on IE5.<br />
  -No need for server-side verification for such issue, as the text of placeholder is actually a "p" element.<br />
  -It is written in plain JS.<br />
  
Known bugs:<br />
  -auto padding inheritance doesn't work in IE9+
  -Solution: ise the css class to apply the same padding.
  
getStyle function was taken from : http://robertnyman.com/2006/04/24/get-the-rendered-style-of-an-element<br />
