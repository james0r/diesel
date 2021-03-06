<header class="site-header">
  <div class="container">
    <h1 class="school-logo-text float-left"><a
        href="<?php echo site_url() ?>"><strong>Diesel</strong></a></h1>
    <a href="<?php echo esc_url(site_url('/search')); ?>"
      class="js-search-trigger site-header__search-trigger"><i class="fa fa-search" aria-hidden="true"></i></a>
    <i class="site-header__menu-trigger fa fa-bars" aria-hidden="true"></i>
    <div class="site-header__menu group">
      
      <nav class="main-navigation">
        <ul>
          <li <?php if (is_page('about-us') or wp_get_post_parent_id(0) == 16) {
  echo 'class="current-menu-item"';
} ?>>
            <a
              href="<?php echo site_url('/about-us') ?>">About
              Us
            </a>
          </li>
          <li <?php if (get_post_type() == 'program') {
  echo 'class="current-menu-item"';
} ?>><a
              href="<?php echo get_post_type_archive_link('program') ?>">Programs</a>
          </li>
          <li <?php if (get_post_type() == 'event' or is_page('past-events')) {
  echo 'class="current-menu-item"';
}  ?>><a
              href="<?php echo get_post_type_archive_link('event'); ?>">Events</a>
          </li>
          <li <?php if (get_post_type() == 'campus') {
  echo 'class="current-menu-item"';
} ?>><a
              href="<?php echo get_post_type_archive_link('campus'); ?>">Campuses</a>
          </li>
          <li <?php if (get_post_type() == 'post') {
  echo 'class="current-menu-item"';
} ?>><a
              href="<?php echo site_url('/blog'); ?>">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>