// Your code here.
 const itemsContainer = document.querySelector('.items');
    let isDragging = false;
    let startPosition = 0;
    let scrollLeft = 0;

    itemsContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPosition = e.clientX;
      scrollLeft = itemsContainer.scrollLeft;

      itemsContainer.classList.add('active');
    });

    itemsContainer.addEventListener('mouseup', () => {
      isDragging = false;
      itemsContainer.classList.remove('active');
    });

    itemsContainer.addEventListener('mouseleave', () => {
      isDragging = false;
      itemsContainer.classList.remove('active');
    });

    itemsContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const delta = e.clientX - startPosition;
      itemsContainer.scrollLeft = scrollLeft - delta;
    });