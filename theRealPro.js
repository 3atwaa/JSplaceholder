	function getStyle(oElm, strCssRule){
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle){
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle){
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
			return p1.toUpperCase();
		});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}

	//getStyle() function's credits to Robert Nyman [taken from his blog or website]
	//robertnyman.com

	var inArray = document.getElementsByTagName('input'), pos,i,text=[];
	//Variable "text" 's declaration at top for execution speed.
	for (i = 0; i < inArray.length; i++) {
		//creating a paragraph having the same value of 'ph' attribute.
		if(inArray[i].getAttribute('ph')) {

			text[i] = document.createElement('p');
			text[i].className = 'ph';
			text[i].innerHTML = inArray[i].getAttribute('ph');
			document.body.appendChild(text[i]);

			//Accessing the position of the input elements.
			pos = inArray[i].getBoundingClientRect();

			//putting things in the right position.
			text[i].style.position = 'absolute';
			text[i].style.top = pos.top + 'px';
			text[i].style.right = pos.right + 'px';
			text[i].style.bottom = pos.bottom + 'px';
			text[i].style.left = pos.left + 'px';

			//Clearing the margin & padding for precise location.
			text[i].style.margin = 0;

			//adding some inherited styles.
			text[i].style.width = getStyle(inArray[i], 'width');
			text[i].style.height = getStyle(inArray[i], 'height');
			text[i].style.padding = getStyle( inArray[i], 'padding' );

			//zIndex for the 'p' element to be overlayed by the input element.
			text[i].style.zIndex = -1;

			//Storing the BG color for a later use.
			bgColor = inArray[i].style.backgroundColor;
				
			//making the input element transparent.
			inArray[i].style.backgroundColor = 'transparent';

			//picking a good color for the 'p' element.
			text[i].style.color = '#F4CEB6';
			//adding the fucking EVENT HANDLER!!!!!!		
			//"false"==>"default" we need it bubbling baby......(added it just to make sure...)
			//added a self invoking fucntion to fix the closure issue....
			(function(x){
				if(window.addEventListener) {
					inArray[x].addEventListener('keyup', function(){
						if(this.value !== '') this.style.backgroundColor = bgColor;
						else this.style.backgroundColor = 'transparent';
					});
					inArray[x].addEventListener('keydown', function(){
						if(this.value !== '') this.style.backgroundColor = bgColor;
						else this.style.backgroundColor = 'transparent';
					});
				}else{
						inArray[x].attachEvent('onkeyup', function(){
						if(this.value !== '') this.style.backgroundColor = bgColor;
						else this.style.backgroundColor = 'transparent';
					});
					inArray[x].attachEvent('onkeydown', function(){
						if(this.value !== '') this.style.backgroundColor = bgColor;
						else this.style.backgroundColor = 'transparent';
					});
				}
		})(i);			
	}
}
