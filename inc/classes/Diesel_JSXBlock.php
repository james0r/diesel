<?php
/**
*  Class for blocks requiring JSX for block edit or save functions.
*/

class Diesel_JSXBlock extends Diesel_Block {
  function __construct($name, $renderCallback = null, $data = null) {
    parent::__construct($name, $renderCallback, $data);
  }
}
