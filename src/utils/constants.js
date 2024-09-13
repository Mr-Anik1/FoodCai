export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/"; //w_366 or w_660

// https://corsproxy.io/? this solves cors error
export const SWIGGY_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING";

export const MENU_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=";

export const LOGO = "https://iili.io/dgPDe8Q.png";

export const FAVICON = "https://iili.io/dgioyWg.png";

/**
 * @Swiggy_API
 * 
 * 
 * 
 
  // Only 20 
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"; 

  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 


  // 20
  "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1#"

  json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; 
  
 *
 *  
 * 
 * 
 * 
 * --||--------------||||-------------|||----------||--
 *  
 * 
 * 
 *@MenuAPI (New)
 *
 * https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=
 * 
 * json?.data?.cards[2]?.card?.card?.info
 * 
 * 
 * 
 * example resId=819617
 * 
 * @DelivaryTime slaString
 * const {sla:{slaString}}=json?.data?.cards[2]?.card?.card?.info
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * @Another_One (old)
  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=
 * 
 * json?.data?.cards[2]?.card?.card?.info
 *  
 * 
 * 
 * example resId
 * kfc resId=26723(best)
 * 818652
 * 229(mgehna food)
 * 
 * 
 * @DelivaryTime
 * const {nearestOutletNudge} = json?.data?.cards[2]?.card?.card?.info
 * 
 * const delivaryTime = nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla?.slaString
 * 
 * 
 * 
 * 
 * 
 * @Menu_Details
 * 
 * // Here we will find an array of cards.
 * arrayCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
 * 
 * // If we expand 3 number cards, here we will find items of cards.
 * arrayCards[2]?.card?.card?.itemCards
 * 
 * Now we can use map those itemCards and will be found single itemCard 
 * itemCards[0]?.card?.info
 * itemCards[1]?.card?.info
 * itemCards[2]?.card?.info
 * 
 * inside info we will find card details like name,category, description and so on.
 * 
 * 
 * 
 
 *  
 */

// https://www.swiggy.com/restaurants/kfc-sector-3-rohini-delhi-26723
