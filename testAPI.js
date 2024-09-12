const SECRET_KEY = '2b931ae864msh9bdbc09c1235660p181e19jsnee91421a6eab'; // Job 40:2
const url = 'https://car-data.p.rapidapi.com/cars?limit=10&page=0';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': SECRET_KEY,
		'x-rapidapi-host': 'car-data.p.rapidapi.com'
	}
};

async function trowResult(url, options) {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        //  var carChose = JSON.stringify(JSON.parse(result)[3]); // sample purposes
        var carArray = JSON.parse(result);
        console.log(carArray);
        let imageFolder = "./img/cars/";
        const imageFiles = [carArray[3].make+"_"+carArray[3].year+".jpg", carArray[5].make+"_"+carArray[5].year+".jpg", carArray[8].model+"_"+carArray[8].year+"_suv"+".jpg"];
        imageFiles.forEach((car, idx) => {
            document.querySelector(".image-list").innerHTML = "<img class='image-item' src="+imageFolder+car.toLowerCase()+" alt='img-{idx}'/>";
        });
    } catch (error) {
        console.error(error);
    }
}

trowResult(url, options);
