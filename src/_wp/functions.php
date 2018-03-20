<?php
    
    add_action('init', 'custom_rewrite_rule');
    
    // Add rewrite rule to make use of index.html file instead of default php file
    function custom_rewrite_rule() {
      $regex = '/';
      $location = 'index.php';
      $priority = 'top';
      add_rewrite_rule( $regex, $location, $priority );
    }

?>