<?php

while(have_posts()) : the_post(); pageBanner(); ?>
    
  <div class="container page-section">
    <div class="generic-content">
      <?php the_content(); ?>
    </div>
  </div>
    
<?php endwhile;