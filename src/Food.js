import React from 'react'
import "./Style.css"
import { Restapi } from './content'

const Header=()=>{
    return(
<>
<div className="header">
    <img  className='logo' 
    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt='logo'/>
    
<div className="nav-items">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Cart</li>
    </ul>
</div>
</div>

</>
    )
}
// const Rest=[
//     {
//       info: {
//         "id": "393840",
//         name: "Chinese Wok",
//         "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
//         "locality": "Chikka Lakshmaiah Layout",
//         "areaName": "Adugodi",
//         costForTwo: "₹250 for two",
//         cuisines: [
//           "Chinese",
//           "Asian",
//           "Tibetan",
//           "Desserts"
//         ],
//         "avgRating": 4.2,
//         "parentId": "61955",
//         "avgRatingString": "4.2",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 33,
//           "lastMileTravel": 2.5,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "2.5 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-03 02:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "ITEMS",
//           "subHeader": "AT ₹179"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/chinese-wok-chikka-lakshmaiah-layout-adugodi-bangalore-393840",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "201224",
//         "name": "Asha Tiffins",
//         "cloudinaryImageId": "n15vckntsiboiod3gpco",
//         "locality": "HSR Layout",
//         "areaName": "HSR Layout",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "South Indian",
//           "Chinese",
//           "Desserts",
//           "Beverages",
//           "North Indian"
//         ],
//         "avgRating": 4.5,
//         "parentId": "236243",
//         "avgRatingString": "4.5",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 25,
//           "lastMileTravel": 4,
//           "serviceability": "SERVICEABLE",
//           "slaString": "25-30 mins",
//           "lastMileTravelString": "4.0 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-02 15:30:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.4",
//             "ratingCount": "10K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/asha-tiffins-hsr-layout-bangalore-201224",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "898222",
//         "name": "Iyer Idly",
//         "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/29/cb744abd-3aa1-4221-9c8d-dbca6563573e_898222.jpg",
//         "locality": "Adugodi",
//         "areaName": "Koramangala",
//         "costForTwo": "₹200 for two",
//         "cuisines": [
//           "South Indian"
//         ],
//         "avgRating": 4.7,
//         "veg": true,
//         "parentId": "247814",
//         "avgRatingString": "4.7",
//         "totalRatingsString": "20+",
//         "sla": {
//           "deliveryTime": 23,
//           "lastMileTravel": 1.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-02 21:00:00",
//           "opened": true
//         },
//         "badges": {
          
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "isNewlyOnboarded": true,
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/iyer-idly-adugodi-koramangala-bangalore-898222",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "269402",
//         "name": "The Tea Brewery",
//         "cloudinaryImageId": "v4s7ectlujr8325ejrnc",
//         "locality": "1st Block",
//         "areaName": "Koramangala",
//         "costForTwo": "₹100 for two",
//         "cuisines": [
//           "Beverages",
//           "Snacks",
//           "Bakery",
//           "Desserts",
//           "Fast Food",
//           "Chaat",
//           "Healthy Food"
//         ],
//         "avgRating": 4.6,
//         "parentId": "21147",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 24,
//           "lastMileTravel": 1.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "20-25 mins",
//           "lastMileTravelString": "1.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-03 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/the-tea-brewery-1st-block-koramangala-bangalore-269402",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "325",
//         "name": "Sree Krishna Kafe",
//         "cloudinaryImageId": "us72sjlfo9opsmi8fi6u",
//         "locality": "Koramangala",
//         "areaName": "Koramangala",
//         "costForTwo": "₹137 for two",
//         "cuisines": [
//           "South Indian"
//         ],
//         "avgRating": 4.6,
//         "parentId": "898",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "10K+",
//         "sla": {
//           "deliveryTime": 15,
//           "lastMileTravel": 0.7,
//           "serviceability": "SERVICEABLE",
//           "slaString": "10-15 mins",
//           "lastMileTravelString": "0.7 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-02 22:30:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "aggregatedDiscountInfoV2": {
          
