
	async function get_location() {
    let response = await fetch("https://get.geojs.io/v1/ip/country.json");
    let data = await response.json()
    return data;
}
    
get_location().then(data => {
    var country = data.country;
    if (country == 'US' || country == 'CA' || country == "BD")
    {
        console.log("You can shop here");
    } else {
       window.location.href = "https://myomaster.com/"
    }
});
