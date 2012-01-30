/* Form Loading */

function loadable() {
  $('form').submit(function() {
    var submitButton = $(this).find('.loadable').hide();

    if(submitButton.length == 0) {
      submitButton = $(this).find('.loadable_dark').hide();
      $('<img src="/images/spinner_big_dark_blue.gif" class="right spinner">').insertAfter(submitButton);
    } else {
      $('<img src="/images/spinner_big_light_trans.gif" class="right spinner">').insertAfter(submitButton);
    }

    // Protect against users hitting the enter key repeatedly
    $(submitButton, this).attr('disabled', 'disabled');
  });

  // NEW Flash bar magic
  if ($('#flash_bar').data('hasflash') == '1') {
      $('#flash_bar').show();
  }
}

$(document).ready(loadable());

/* This is used by the edit comment partial */
function submitForm(thisForm) {
  var submitButton = $(thisForm).find('.loadable').hide();

  $('<img src="/images/spinner_big_light_trans.gif" class="spinner">').insertAfter(submitButton);

  // Protect against users hitting the enter key repeatedly
  $(submitButton, this).attr('disabled', 'disabled');
}

/* Button hovers */

function rollover(hoverable) {
  var currentImg = $(hoverable).attr('src');
  $(hoverable).attr('src', $(hoverable).attr('data-hover'));
  $(hoverable).attr('data-hover', currentImg);
}

function rollout(hoverable) {
  var currentImg = $(hoverable).attr('src');
  $(hoverable).attr('src', $(hoverable).attr('data-hover'));
  $(hoverable).attr('data-hover', currentImg);
}

/* Login */

function showLoginPanel() {
	$('#login_button_unpressed').hide();
	$('#login_button_pressed').show();
	$('#login_panel').show();
    $('#email').focus();
}

function hideLoginPanel() {
    $('#login_button_unpressed').show();
    $('#login_button_pressed').hide();
    $('#login_panel').hide();
}

/* Landing Page Tabs */

function selectTab(tab) {
	switch(tab) {
	case 1:
        $('#tab0_content').hide();
	    $('#tab1_content').show();
	    $('#tab2_content').hide();
	    $('#tab3_content').hide();
	
	    $('#tab1').hide();
	    $('#tab1_selected').show();
	    $('#tab2').show();
	    $('#tab2_selected').hide();
	    $('#tab3').show();
	    $('#tab3_selected').hide();
		break;
	case 2:
        $('#tab0_content').hide();
	    $('#tab1_content').hide();
	    $('#tab2_content').show();
	    $('#tab3_content').hide();
	
	    $('#tab1').show();
	    $('#tab1_selected').hide();
	    $('#tab2').hide();
	    $('#tab2_selected').show();
	    $('#tab3').show();
	    $('#tab3_selected').hide();
		break;
	default:
        $('#tab0_content').hide();
	    $('#tab1_content').hide();
	    $('#tab2_content').hide();
	    $('#tab3_content').show();
	
	    $('#tab1').show();
	    $('#tab1_selected').hide();
	    $('#tab2').show();
	    $('#tab2_selected').hide();
	    $('#tab3').hide();
	    $('#tab3_selected').show();
	}
}

/* Posts */

function addAttachment(attachment) {
	// Hide attachment options
	$('#attachment_choices').hide();
	
	// Hide all other attachment types
	/*$$('.attachment').each(function(c) {
    if(c.hasClassName('on')) {
			c.removeClassName('on');
		}
	});*/
	
	$('#' + attachment).show();
}

function removeAttachment(attachment) {
	// Clear value of hidden attachment
	$('#post_' + attachment).val('');
	
	// Hide attachment
	$('#' + attachment + 'Attachment').hide();
	
	// Hide attachment options
	$('#attachment_choices').show();
}

/* Settings */

function manageTwitter(url) {
	window.open (url, 'newwindow', config='height=400, width=780, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no')
}

/* Jobs */

tabsLoaded = 0;
tabsToLoad = 0;

function updateResultsCount(num_results) {
	rcountId = $('resultsCount');
	rcount = parseInt(rcountId.innerHTML);
	rcountId.innerHTML = rcount + num_results;
	
	tabsLoaded = tabsLoaded + 1;
	
	if(tabsLoaded == tabsToLoad) {
		$('resultsLoading').hide();
	}
}

function setCompanyForJob(company_id) {
	// Loop through all companies and remove selection class
	$$('.company').each(function(c) {
    if(c.hasClassName('selected')) {
			c.removeClassName('selected');
			c.select('img.useCompany')[0].src = '/images/buttons/use_company.png';
		}
	});
	
	// Set selection class on selected company
	$('companyId' + company_id).addClassName('selected');
	$('useCompanyId' + company_id).src = '/images/buttons/use_company_disabled.png';
	
	// Set hidden field value to new company id
	$('company_id').setAttribute('value', company_id);
}

function clearDefaultValue(element_id){
	k = $(element_id);

	if (k.hasClassName('initial')) {
		k.value = ''; 
		k.removeClassName('initial');
		k.addClassName('standard');
	}
}

/*
var map = null;

function render_map(lat, lng) {
  var latlng = new google.maps.LatLng(lat, lng);
  var myOptions = {
    zoom: 11,
    center: latlng,
		navigationControl: true,
		mapTypeControl: false,
    scaleControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map($("map_canvas"), myOptions);
}

// Add marker for home to the map
function setHomeMarker(map, lat, lng) {
	var latLng = new google.maps.LatLng(lat, lng);
	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		title: 'Home',
		zIndex: 0
	});
}

// Add markers for jobs to the map
function setJobMarkers(map, locations) {
	for (var i = 0; i < locations.length; i++) {
		var job = locations[i];
		var latLng = new google.maps.LatLng(job[1], job[2]);

		var marker = new google.maps.Marker({
			position: latLng,
			map: map,
			title: job[0],
			zIndex: i
		});
		
		var contentString = '<h3 id="firstHeading" class="firstHeading">' + job[0] + '</h3>';

		var infowindow = new google.maps.InfoWindow({
		    content: contentString,
				size: new google.maps.Size(50,50)
		});
		
		google.maps.event.addListener(marker, 'click', function() {
		  infowindow.open(map, marker);
		});
	}
}
*/