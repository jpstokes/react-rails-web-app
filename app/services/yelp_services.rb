class YelpServices

  API_KEY = ''

  # Constants, do not change these
  API_HOST = "https://api.yelp.com"
  SEARCH_PATH = "/v3/businesses/search"
  BUSINESS_PATH = "/v3/businesses/"  # trailing / because we append the business id to the path
  SEARCH_LIMIT = 5

  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    params = {
      term: term,
      location: location,
      limit: SEARCH_LIMIT
    }

    response = RestClient.get(url, {
      Authorization: "Bearer #{API_KEY}",
      params: params
    })

    # add response to database
    persists(JSON.parse(response.body))
  end

  def reviews(business_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}/reviews"
    params = {id: business_id}

    response = RestClient.get(url, {
      Authorization: "Bearer #{API_KEY}",
      params: params
    })

    JSON.parse(response.body)['reviews']
  end

  def get_details(business_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"
    params = {id: business_id}

    response = RestClient.get(url, {
      Authorization: "Bearer #{API_KEY}",
      params: params
    })

    JSON.parse(response.body)
  end

  private

  attr_reader :url

  def persists(data)
    businesses = data['businesses']
    new_businesses = []
    businesses.each do |business_data|
      unless Business.find_by_yelp_id(business_data['id'])
        # since search doesn't return all details perform lookup on yelp
        business_details = get_details(business_data['id'])
        new_businesses << Business.create!(
          yelp_id: business_details['id'],
          business_alias: business_details['alias'],
          name: business_details['name'],
          image_url: business_details['image_url'],
          is_claimed: business_details['is_claimed'],
          is_closed: business_details['is_closed'],
          url: business_details['url'],
          price: business_details['price'],
          rating: business_details['rating'],
          review_count: business_details['review_count'],
          phone: business_details['phone'],
          location: business_details['location'],
          transactions: business_details['transactions'],
        )
      end
    end
    new_businesses
  end
end
