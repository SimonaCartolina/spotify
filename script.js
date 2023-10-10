const volumeSlider = document.getElementById('volumeSlider');
const volumeHandle = document.getElementById('volumeHandle');
const audio = document.getElementById('audio');

let isDragging = false;

volumeHandle.addEventListener('mousedown', (e) => {
    isDragging = true;
    volumeHandle.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const volumeBar = volumeSlider.getBoundingClientRect();
        const mouseX = e.clientX - volumeBar.left;
        const percent = (mouseX / volumeBar.width) * 100;

        if (percent >= 0 && percent <= 100) {
            volumeHandle.style.left = percent + '%';
            audio.volume = percent / 100;
        }
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    volumeHandle.style.cursor = 'grab';
});

//

const volumeBar2 = document.getElementById('volumeBar2');
const volumeHandle2 = document.getElementById('volumeHandle2');
const audio2 = document.getElementById('audio2');

function createVolumeBar(volumeBar, volumeHandle, audio) {
    let isDragging = false;

    volumeHandle.addEventListener('mousedown', (e) => {
        isDragging = true;
        volumeHandle.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const volumeBarRect = volumeBar.getBoundingClientRect();
            const mouseX = e.clientX - volumeBarRect.left;
            const percent = (mouseX / volumeBarRect.width) * 100;

            if (percent >= 0 && percent <= 100) {
                volumeHandle.style.left = percent + '%';
                audio.volume = percent / 100;
            }
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        volumeHandle.style.cursor = 'grab';
    });
}

createVolumeBar(volumeBar2, volumeHandle2, audio2);
