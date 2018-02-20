const apiKey='QUwUHhP38h_4Kv3QihwiwrbPivAZvwFN3UgIVbE0Cyt57i0gbLqzv1gq_bSMen033NujRMGvIGy0HOF2vqJkZLl5YTDKf9mPpc98nW0MpotU2fCtgmUkvwggNseLWnYx';
const Yelp ={
  search(term,location,sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
      headers:{
         Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {return response.json();
    }).then(jsonResponse =>{
      if (jsonResponse.businesses){
        return jsonResponse.businesses.map(business => (
          {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        )

      );
      }

    })
  }
};


export default Yelp;
