<header
  data-block-type="diesel-header"
  class="has-tailwind"
>
  <?php 
    $wrapper_classes[] = isset($attributes['bgColorSlug']) ? 'bg-' . $attributes['bgColorSlug'] : 'bg-brown';
    $wrapper_classes[] = 'is-layout-constrained';
    $wrapper_classes[] = 'px-6';
    $wrapper_classes[] = 'md:px-8';
  ?>

  <div class="<?php echo implode(' ', $wrapper_classes) ?>">
    <div class="flex items-center justify-between text-white min-h-[80px] alignwide relative">
      <?php 
        foreach($block->inner_blocks as $inner_block) {
          if ($inner_block->block_type->name == 'core/navigation') {
            echo $inner_block->render();
          }
        }
      ?>
      <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-bold tracking-widest text-<?php echo isset($attributes['logoTextSize']) ? $attributes['logoTextSize'] : '2xl' ?>">
        <?php echo $attributes['logoText'] ?? 'Not Defined'; ?>
      </div>
    </div>
  </div>

</header>