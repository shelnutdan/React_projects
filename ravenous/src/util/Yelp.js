const apiKey='QUwUHhP38h_4Kv3QihwiwrbPivAZvwFN3UgIVbE0Cyt57i0gbLqzv1gq_bSMen033NujRMGvIGy0HOF2vqJkZLl5YTDKf9mPpc98nW0MpotU2fCtgmUkvwggNseLWnYx';
const Yelp ={
  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers:{
        { Authorization:`Bear ${apiKey}` }
      }
    }).then(response => {return response.json();
    }).then(jsonResponse =>{

    });
  }
}
