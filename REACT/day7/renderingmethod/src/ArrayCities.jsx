const ArrayCities = () => {

    const cities = [
        "Chennai",
        "Bangalore",
        "Hyderabad",
        "Mumbai",
        "Delhi",
        "Pune"
    ];

    return (
        <div>
            <h2>Cities</h2>

            {cities.map((city, index) => (
                <p key={index}>{city}</p>
            ))}
        </div>
    );
};

export default ArrayCities;