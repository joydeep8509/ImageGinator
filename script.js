const API_KEY = 'Bearer vk-g6B4Jqjs2mDmu374uYCLYKlNei4U2AHDS0a7gmCFDup4ZwZ';
const API_URL = 'https://api.vyro.ai/v2/image/generations';

const imageContainer = document.getElementById('imageContainer');
const imageResultElement = document.getElementById('imageResult');

// Function to generate the image
function generateImage() {
    const promptValue = document.getElementById('prompt').value;
    const styleValue = document.getElementById('dropsownStyles').value;
    const ratioValue = document.getElementById('dropsownRatio').value;

    //if prompt is empty
    if (!promptValue) {
        alert('Please enter a prompt.');
        return;
    }

    setLoadingState(true);

    //  Prepare form data for the API request
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer vk-g6B4Jqjs2mDmu374uYCLYKlNei4U2AHDS0a7gmCFDup4ZwZ" );


    const formData = new FormData();
    formData.append('prompt', promptValue);
    formData.append('style', styleValue);
    formData.append('aspect_ratio', ratioValue);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formData,
        redirect: 'follow'
    };

    fetch(API_URL, requestOptions)
   .then(response => response.blob())
   .then(blob => {
    // Create an object url for the blob
    const imageUrl = URL.createObjectURL(blob);
    // Set the image source to display
    imageResultElement.src = imageUrl;
   })
   .catch(error => {
    console.log('error', error);
    alert('Ant error occured while genrating the image.')

   })
   .finally(()=> {
    //Restore the loading state
    setLoadingState(false);
   });
}


function setLoadingState(isLoading) {
    if (isLoading) {
        imageResultElement.style.display = 'none';
        imageContainer.classList.add('loading');
    } else {
        imageResultElement.style.display = 'block';
        imageContainer.classList.remove('loading');
    }
}

function downloadImage() {
    const imageUrl = imageResultElement.src;
    
    if (!imageUrl) {
        alert('No image available for download.');
        return;
    }

    // Create temporary element to initiate download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'ai-generated-image.jpg';
    link.click();
}