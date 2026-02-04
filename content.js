function addCollapseButtons() {
  const buttonContainers = document.querySelectorAll('.code-block-decoration .buttons');

  buttonContainers.forEach(container => {
    if (container.querySelector('.collapse-btn')) return;
    const btn = document.createElement('button');
    btn.innerHTML = 'Collapse';
    btn.className = 'collapse-btn';    
    const codeBlock = container.closest('.code-block');
    const codeContent = codeBlock.querySelector('.formatted-code-block-internal-container');
    btn.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (codeContent.style.display === 'none') {
        codeContent.style.display = 'block';
        btn.innerText = 'Collapse';
      } else {
        codeContent.style.display = 'none';
        btn.innerText = 'Expand';
      }
    };
    container.prepend(btn);
  });
}

const observer = new MutationObserver(() => addCollapseButtons());
observer.observe(document.body, { childList: true, subtree: true });

addCollapseButtons();