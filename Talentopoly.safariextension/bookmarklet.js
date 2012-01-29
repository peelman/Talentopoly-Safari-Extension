function showTSharer(event) {
	var isTopFrame = window.top === window;
	var isValidEvent = event.name === "showTSharer";
		
	if (isTopFrame && isValidEvent) {
		var d = document,
		    b = d.body,
		    e = d.documentElement,
		    j = 'tlnt',
		    m = 590,
		    z = 'https://talentopoly.com';

		var g = d.getElementById(j);

		function w() {
		  var x = 0;

		  if (self.innerHeight) {
		    x = self.innerWidth;
		  } else if (e && e.clientHeight) {
		    x = e.clientWidth;
		  } else if (b) {
		    x = b.clientWidth;
		  }

		  return x;
		}

		function r(m) {
		  if (m.origin == z) {
		    if (m.data == 'close_tlnt') {
		      var t = d.getElementById(j);
		      if(t) t.parentNode.removeChild(t);
		    } else if(m.data == 'show_tlnt') {
		      i.style.visibility = 'visible'; // Show once content is loaded to prevent "flashing"
		    }
		  }
		}
		try {
			var w = w();

			if(!g) {
			  var i = d.createElement('iframe');

			  i.src = z + '/bookmarklet?u=' + encodeURIComponent(window.location) + '&t=' + encodeURIComponent(d.title);
			  i.style.zIndex = 1000000;
			  i.style.position = 'fixed';
			  i.style.top = '40px';
			  i.style.left = (w - m) / 2 + 'px';
			  i.style.width = m + 'px';
			  i.style.height = '1000px';
			  i.frameborder = "0";
			  i.style.border = "none";
			  i.id = j;
			  i.allowtransparency = true;
			  i.style.overflow = 'hidden';
			  i.style.visibility = 'hidden';

			  b.appendChild(i);
			  window.addEventListener('message', r, false);
			} else {
			  alert('The dialog box is already open.');
			}

		} catch(e) {
		    alert("The page is still loading.")
		};
	}
};

safari.self.addEventListener("message", showTSharer, false);