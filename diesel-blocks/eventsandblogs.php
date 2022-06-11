<?php

$parent_post_id = get_the_ID();

// WP_Query arguments
$args = array (
	'post_type'              => array( 'post' ),
	'posts_per_page'         => '8',
);

// The Query
$query = new WP_Query( $args );

// The Loop
if ( $query->have_posts() ) {
	while ( $query->have_posts() ) {
		$query->the_post();

    if ($parent_post_id !== get_the_ID()) {
      the_title();
      the_content();
    }
	}
} else {
	// no posts found
}

// Restore original Post Data
wp_reset_postdata();