//         },
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "4.3",
//             "ratingCount": "1K+"
//           },
//           "source": "GOOGLE",
//           "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/sree-krishna-kafe-koramangala-bangalore-325",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "387468",
//         "name": "The Breakfast Nook",
//         "cloudinaryImageId": "3a26aa967dc44e104627a4b8a8117454",
//         "locality": "6th Sector",
//         "areaName": "HSR Layout",
//         "costForTwo": "₹300 for two",
//         "cuisines": [
//           "American",
//           "Continental",
//           "Healthy Food",
//           "Beverages"
//         ],
//         "avgRating": 4.6,
//         "parentId": "257216",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 31,
//           "lastMileTravel": 3.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-09 00:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "options available",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "options available"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "50% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/the-breakfast-nook-6th-sector-hsr-layout-bangalore-387468",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "826408",
//         "name": "Ministry of Oats",
//         "cloudinaryImageId": "2550ad0c209aa746cf0afdf2d91f6d07",
//         "locality": "Jakkasandra",
//         "areaName": "HSR",
//         "costForTwo": "₹400 for two",
//         "cuisines": [
//           "Healthy Food",
//           "Desserts"
//         ],
//         "avgRating": 4.7,
//         "veg": true,
//         "parentId": "492566",
//         "avgRatingString": "4.7",
//         "totalRatingsString": "100+",
//         "sla": {
//           "deliveryTime": 30,
//           "lastMileTravel": 3.9,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "3.9 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-02 22:00:00",
//           "opened": true
//         },
//         "badges": {
//           "imageBadges": [
//             {
//               "imageId": "v1695133679/badges/Pure_Veg111.png",
//               "description": "pureveg"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "pureveg",
//                     "imageId": "v1695133679/badges/Pure_Veg111.png"
//                   }
//                 }
//               ]
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
              
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "20% OFF",
//           "subHeader": "UPTO ₹100"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "isNewlyOnboarded": true,
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/ministry-of-oats-jakkasandra-hsr-bangalore-826408",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     },
//     {
//       "info": {
//         "id": "209207",
//         "name": "Prezzed Juicery",
//         "cloudinaryImageId": "vyaguxl8ayzi3v5le1it",
//         "locality": "1st Block",
//         "areaName": "Koramangala",
//         "costForTwo": "₹250 for two",
//         "cuisines": [
//           "Juices",
//           "Healthy Food"
//         ],
//         "avgRating": 4.6,
//         "parentId": "21231",
//         "avgRatingString": "4.6",
//         "totalRatingsString": "1K+",
//         "sla": {
//           "deliveryTime": 32,
//           "lastMileTravel": 1.6,
//           "serviceability": "SERVICEABLE",
//           "slaString": "30-35 mins",
//           "lastMileTravelString": "1.6 km",
//           "iconType": "ICON_TYPE_EMPTY"
//         },
//         "availability": {
//           "nextCloseTime": "2024-08-02 23:00:00",
//           "opened": true
//         },
//         "badges": {
//           "textExtendedBadges": [
//             {
//               "iconId": "guiltfree/GF_Logo_android_3x",
//               "shortDescription": "brand",
//               "fontColor": "#7E808C"
//             }
//           ]
//         },
//         "isOpen": true,
//         "type": "F",
//         "badgesV2": {
//           "entityBadges": {
//             "imageBased": {
              
//             },
//             "textBased": {
              
//             },
//             "textExtendedBadges": {
//               "badgeObject": [
//                 {
//                   "attributes": {
//                     "description": "",
//                     "fontColor": "#7E808C",
//                     "iconId": "guiltfree/GF_Logo_android_3x",
//                     "shortDescription": "brand"
//                   }
//                 }
//               ]
//             }
//           }
//         },
//         "aggregatedDiscountInfoV3": {
//           "header": "30% OFF",
//           "subHeader": "UPTO ₹75"
//         },
//         "orderabilityCommunication": {
//           "title": {
            
//           },
//           "subTitle": {
            
//           },
//           "message": {
            
//           },
//           "customIcon": {
            
//           }
//         },
//         "differentiatedUi": {
//           "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//           "differentiatedUiMediaDetails": {
//             "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//             "lottie": {
              
//             },
//             "video": {
              
//             }
//           }
//         },
//         "reviewsSummary": {
          
//         },
//         "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//         "restaurantOfferPresentationInfo": {
          
//         },
//         "externalRatings": {
//           "aggregatedRating": {
//             "rating": "--"
//           }
//         },
//         "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
//       },
//       "analytics": {
//         "context": "seo-data-d61f44d7-7ad9-4a77-ae57-04d7b3e87617"
//       },
//       "cta": {
//         "link": "https://www.swiggy.com/restaurants/prezzed-juicery-1st-block-koramangala-bangalore-209207",
//         "text": "RESTAURANT_MENU",
//         "type": "WEBLINK"
//       },
//       "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
//     }
//   ]
const Restcard=(props)=>{
    const{datas}=props
    const{
        name,
        cloudinaryImageId,
        costForTwo,
        avgRating,
        deliveryTime,
        cuisines

    }=datas?.info
return(
    <>
<div className="res-card" >
    <img  className='res-logo' 
     src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img"/>
    <h3>{name}</h3>
    <h4>{cuisines}</h4>
    <h4>{costForTwo/100}FOR TWO</h4>
    <h4>{avgRating}Star</h4>
    <h4>{deliveryTime} min</h4>
</div>
    </>
)
}

const Body=()=>{
    return(
        <>
       <div className="body">
       <div className="search">Search</div>
       <div className="res-container">
       {
        Restapi.map((data)=>{
            <Restcard key={data.info.id} datas={data}/>
        })
       }
       </div>
       </div>
       </>
    )
}
const Food = () => {
  return (
    <>
    
     <Header/>
     <Body/>
    
    </>
  )
}

export default Food
