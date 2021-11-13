const apiKey =
    "YBND9crUxQuerf5s-jlMKVNs2WXm-1UJSK2tRaVwsXXeKUDQ2uR08Ia5SgxKwgT7ufqs7C0n4vpPTGvlU3eMTWCRwSLJ9w1gWcrRMu58k90aeF8MP5lfn9LYsWWPYXYx";

const corsAnywhere = "https://cors-anywhere.herokuapp.com/";

const Yelp = {
    search(term, location, sortBy) {
        return fetch(
            `${corsAnywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            location: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories[0].title,
                            rating: business.rating,
                            reviewCount: business.review_count,
                        };
                    });
                }
            });
    },
    tryingOut() {
        return fetch(
            "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=greek&location=london&sort_by=best_match",
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        ).then((response) => {
            return console.log(response.json());
        });
    },
};

// https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=greek&location=london&sort_by=best_match

export default Yelp;
