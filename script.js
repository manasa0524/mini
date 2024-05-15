var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var dobError = document.getElementById('dob-error');
var emailError = document.getElementById('email-error');
var genderError = document.getElementById('gender-error');
var mobileError = document.getElementById('mobile-error');
var countryError = document.getElementById('country-error');
var stateError = document.getElementById('state-error');
var addressError = document.getElementById('address-error');
var pinCodeError = document.getElementById('pin-error');
var cityError = document.getElementById('city-error');
var districtError = document.getElementById('district-error');
var eventpreferencesError = document.getElementById('eventpreferences-error');
var tshirtError = document.getElementById('tshirt-error');
var dietaryrestrictionsError = document.getElementById('dietaryrestrictions-error');
var submitError = document.getElementById('submit-error');

var addressObject = {
    "INDIA": {
        "Assam": ["Bongaigaon", "Jorhat", "Kokrajhar", "Lakhimpur", "Tinsukia", "Kamrup Metropolitan"],
        "Goa": ["North Goa", "South Goa"],
        "Himachal Pradesh": ["Kangra", "Kullu", "Mandi", "Shimla", "Lahaul and Spiti", "Kinnaur"],
        "Kerela": ["Kollam", "Malappuram", "Thiruvananthapuram", "Kannur", "Palakkad"],
        "Tripura": ["Dhalai", "North Tripura", "South Tripura", "West Tripura"],
        "Sikkim": ["Gangtok", "Mangan", "Namchi", "Geyzing", "Pakyong", "Soreng"],
        "West Bengal": ["Malda", "Alipurduar", "Howrah", "Kolkata", "Bankura", "Nadia"],
        "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "South Delhi", "West Delhi"]
    },
    "USA": {
        "Arizona": ["Gila", "Yuma", "Apache", "Mohave", "Santa Cruz", "Greenlee"],
        "California": ["San Francisco", "Los Angeles", "Sacramento", "San Diego", "Riverside", "San Jose"],
        "Georgia": ["Atlanta", "Augusta", "Columbus", "Savannah"],
        "Michigan": ["Watersmeet", "Holland", "Flint", "Holly", "Dearborn"],
        "New York": ["Shirley", "Brooklyn", "Manhattan", "Bronx", "Yonkers"],
        "Washington": ["Pierce", "Yakima", "Thurston", "Snohomish"],
        "New Mexico": ["Alamogordo", "Santa Fe", "Albuquerque"]
    },
    "BANGLADESH": {
        "Barisal": ["Barisal", "Barguna", "Bhola", "Pirojpur", "Jhalokati", "Patuakhali"],
        "Khulna": ["Bagerhat", "Jashore", "Khulna", "Narail", "Satkhira", "Meherpur"],
        "Rajshahi": ["Natore", "Sirajganj", "Pabna", "Bogura", "Naogaon", "Joypurhat"],
        "Rangpur": ["Dinajpur", "Kurigram", "Rangpur", "Thakurgaon", "Panchagarh", "Gaibandha"],
        "Sylhet": ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"],
        "Dhaka": ["Gazipur", "Tangail", "Rajbari", "Gopalganj", "Faridpur", "Narayanganj"],
        "Chittagong": ["Rangamati", "Cox's Bazar", "Chattogram", "Lakshmipur", "Chandpur", "Brahmanbaria"]
    }
}

window.onload = function () {
    var countrySel = document.getElementById("country-name");
    var stateSel = document.getElementById("state-name");
    var districtSel = document.getElementById("district-name");

    for (var x in addressObject) {
        countrySel.options[countrySel.options.length] = new Option(x, x);
    }

    countrySel.onchange = function () {
        //Empty districts and States dropdown
        districtSel.length = 1;
        stateSel.length = 1;

        //Display correct values
        for (var y in addressObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(y, y);
        }
    }

    stateSel.onchange = function () {
        //Empty Districts dropdown
        districtSel.length = 1;

        //display correct values
        var z = addressObject[countrySel.value][this.value];
        console.log(z);
        for (var i = 0; i < z.length; i++) {
            districtSel.options[districtSel.options.length] = new Option(z[i], z[i]);
        }
    }

}

//Function to validate First name

