import masks from "./modules/masks.js";

document.querySelectorAll('input').forEach($input => {
    const field = $input.dataset.js

    $input.addEventListener('input', e => {
      e.target.value = new masks[field](e.target.value)
    }, false)
    
  })