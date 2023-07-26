<?php

if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/images/library-hero.jpg');
}
?>

<div class="tw-w-full tw-bg-black tw-pt-[80px] md:tw-pt-[130px] tw-px-0 tw-pb-[40px] md:tw-pb-[60px] page-banner">
  <div
    class="page-banner__bg-image"
    style="background-image: url('<?php echo $attributes['imgURL']; ?>')"
  >
  </div>
  <div
    class="tw-relative tw-z-[2] tw-container tw-text-center tw-text-white tw-flex tw-flex-col tw-items-center [&_a]:tw-mt-4"
  >
    <?php echo $content; ?>
  </div>
</div>