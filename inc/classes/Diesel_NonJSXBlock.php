<?php
/**
 * Diesel_NonJSXBlock.
 *
 * @author	Unknown
 * @since	v0.0.1
 * @version	v1.0.0	Saturday, November 5th, 2022.
 * @see		Diesel_Block
 * @global
 */
class Diesel_NonJSXBlock extends Diesel_Block {
  function __construct($name, $renderCallback = null, $data = null) {
    parent::__construct($name, $renderCallback, $data);
    $this->script_path = "/diesel-blocks/{$this->name}/index.js";
  }
}