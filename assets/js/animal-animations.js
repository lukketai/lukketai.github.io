// Animal Animation Utility
function createAnimalAnimation(config) {
    const { imageId, imagePaths, interval = 600 } = config;
    let currentIndex = 0;
    const imageElement = document.getElementById(imageId);
    
    if (!imageElement) {
        console.warn(`Image element with id "${imageId}" not found`);
        return;
    }
    
    function cycleImages() {
        // Fade out
        imageElement.style.opacity = '0';
        
        setTimeout(() => {
            // Change image
            currentIndex = (currentIndex + 1) % imagePaths.length;
            imageElement.src = imagePaths[currentIndex];
            
            // Fade in
            imageElement.style.opacity = '1';
        }, 150); // Half of the transition duration
    }
    
    // Start the animation when the page loads
    document.addEventListener('DOMContentLoaded', function() {
        setInterval(cycleImages, interval);
    });
}

// Static configurations for each animal
const AnimalConfigs = {
    rhino: {
        imageId: 'rhinoImage',
        imagePaths: [
            'assets/images/rhino_svg/rhinoceros_01.svg',
            'assets/images/rhino_svg/rhinoceros_02.svg',
            'assets/images/rhino_svg/rhinoceros_03.svg',
            'assets/images/rhino_svg/rhinoceros_04.svg',
            'assets/images/rhino_svg/rhinoceros_05.svg',
            'assets/images/rhino_svg/rhinoceros_06.svg',
            'assets/images/rhino_svg/rhinoceros_07.svg',
            'assets/images/rhino_svg/rhinoceros_08.svg',
            'assets/images/rhino_svg/rhinoceros_09.svg',
            'assets/images/rhino_svg/rhinoceros_10.svg'
        ],
        interval: 6000
    },
    octopus: {
        imageId: 'octopusImage',
        imagePaths: [
            'assets/images/octopus_svg/octopus_01.svg',
            'assets/images/octopus_svg/octopus_02.svg',
            'assets/images/octopus_svg/octopus_03.svg',
            'assets/images/octopus_svg/octopus_04.svg',
            'assets/images/octopus_svg/octopus_05.svg',
            'assets/images/octopus_svg/octopus_06.svg',
            'assets/images/octopus_svg/octopus_07.svg',
            'assets/images/octopus_svg/octopus_08.svg',
            'assets/images/octopus_svg/octopus_09.svg',
            'assets/images/octopus_svg/octopus_10.svg'
        ],
        interval: 6000
    },
    elephant: {
        imageId: 'elephantImage',
        imagePaths: [
            'assets/images/elephant_svg/elephant_01.svg',
            'assets/images/elephant_svg/elephant_02.svg',
            'assets/images/elephant_svg/elephant_03.svg',
            'assets/images/elephant_svg/elephant_04.svg',
            'assets/images/elephant_svg/elephant_05.svg',
            'assets/images/elephant_svg/elephant_06.svg',
            'assets/images/elephant_svg/elephant_07.svg',
            'assets/images/elephant_svg/elephant_08.svg',
            'assets/images/elephant_svg/elephant_09.svg',
            'assets/images/elephant_svg/elephant_10.svg'
        ],
        interval: 6000
    }
};
