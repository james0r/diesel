<?php 
  $headingText = $attributes['headingText'] ?? 'No text entered for this field.';
  $panelText = $attributes['panelText'] ?? 'No text entered for this field.';
?>

<div id="<?php echo $attributes['id']; ?>" x-data="{ expanded: false }">
  <h2 class="accordion-item-heading" @click="expanded = !expanded">
    <?php echo $headingText; ?>
  </h2>
  <div class="accordion-item-panel" x-show="expanded">
    <?php echo $panelText; ?>
  </div>
</div>

<?php 
  error_log( print_r($attributes, TRUE) );
?>
