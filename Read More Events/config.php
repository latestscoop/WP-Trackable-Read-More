<?php 
    /*
    Plugin Name: Read More Events
    Plugin URI: 
    Description: Track 'Read More' with GA Events
    Author: Sami Cooper
    Version: 0.1
    Author URI: 
    */
?>
<?php
function RME_scripts(){
	//wp_enqueue_script('RME-scripts', get_template_directory_uri() . '/RME.js', array('jquery'), '', true );
	wp_enqueue_script('RME-scripts', plugins_url( 'RME.js?date=' . date('YMDHis'), __FILE__ ), array('jquery'), '', true );
}
add_action('wp_enqueue_scripts', 'RME_scripts');
?>