function validateFName() {
    var fname = document.getElementById('fname').value;

    if (fname.length == 0) {
        fnameError.innerHTML = ' **First Name is required';
        return false;
    }
    if (!fname.match(/^[A-Za-z]*$/)) {
        fnameError.innerHTML = ' **Numeric is not allowed';
        return false;
    }
    if (fname.length < 3) {
        fnameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if (fname.length > 20) {
        fnameError.innerHTML = ' **First name should be less than 20 char';
        return false;
    }
    fnameError.innerHTML = '&#x2705';
    return true;
}

//Function to validate Last name
function validateLName() {
    var lname = document.getElementById('lname').value;

    if (lname.length == 0) {
        lnameError.innerHTML = ' **Last Name is required';
        return false;
    }
    if (!lname.match(/^[A-Za-z]*$/)) {
        lnameError.innerHTML = ' **Numeric is not allowed';
        return false;
    }
    if (lname.length < 3) {
        lnameError.innerHTML = ' **Minimum 3 char required';
        return false;
    }
    if (lname.length > 20) {
        lnameError.innerHTML = ' **Last name should be less than 20 char';
        return false;
    }
    lnameError.innerHTML = '&#x2705';
    return true;
}

//Function to validate Date of Birth
function validateDOB() {
    var dobString = document.getElementById('dob').value;
    var myDate = new Date();
    var parts = dobString.split("-");
    console.log(dobString);
    console.log(parts);

    if (dobString == "") {
        dobError.innerHTML = ' **Date of Birth required';
        return false;
    }
    if (Date.parse(dobString) > Date.parse(myDate.toDateString())) {
        dobError.innerHTML = " **You can't select future date as DOB";
        return false;
    }
    if (myDate.getFullYear() - parts[0] > 24) {
        dobError.innerHTML = ' **Date of Birth should not be greater than 24';
        return false;
    }
    dobError.innerHTML = '&#x2705';
    return true;
}

//Function to validate Email
function validateEmail() {
    var emailId = document.getElementById('email-id').value;

    if (emailId.length == 0) {
        emailError.innerHTML = ' **Email is required';
        return false;
    }
    if (!emailId.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        emailError.innerHTML = ' **Invalid Email';
        return false;
    }
    emailError.innerHTML = '&#x2705';
    return true;
}

//Function to validate Phone Number
function validatePhone() {
    var phoneNum = document.getElementById('phone-no').value;

    if (phoneNum.length == 0) {
        mobileError.innerHTML = ' **Phone number is required';
        return false;
    }
    if (phoneNum.length !== 10) {
        mobileError.innerHTML = ' **Phone Number should be of 10 digits';
        return false;
    }
    if (!phoneNum.match(/^[0-9]{10}$/)) {
        mobileError.innerHTML = ' **Only digits please';
        return false;
    }
    mobileError.innerHTML = '&#x2705';
    return true;
}

//Function to validate Gender
function validateGender() {
    var genderSelected = document.querySelector('input[name = "gender"]:checked');

    if (genderSelected != null) {
        genderError.innerHTML = '&#x2705';
        return true;
    }
    genderError.innerHTML = ' **Please enter your gender';
    return false;
}

//Function to validate Country Name
function validateCountry() {
    var countryName = document.getElementById('country-name').value;

    if (countryName == "") {
        countryError.innerHTML = ' **Country name required';
        return false;
    }
    countryError.innerHTML = '&#x2705';
    return true;
}

//Function to validate State Name
function validateState() {
    var stateName = document.getElementById('state-name').value;

    if (stateName == "") {
        stateError.innerHTML = ' **State name required';
        return false;
    }
    stateError.innerHTML = '&#x2705';
    return true;
}

//Function to validate Address
function validateAddress() {
    var address = document.getElementById('address').value;

    if (address == "") {
        addressError.innerHTML = ' **Address is required';
        return false;
    }
    addressError.innerHTML = '&#x2705';
    return true;
}

//Function to validate PinCode
function validatePinCode() {
    var pinCode = document.getElementById('pincode').value;

    if (pinCode.length == 0) {
        pinCodeError.innerHTML = ' **PinCode is required';
        return false;
    }
    if (pinCode.length !== 6) {
        pinCodeError.innerHTML = ' **PinCode should be of 6 digits';
        return false;
    }
    if (!pinCode.match(/^[0-9]{6}$/)) {
        pinCodeError.innerHTML = ' **Only digits please';
        return false;
    }
    pinCodeError.innerHTML = '&#x2705';
    return true;
}

//Function to validate City Name
function validateCity() {
    var cityName = document.getElementById('city').value;

    if (cityName == "") {
        cityError.innerHTML = ' **City name required';
        return false;
    }
    cityError.innerHTML = '&#x2705';
    return true;
}

//Function to validate District Name
function validateDistrict() {
    var districtName = document.getElementById('district-name').value;

    if (districtName == "") {
        districtError.innerHTML = ' **District name required';
        return false;
    }
    districtError.innerHTML = '&#x2705';
    return true;
}

//Function to validate eventpreferences
function validateEventpreferences() {
    var eventpreferences = document.getElementById('event-preferences').value;

    if (eventpreferences == "") {
        eventpreferencesError.innerHTML = ' **Eventpreferences is required';
        return false;
    }
    eventpreferencesError.innerHTML = '&#x2705';
    return true;
}

//Function to validate tshirt size
function validateTshirt() {
    var tshirt = document.getElementById('t-shirt').value;

    if (tshirt == "") {
        tshirtError.innerHTML = ' **Tshirt size is required';
        return false;
    }
    tshirtError.innerHTML = '&#x2705';
    return true;
}

//Function to validate dietaryrestrictions
function validatedietaryrestrictions() {
    var dietaryrestrictions = document.getElementById('dietaryrestrictions').value;
    var requiredChar = 15;
    var leftChar = requiredChar - dietaryrestrictions.length;

    if (leftChar > 0) {
        dietaryrestrictionsError.innerHTML = leftChar + ' more characters required';
        return false;
    }
    dietaryrestrictionsError.innerHTML = '&#x2705';
    return true;
}

//Function to validate while the submit button is clicked aby the user
function validateForm() {
    if (!validateFName() || !validateLName() || !validateDOB() ||
        !validateEmail() || !validatePhone() || !validateGender() ||
        !validateCountry() || !validateState() || !validateAddress() ||
        !validatePinCode() || !validateCity() || !validateDistrict() || !validateEventpreferences()||
        !validatedietaryrestrictions()) {
        submitError.innerHTML = 'Please fix the error to submit';
        return false;
    }
}