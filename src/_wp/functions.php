<?php
    
    // Activate menu support
    function register_my_menu() {
      register_nav_menu('header-menu',__( 'Header Menu' ));
    }
    add_action( 'init', 'register_my_menu' );


    // Register custom REST API menu
    function get_menu() {
      # Change 'menu' to your own navigation slug.
      return wp_get_nav_menu_items('header-menu');
    }
  
    add_action('rest_api_init', function(){
        register_rest_route( 'header', '/menu', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
      ));
    });

?>