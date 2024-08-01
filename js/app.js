document.addEventListener('DOMContentLoaded', () => {
  const $accordianButtons = document.querySelectorAll('.accordian_button');

  $accordianButtons.forEach(($button) => {
    $button.addEventListener('click', () => {
      console.log('클릭');
      const $wrapper = $button.closest('.wrapper_project');

      $wrapper.classList.toggle('expanded');

      if ($wrapper.classList.contains('expanded')) {
        $wrapper.lastElementChild.style.display = 'block';
      } else {
        $wrapper.lastElementChild.style.display = 'none';
      }
    });
  });
});
