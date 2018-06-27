# Boba BAE
##  Motivation 
You walk into a place that you have never been to before. It has good yelp reviews, but you become overwhelmed by the number of options. What if there was some way to know what the "Top Rated" items are?

## Current Status
**In Development**

*Currently only styled for mobile screen size*

Working on homepage and search functionality

## Features
* Displays information retrieved from Yelp Fusion Api
* Integrated Google Maps Embed Api to easily search for directions

![Alt text](/readme_imgs/StoreInformation.png)

## Tech/frameworks used
### Frontend 
* React
* Redux
* Styled Components
### Backend
* Ruby on Rails
* Axios
* PostgreSQL
### APIs
* Yelp Fusion
* Google Maps Embed

## Code Examples 
* Thinking in React to ensure code is modular and scalable
```html
const StoreInformation = ({ store }) => (
  <div>
    <StoreName>{store.name}</StoreName>
    <StarRating rating={store.rating} />
    <Text>{store.review_count} Reviews</Text>
    <StoreHours hours={store.hours} />
    <StoreActionButtons />
    <StoreMap name={store.name} location={store.location} />
    <StoreAddress location={store.location.display_address} />
    <CallButton phone={store.phone} displayPhone={store.display_phone} />
    <StoreMoreInfo />
  </div>
);
```
* Stores are added to the database dynamically making sure to only add Boba stores
```ruby
   def show
    yelp_store_info = get_store_info(params[:id])
    @store = Store.find_by(yelp_store_id: yelp_store_info["alias"])

    unless yelp_store_info["error"]
      if @store 
        render json: yelp_store_info.to_json
      elsif find_categories(yelp_store_info).include?("bubbletea")
        create(yelp_store_info)
      else
        render json: { error: "Business is not a Boba Shop" }, status: 422
      end 
    else 
      render json: { error: "Business does not exist" }, status: 404
    end 
  end 
```
* Used Styled Components to easily manage and organize styling
```jsx
import styled from "styled-components";

export const BottomLabeledButtons = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  width: 30vw;
  border: none;
  background: none;
`;
```

## Future Features
* Reviews
* Users Auth
* Check-In

