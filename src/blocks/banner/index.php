<?php

if (!isset($attributes['imgURL'])) {
  $attributes['imgURL'] = get_theme_file_uri('/images/library-hero.jpg');
}
?>

<section class="has-tailwind" data-block-id="<?php echo $attributes['instanceId'] ?>">
  <div class="relative w-full bg-black pt-[80px] md:pt-[130px] px-0 pb-[40px] md:pb-[60px]">
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      style="background-image: url('<?php echo $attributes['imgURL']; ?>')"
    >
    </div>
    <div
      class="relative z-[2] container text-center text-white flex flex-col items-center [&_a]:mt-4"
    >
      <?php echo $content; ?>
    </div>
  </div>
</section>
