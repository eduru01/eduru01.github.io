/*==============================================================================
 * DARK MODE TOGGLE FUNCTIONALITY
 *
 * This script enables dark mode switching for your portfolio website.
 * It uses cookies to remember the user's preference across page visits.
 *
 * DEPENDENCIES:
 * - jQuery (required for DOM manipulation)
 * - js-cookie.min.js (required for saving preferences)
 *
 * HOW IT WORKS:
 * 1. When the page loads, check if user previously enabled dark mode
 * 2. If yes, apply the 'dark-mode' class to the body element
 * 3. When user toggles the switch, save their preference in a cookie
 * 4. Cookie lasts for 7 days, so preference persists across visits
 *
 * CUSTOMIZATION:
 * - To change how long the preference is saved, modify the 'expires' value
 * - Dark mode styles are controlled in the CSS file
 *
 * BEGINNER TIP:
 * You don't need to modify this file unless you want to change how
 * dark mode works. It should work perfectly as-is!
 *
 =============================================================================*/

// Wait for the page to fully load before running this code
// This ensures all HTML elements are available to manipulate
$(document).ready(function() {

	/*==========================================================================
	 * FUNCTION: setThemeFromCookie
	 *
	 * PURPOSE: Check if the user has dark mode enabled and apply it
	 *
	 * This function runs when the page loads. It checks if a cookie exists
	 * that indicates the user previously enabled dark mode. If the cookie
	 * exists, it applies dark mode to the page.
	 *
	 =========================================================================*/
	function setThemeFromCookie() {

		// Check if the 'mode' cookie exists
		// typeof Cookies.get('mode') returns "undefined" if cookie doesn't exist
		if (typeof Cookies.get('mode') !== "undefined" ) {

			// Cookie exists! User previously enabled dark mode
			// Add the 'dark-mode' class to the body element
			// This class triggers all the dark mode CSS styles
			$('body').addClass("dark-mode");

			// Also check the dark mode toggle checkbox
			// This ensures the switch shows as "ON"
			$('#darkmode').attr('checked', true);

			// Log a message to the browser console (for debugging)
			// You can see this in your browser's Developer Tools
			console.log('Dark mode: ON (loaded from cookie)');

		} else {

			// No cookie found - user hasn't enabled dark mode
			// Make sure dark mode is off and toggle is unchecked
			$('body').removeClass("dark-mode");
			$('#darkmode').attr('checked', false);

			// Log a message to the console
			console.log('Light mode: ON (default)' );
		}
	}

	/*==========================================================================
	 * INITIALIZE THEME
	 *
	 * Call the function above to set the theme based on saved preference
	 * This runs immediately when the page loads
	 *
	 =========================================================================*/
	setThemeFromCookie();

	/*==========================================================================
	 * EVENT LISTENER: Dark Mode Toggle Switch
	 *
	 * This code runs whenever the user clicks the dark mode toggle switch
	 * It switches between light and dark mode and saves the preference
	 *
	 =========================================================================*/
	$('#darkmode').on('change', function(e){

		// Check if the toggle switch is now checked (turned ON)
		if ($(this).is(':checked')) {

			/*======================================================================
			 * DARK MODE ACTIVATED
			 *
			 * User just turned ON dark mode
			 * 1. Add the 'dark-mode' class to body (triggers dark styles)
			 * 2. Save this preference in a cookie for 7 days
			 *
			 =====================================================================*/

			// Add dark-mode class to body element
			// This triggers all the dark mode styles in the CSS
			$('body').addClass('dark-mode');

			// Save the preference in a cookie
			// Cookie will last for 7 days, so user doesn't have to toggle again
			// CUSTOMIZATION: Change the number to modify how long preference is saved
			Cookies.set('mode', 'dark-mode', { expires: 7 });

			console.log('Dark mode: ON (saved to cookie for 7 days)');

		} else {

			/*======================================================================
			 * DARK MODE DEACTIVATED
			 *
			 * User just turned OFF dark mode (back to light mode)
			 * 1. Remove the 'dark-mode' class from body
			 * 2. Delete the cookie so light mode is default next visit
			 *
			 =====================================================================*/

			// Remove dark-mode class from body element
			// This switches back to the default light mode styles
			$('body').removeClass('dark-mode');

			// Remove the cookie
			// This ensures light mode is used on next visit
			Cookies.remove('mode');

			console.log('Light mode: ON (cookie removed)');
		}

	});

	/*==========================================================================
	 * END OF DARK MODE SCRIPT
	 *
	 * TROUBLESHOOTING TIPS:
	 *
	 * If dark mode isn't working, check these common issues:
	 *
	 * 1. Make sure jQuery is loaded before this script
	 *    - Check the HTML file has jquery-3.4.1.min.js before dark-mode.js
	 *
	 * 2. Make sure js-cookie.min.js is loaded
	 *    - This plugin is required for saving preferences
	 *
	 * 3. Check the browser console for error messages
	 *    - Right-click page → Inspect → Console tab
	 *
	 * 4. Make sure the toggle checkbox has id="darkmode"
	 *    - The script looks for an element with this specific ID
	 *
	 * 5. Verify dark mode CSS styles exist
	 *    - Look for .dark-mode class styles in the CSS file
	 *
	 * ADDITIONAL RESOURCES:
	 * - jQuery documentation: https://api.jquery.com/
	 * - js-cookie documentation: https://github.com/js-cookie/js-cookie
	 *
	 =========================================================================*/

});
