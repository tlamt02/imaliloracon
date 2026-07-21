// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function handleDragStart(e) {
    this.style.opacity = '0.4';
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
  }
  
  let items = document.querySelectorAll('.container .box');
  items.forEach(function (item) {
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
  });

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('spin-btn');
    const spinner = document.getElementById('spinner');
    if (btn && spinner) {
        btn.addEventListener('click', function() {
            spinner.style.display = 'inline-block';
            // Optional: disable button while spinning
            btn.disabled = true;
            // Hide spinner after 2 seconds and re-enable button
            setTimeout(function() {
                spinner.style.display = 'none';
                btn.disabled = false;
            }, 2000);
        });
    }
});

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('spin-btn');
    const spinner = document.getElementById('spinner');
    const clickInfo = document.getElementById('click-info');
    let count = 0;

    if (btn && spinner && clickInfo) {
        btn.addEventListener('click', function() {
            spinner.style.display = 'inline-block';
            btn.disabled = true;
            count++;
            const now = new Date();
            clickInfo.innerHTML = `Clicked: ${count} times<br>Last clicked: ${now.toLocaleTimeString()}`;
            setTimeout(function() {
                spinner.style.display = 'none';
                btn.disabled = false;
            }, 2000);
        });
    }
});
// ...existing code...

// ...existing code...
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('spin-btn');
    const spinner = document.getElementById('spinner');
    const clickInfo = document.getElementById('click-info');
    let count = 0;

    if (btn && spinner && clickInfo) {
        btn.addEventListener('click', function() {
            spinner.style.display = 'inline-block';
            btn.disabled = true;
            count++;
            const now = new Date();
            clickInfo.innerHTML = `Clicked: ${count} times<br>Last clicked: ${now.toLocaleTimeString()}`;
            setTimeout(function() {
                spinner.style.display = 'none';
                btn.disabled = false;
            }, 2000);
        });
    }

    // Flower button logic
    const flowerBtn = document.getElementById('flower-btn');
    const flowerCount = document.getElementById('flower-count');
    const resetFlowerBtn = document.getElementById('reset-flower-btn');
    const popupThresholdInput = document.getElementById('popup-threshold');

    // Load saved value or start at 50
    let flowerValue = Number(localStorage.getItem('flowerValue')) || 50;
    let popupThreshold = Number(localStorage.getItem('popupThreshold')) || 100;

    if (flowerCount) {
        flowerCount.textContent = flowerValue;
    }
    if (popupThresholdInput) {
        popupThresholdInput.value = popupThreshold;
    }

    if (flowerBtn && flowerCount) {
        flowerBtn.addEventListener('click', function() {
            flowerValue++;
            flowerCount.textContent = flowerValue;
            localStorage.setItem('flowerValue', flowerValue);
            if (flowerValue === popupThreshold) {
                alert('Congratulations! You reached ' + popupThreshold + '!');
            }
        });
    }

    if (resetFlowerBtn && flowerCount) {
        resetFlowerBtn.addEventListener('click', function() {
            flowerValue = 50;
            flowerCount.textContent = flowerValue;
            localStorage.setItem('flowerValue', flowerValue);
        });
    }

    if (popupThresholdInput) {
        popupThresholdInput.addEventListener('change', function() {
            let val = Number(popupThresholdInput.value);
            if (val < 1) val = 1;
            popupThreshold = val;
            localStorage.setItem('popupThreshold', popupThreshold);
            popupThresholdInput.value = popupThreshold;
        });
    }

});



// ...existing code...

const flowerBtn = document.getElementById('flower-btn');
const flowerCount = document.getElementById('flower-count');
const resetFlowerBtn = document.getElementById('reset-flower-btn');
const popupThresholdInput = document.getElementById('popup-threshold');

// Set default threshold to 150 if not set
let popupThreshold = Number(localStorage.getItem('popupThreshold')) || 150;
let flowerValue = Number(localStorage.getItem('flowerValue')) || 50;

if (flowerCount) {
    flowerCount.textContent = flowerValue;
}
if (popupThresholdInput) {
    popupThresholdInput.value = popupThreshold;
}

if (flowerBtn && flowerCount) {
    flowerBtn.addEventListener('click', function() {
        flowerValue++;
        flowerCount.textContent = flowerValue;
        localStorage.setItem('flowerValue', flowerValue);
        if (flowerValue === popupThreshold) {
            alert('congratulations, 150');
        }
    });
}

if (resetFlowerBtn && flowerCount) {
    resetFlowerBtn.addEventListener('click', function() {
        flowerValue = 50;
        flowerCount.textContent = flowerValue;
        localStorage.setItem('flowerValue', flowerValue);
    });
}

if (popupThresholdInput) {
    popupThresholdInput.addEventListener('change', function() {
        let val = Number(popupThresholdInput.value);
        if (val < 1) val = 1;
        popupThreshold = val;
        localStorage.setItem('popupThreshold', popupThreshold);
        popupThresholdInput.value = popupThreshold;
    });
}

// ...existing